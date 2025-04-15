// Types
import type { Crumb } from 'modules/components/Crumbs';

// Hooks
import { useLanguage } from 'r22n';
import { useState } from 'react';

// Components
import Link from 'next/link';
import { LayoutPanel } from 'modules/theme';
import Crumbs from 'modules/components/Crumbs';
import Props from 'modules/components/Props';
import Code from 'modules/components/Code';
import Toast from 'frui/dist/Toast';

export default function Page() {
  // Hooks
  const { _ } = useLanguage();
  const [toast, setToast] = useState<{ message: string; type: 'info' | 'success' | 'warning' | 'error' } | null>(null);

  // Example 1: Success Toast
  const [successToastVisible, setSuccessToastVisible] = useState(false);
  const showSuccessToast = () => {
    setSuccessToastVisible(true);
  };
  const hideSuccessToast = () => {
    setSuccessToastVisible(false);
  };

  // Example 2: Error Toast with Custom Duration and Close Button
  const [errorToastVisible, setErrorToastVisible] = useState(false);
  const showErrorToast = () => {
    setErrorToastVisible(true);
  };
  const hideErrorToast = () => {
    setErrorToastVisible(false);
  };

  // Example 3: Info Toast
  const [infoToastVisible, setInfoToastVisible] = useState(false);
  const showInfoToast = () => {
    setInfoToastVisible(true);
  };
  const hideInfoToast = () => {
    setInfoToastVisible(false);
  };

  // Example 4: Warning Toast that doesn't auto-hide and has a callback
  const [warningToastVisible, setWarningToastVisible] = useState(false);
  const showWarningToast = () => {
    setWarningToastVisible(true);
  };
  const handleWarningClose = () => {
    alert(_('Warning toast was closed manually.'));
    setWarningToastVisible(false);
  };

  // Variables
  const crumbs: Crumb[] = [
    { icon: 'icons', label: 'Components', href: '/component' },
    { label: 'Toast' }
  ];
  const props = [
    [_('className'), _('string'), _('No'), _('Standard HTML class names')],
    [_('message'), _('string'), _('Yes'), _('Toast message content')],
    [_('type'), _('string'), _('No'), _('Toast type: success, error, warning, info')],
    [_('duration'), _('number'), _('No'), _('Auto-hide duration in milliseconds')],
    [_('closable'), _('boolean'), _('No'), _('Allows manual close')],
    [_('onClose'), _('function'), _('No'), _('Callback when closed')],
  ];

  return (
    <LayoutPanel
      uri="/component/toast"
      title="Toast Component"
      description="Toast notifications in FRUI, are ReactJS components that display brief messages."
    >
      {/* Toast Component Render Area */}
      <div className="fixed bottom-5 right-5 z-50">
        {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} duration={3000} />}
        {successToastVisible && (
          <Toast
            message={_('Successful! Your action was completed.')}
            type="success"
            onClose={hideSuccessToast}
            duration={3000}
          />
        )}
        {errorToastVisible && (
          <Toast
            message={_('An error occurred. Please try again.')}
            type="error"
            onClose={hideErrorToast}
            duration={5000}
          />
        )}
        {warningToastVisible && (
          <Toast
            message={_('This action might have unintended consequences.')}
            type="warning"
            closable
            onClose={handleWarningClose}
            duration={0}
          />
        )}
        {infoToastVisible && (
          <Toast
            message={_('For your information, this page contains valuable content!')}
            type="info"
            closable
            onClose={hideInfoToast}
            duration={5000}
          />
        )}
      </div>

      <main className="flex flex-col h-full w-full">
        <div className="p-3 bg-b2">
          <Crumbs crumbs={crumbs} />
        </div>
        <div className="flex-grow relative h-full">
          <aside className="hidden lg:block absolute top-0 bottom-0 right-0 z-1 w-56 border-l border-b1 text-sm">
            <h4 className="p-3 border-b border-b1 bg-b1 uppercase font-semibold">
              <Link href="#top">{_('Toast')}</Link>
            </h4>
            <ul className="list-disc py-3 pr-3 pl-6">
              <li className="pl-3 pb-1">
                <Link href="#props">
                  {_('Props')}
                </Link>
              </li>
              <li className="pl-3 pb-1">
                <Link href="#example-success">
                  {_('Success Example')}
                </Link>
              </li>
              <li className="pl-3 pb-1">
                <Link href="#example-error">
                  {_('Error Example')}
                </Link>
              </li>
              <li className="pl-3 pb-1">
                <Link href="#example-warning">
                  {_('Warning Example')}
                </Link>
              </li>
            </ul>
          </aside>
          <div className="absolute top-0 bottom-0 left-0 right-0 lg:right-56 px-3 pt-3 pb-5 h-full overflow-auto">
            <h1 className="flex items-center uppercase font-bold text-xl">
              {_('Toast')}
            </h1>
            <Code language="typescript" className="mt-2">
              {`import Toast from 'frui/dist/Toast';`}
            </Code>

            <h2 id="props" className="uppercase font-bold text-lg mt-8">
              {_('Props')}
            </h2>
            <Props props={props} />

            {/* Example 1: Success */}
            <h2 id="example-success" className="uppercase font-bold text-lg mt-8">
              {_('Success Example')}
            </h2>
            <p className="py-4">
              Demonstrates a simple success notification that appears briefly and automatically disappears after 3 seconds.
            </p>
            <div className="curved overflow-hidden">
              <div className="p-3 bg-b1">
                <button className="px-4 py-2 bg-green-500 text-white rounded" onClick={showSuccessToast}>
                  {_('Show Success Toast')}
                </button>
              </div>
              <Code language="typescript">
                {`const [successToastVisible, setSuccessToastVisible] = useState(false);
const showSuccessToast = () => {
  setSuccessToastVisible(true);
};
const hideSuccessToast = () => {
  setSuccessToastVisible(false);
};

{successToastVisible && (
  <Toast
    message={_('Successful! Your action was completed.')}
    type="success"
    closable
    onClose={hideSuccessToast}
    duration={3000}
  />
)}

<button className="px-4 py-2 bg-green-500 text-white rounded" onClick={showSuccessToast}>
  {_('Show Success Toast')}
</button>`}
              </Code>
            </div>

            {/* Example 2: Error with Custom Duration and Close */}
            <h2 id="example-error" className="uppercase font-bold text-lg mt-8">
              {_('Error Example')}
            </h2>
            <p className="py-4">
              Shows an error notification that persists for 5 seconds and includes a close button for manual dismissal.
            </p>
            <div className="curved overflow-hidden mt-4">
              <div className="p-3 bg-b1">
                <button className="px-4 py-2 bg-red-500 text-white rounded" onClick={showErrorToast}>
                  {_('Show Error Toast')}
                </button>
              </div>
              <Code language="typescript">
                {`const [errorToastVisible, setErrorToastVisible] = useState(false);
const showErrorToast = () => {
  setErrorToastVisible(true);
};
const hideErrorToast = () => {
  setErrorToastVisible(false);
};

{errorToastVisible && (
  <Toast
    message={_('An error occurred. Please try again.')}
    type="error"
    closable
    onClose={hideErrorToast}
    duration={5000}
  />
)}

<button className="px-4 py-2 bg-red-500 text-white rounded" onClick={showErrorToast}>
  {_('Show Error Toast')}
</button>`}
              </Code>
            </div>

            {/* Example 3: Info */}
            <h2 id="example-info" className="uppercase font-bold text-lg mt-8">
              {_('Info Example')}
            </h2>
            <p className="py-4">
              Presents an informational notification with a close button, lasting for 5 seconds.
            </p>
            <div className="curved overflow-hidden mt-4">
              <div className="p-3 bg-b1">
                <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={showInfoToast}>
                  {_('Show Info Toast')}
                </button>
              </div>
              <Code language="typescript">
                {`const [infoToastVisible, setInfoToastVisible] = useState(false);
const showInfoToast = () => {
  setInfoToastVisible(true);
};
const hideInfoToast = () => {
  setInfoToastVisible(false);
};

{infoToastVisible && (
  <Toast
    message={_('For your information, this page contains valuable content!')}
    type="error"
    closable
    onClose={hideInfoToast}
    duration={5000}
  />
)}

<button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={showInfoToast}>
  {_('Show Info Toast')}
</button>`}
              </Code>
            </div>

            {/* Example 3: Warning with No Auto-Hide and Callback */}
            <h2 id="example-warning" className="uppercase font-bold text-lg mt-8">
              {_('Warning Example')}
            </h2>
            <p className="py-4">
              Illustrates a warning notification that remains visible until the user manually closes it.
            </p>
            <div className="curved overflow-hidden mt-4">
              <div className="p-3 bg-b1">
                <button className="px-4 py-2 bg-yellow-500 text-yellow-900 rounded" onClick={showWarningToast}>
                  {_('Show Persistent Warning')}
                </button>
              </div>
              <Code language="typescript">
                {`const [warningToastVisible, setWarningToastVisible] = useState(false);
const showWarningToast = () => {
  setWarningToastVisible(true);
};
const handleWarningClose = () => {
  alert(_('Warning toast was closed manually.'));
  setWarningToastVisible(false);
};

{warningToastVisible && (
  <Toast
    message={_('This action might have unintended consequences.')}
    type="warning"
    closable
    onClose={handleWarningClose}
    duration={0}
  />
)}

<button className="px-4 py-2 bg-yellow-500 text-yellow-900 rounded" onClick={showWarningToast}>
  {_('Show Persistent Warning')}
</button>`}
              </Code>
            </div>

            <div className="flex items-center border-t border-b1 my-8 py-8">
              <Link className="text-t2" href="/component/progressbar">
                <i className="fas fa-arrow-left mr-2"></i>
                {_('Table')}
              </Link>
              <div className="flex-grow"></div>
              <Link className="text-t2" href="/field">
                {_('Fields')}
                <i className="fas fa-arrow-right ml-2"></i>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </LayoutPanel>
  );
}

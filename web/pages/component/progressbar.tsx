//types
import type { Crumb } from 'modules/components/Crumbs';
//hooks
import { useLanguage } from 'r22n';
import { useState } from 'react';
//components
import Link from 'next/link';
import ProgressBar from 'frui/dist/ProgressBar';
import { LayoutPanel } from 'modules/theme';
import Crumbs from 'modules/components/Crumbs';
import Props from 'modules/components/Props';
import Code, { InlineCode as C } from 'modules/components/Code';

export default function Page() {
  //hooks
  const { _ } = useLanguage();
  const [progress, setProgress] = useState(50);

  //variables
  const crumbs: Crumb[] = [
    { icon: 'icons', label: 'Components', href: '/component' },
    { label: 'ProgressBar' }
  ];

  const props = [
    [ _('className'), _('string'), _('No'), _('Standard HTML class names') ],
    [ _('color'), _('string'), _('No'), _('Custom CSS hex or name') ],
    [ _('value'), _('number'), _('Yes'), _('Progress percentage') ],
    [ _('max'), _('number'), _('No'), _('Maximum progress value, default is 100') ],
    [ _('style'), _('CSS Object'), _('No'), _('Standard CSS input') ],
  ];

  //render
  return (
    <LayoutPanel
      uri="/component/progressbar"
      title="ProgressBar Component"
      description="Progress bars in FRUI, are ReactJS components that display loading or completion status."
    >
      <main className="flex flex-col h-full w-full">
        <div className="p-3 bg-b2">
          <Crumbs crumbs={crumbs} />
        </div>
        <div className="flex-grow relative h-full">
        <aside className="hidden lg:block absolute top-0 bottom-0 right-0 z-1 w-56 border-l border-b1 text-sm">
            <h4 className="p-3 border-b border-b1 bg-b1 uppercase font-semibold">
              <Link href="#top">{_('Progress Bar')}</Link>
            </h4>
            <ul className="list-disc py-3 pr-3 pl-6">
              <li className="pl-3 pb-1">
                <Link href="#props">
                  {_('Props')}
                </Link>
              </li>
              <li className="pl-3 pb-1">
                <Link href="#basics">
                  {_('Basics')}
                </Link>
              </li>
              <li className="pl-3 pb-1">
                <Link href="#customs">
                  {_('Customs')}
                </Link>
              </li>
              <li className="pl-3 pb-1">
                <Link href="#label">
                  {_('Label')}
                </Link>
              </li>
            </ul>
          </aside>
          <div className="absolute top-0 bottom-0 left-0 right-0 lg:right-56 px-3 pt-3 pb-5 h-full overflow-auto">
            <h1 className="flex items-center uppercase font-bold text-xl">
              {_('ProgressBar')}
            </h1>
            <Code language="typescript" className="mt-2">
              {`import ProgressBar from 'frui/ProgressBar';`}
            </Code>

            <h2 id="props" className="uppercase font-bold text-lg mt-8">
              {_('Props')}
            </h2>
            <Props props={props} />
            <h2 id="basics" className="uppercase font-bold text-lg mt-8">
              {_('Basic Usage')}
            </h2>
            <p className="py-4">
              A simple progress bar with default styling. You can adjust its height using CSS classes.
            </p>
            <div className="curved overflow-hidden">
              <div className="p-3 bg-b1">
                <div className="relative w-full h-4 bg-gray-300"> 
                  <ProgressBar value={50} max={100} className="h-4" /> 
                </div>
              </div>
              <Code language="typescript">
                {`<ProgressBar value={50} max={100} className="h-4 rounded" />`}
              </Code>
            </div>
            <h2 id="customs" className="uppercase font-bold text-lg mt-8">
              {_('Custom Color & Rounded')}
            </h2>
            <p className="py-4">
              The progress bar can have custom colors and rounded edges using the <C value="color" /> prop and utility classes like <C value="rounded-full" />. You can also use the <C value="style" /> prop for more specific styling.
            </p>
            <div className="curved overflow-hidden">
              <div className="p-3 bg-b1">
                <div className="relative w-full h-4 bg-gray-300 rounded"> {/* Use rounded-full class on the container */}
                  <ProgressBar value={85} max={100} color="salmon" className="h-4 rounded" /> {/* Apply rounded-full to ProgressBar */}
                </div>
              </div>
              <Code language="typescript">
                {`<ProgressBar value={85} max={100} color="salmon" className="h-4 rounded" />`}
              </Code>
            </div>
            <h2 id="label" className="uppercase font-bold text-lg mt-8">
              {_('Centered Label')}
            </h2>
            <p className="py-4">
              The progress bar can display a centered label with percentage or text by positioning a <C value="span" /> element absolutely within a relative container.
            </p>
            <div className="curved overflow-hidden">
              <div className="p-3 bg-b1 relative">
                <div className="relative w-full h-4 bg-gray-300 rounded-full">
                  <ProgressBar value={65} max={100} color="green" className="h-4 rounded-full" />
                  <span className="absolute inset-0 flex items-center justify-center text-white font-bold">
                    65%
                  </span>
                </div>
              </div>
              <Code language="typescript">
                {`<div className="relative w-full">
  <ProgressBar value={65} max={100} color="green" className="h-4 rounded-full" />
  <span className="absolute inset-0 flex items-center justify-center text-white font-bold">
    65%
  </span>
</div>`}
              </Code>
            </div>
            <div className="curved overflow-hidden">
              <div className="p-3 bg-b1 relative">
                <div className="relative w-full h-4 bg-gray-300 rounded-md">
                  <ProgressBar value={35} max={100} color="blue" className="h-4 rounded-md" />
                  <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm">
                    Loading...
                  </span>
                </div>
              </div>
              <Code language="typescript">
                {`<div className="relative w-full">
  <ProgressBar value={35} max={100} color="blue" className="h-4 rounded-md" />
  <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm">
    Loading...
  </span>
</div>`}
              </Code>
            </div>
            <div className="flex items-center border-t border-b2 mt-8 pt-4">
              <Link className="text-t2" href="/component/modal">
                <i className="fas fa-arrow-left mr-2"></i>
                {_('Modal')}
              </Link>
              <div className="flex-grow"></div>
              <Link className="text-t2" href="/component/table">
                {_('Table')}
                <i className="fas fa-arrow-right ml-2"></i>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </LayoutPanel>
  );
}
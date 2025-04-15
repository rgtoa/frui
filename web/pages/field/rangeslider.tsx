//types
import type { Crumb } from 'modules/components/Crumbs';
//hooks
import { useLanguage } from 'r22n';
import { useState, useCallback } from 'react'; // Import useCallback
//components
import Link from 'next/link';
import { Translate } from 'r22n';
import RangeSlider from 'frui/dist/fields/RangeSlider';
import { LayoutPanel } from 'modules/theme';
import Crumbs from 'modules/components/Crumbs';
import Props from 'modules/components/Props'; // Import Props
import Code, { InlineCode as C } from 'modules/components/Code';

export default function Home() {
  //hooks
  const { _ } = useLanguage();
  const [basicSliderValue, setBasicSliderValue] = useState(50);
  const [snappingSliderValue, setSnappingSliderValue] = useState(10);
  const [restrictedSliderValue, setRestrictedSliderValue] = useState(50);

  // Define the specific snap points
  const snapPoints = [10, 23, 48, 71, 99];
  const handleSnappingSliderChange = useCallback((newValue: number) => {
    setSnappingSliderValue(newValue);
  }, []);

  // Restricted range
  const restrictedMin = 25;
  const restrictedMax = 75;
  const handleRestrictedSliderChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.valueAsNumber);
    setRestrictedSliderValue(Math.max(restrictedMin, Math.min(restrictedMax, newValue)));
  }, [restrictedMin, restrictedMax]);

  //variables
  const crumbs: Crumb[] = [
    { icon: 'rectangle-list', label: 'Fields', href: '/field' },
    { label: 'RangeSlider' }
  ];

  const props = [
    [ _('className'), _('string'), _('No'), _('Standard HTML class names') ],
    [ _('defaultValue'), _('number|number[]'), _('No'), _('Default value (Uncontrolled)') ],
    [ _('disabled'), _('boolean'), _('No'), _('Disable the slider') ],
    [ _('error'), _('string|boolean'), _('No'), _('Any error message') ],
    [ _('label'), _('string'), _('No'), _('Shows text above the slider') ],
    [ _('max'), _('number'), _('Yes (100)'), _('Maximum value of the slider') ],
    [ _('min'), _('number'), _('Yes (0)'), _('Minimum value of the slider') ],
    [ _('name'), _('string'), _('No'), _('Used for react server components.') ],
    [ _('onChange'), _('Function'), _('No'), _('Event handler when value has changed') ],
    [ _('onUpdate'), _('Function'), _('No'), _('Update event handler, returns single value or array') ],
    [ _('passRef'), _('LegacyRef'), _('No'), _('Passes ref to html input') ],
    [ _('step'), _('number'), _('No (1)'), _('Steps between values') ],
    [ _('style'), _('CSS Object'), _('No'), _('Standard CSS object') ],
    [ _('value'), _('number|number[]'), _('No'), _('Controlled value(s)') ],
    [_('snapPoints'), _('number[]'), _('No'), _('Array of numbers to snap the slider to.')],
  ];

  return (
    <LayoutPanel
      uri="/field/rangeslider"
      title="RangeSlider Field"
      description="RangeSlider fields in FRUI, are ReactJS components that allow users to select a single value or a range of values."
    >
      <main className="flex flex-col h-full w-full">
        <div className="p-3 bg-b2">
          <Crumbs crumbs={crumbs} />
        </div>
        <div className="flex-grow relative h-full">
          <aside className="hidden lg:block absolute top-0 bottom-0 right-0 z-1 w-56 border-l border-b1 text-sm">
            <h4 className="p-3 border-b border-b1 bg-b1 uppercase font-semibold">
              <Link href="#top">{_('RangeSlider')}</Link>
            </h4>
            <ul className="list-disc py-3 pr-3 pl-6">
              <li className="pl-3 pb-1">
                <Link href="#props">
                  {_('Props')}
                </Link>
              </li>
              <li className="pl-3 pb-1">
                <Link href="#basic">
                  {_('Basics')}
                </Link>
              </li>
              <li className="pl-3 pb-1">
                <Link href="#snapping">
                  {_('Snapping to Specific Values')}
                </Link>
              </li>
              <li className="pl-3 pb-1">
                <Link href="#restricted-range">
                  {_('Restricting to a Specific Range')}
                </Link>
              </li>
            </ul>
          </aside>
          <div className="absolute top-0 bottom-0 left-0 right-0 lg:right-56 px-3 pt-3 pb-5 h-full overflow-auto">
            <h1 id="top" className="flex items-center uppercase font-bold text-xl">
              {_('RangeSlider')}
            </h1>
            <Code language="typescript" className="mt-2">
              {`import RangeSlider from 'frui/fields/RangeSlider';`}
            </Code>

            <h2 id="props" className="uppercase font-bold text-lg mt-8">
              {_('Props')}
            </h2>
            <p>
              <Translate>
                RangeSlider accepts all props of a standard HTML input
                element of type <C value="range" />. See <a
                  className="text-t2 underline"
                  href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range"
                  target="_blank"
                >Moz</a> for standard range input attributes.
              </Translate>
            </p>
            <Props props={props} />

            <h2 id="basic" className="uppercase font-bold text-lg mt-8">
              {_('Basics')}
            </h2>
            <p className="py-4">
              <Translate>
                A basic RangeSlider with a value indicator.
              </Translate>
            </p>
            <div className="curved overflow-hidden">
              <div className="flex items-center justify-center p-3 bg-b1">
                <div className="flex items-center">
                <RangeSlider
                  name="slider"                    
                  min={0}
                  max={100}
                  step={1}
                  defaultValue={50}
                  onChange={(e) => setBasicSliderValue((e.target as HTMLInputElement).valueAsNumber)}
                  accentColor="blue"
                />
                  <div className="w-12 text-right font-semibold">{basicSliderValue}</div>
                </div>
              </div>
              <Code language="typescript">
                {`<RangeSlider
  name="slider"
  min={0}
  max={100}
  step={1}
  defaultValue={50}
  onChange={(e) => setSliderValue((e.target as HTMLInputElement).valueAsNumber)}
  accentColor="blue"
/>
<div className="w-12 text-right font-semibold">{sliderValue}</div>`}
              </Code>
            </div>

            <h2 id="snapping" className="uppercase font-bold text-lg mt-8">
              {_('Snapping to Specific Values')}
            </h2>
            <p className="py-4">
              <Translate>
                This example demonstrates how to make the RangeSlider snap to specific values (10, 23, 48, 71, 99) using the <C value="snapPoints" /> prop. The snapping logic is handled within the <C value="RangeSlider" /> component itself.
              </Translate>
            </p>
            <div className="curved overflow-hidden">
              <div className="flex items-center justify-center p-3 bg-b1">
                <div className="flex items-center">
                  <RangeSlider
                    name="snapSlider"
                    min={50}
                    max={150}
                    step={1}
                    value={snappingSliderValue}
                    onChange={(e) => handleSnappingSliderChange(Number((e.target as HTMLInputElement).valueAsNumber))}
                    accentColor="red"
                    snapPoints={[60, 90, 120, 150]}
                  />
                  <div className="w-12 text-right font-semibold">{snappingSliderValue}</div>
                </div>
              </div>
              <Code language="typescript">
                {`<RangeSlider
  name="snapVolume"
  min={50}
  max={150}
  step={1}
  value={snappingSliderValue}
  onChange={(e) => handleSnappingSliderChange(Number(e.target.valueAsNumber))}
  className="mr-4"
  accentColor="red"
  snapPoints={[10, 40, 70, 100]}
/>
<div className="w-12 text-right font-semibold">{snappingSliderValue}</div>`}
              </Code>
            </div>

            <h2 id="restricted-range" className="uppercase font-bold text-lg mt-8">
              {_('Restricting to a Specific Range')}
            </h2>
            <p className="py-4">
              <Translate>
                This example demonstrates restricting the RangeSlider to values between 25 and 75.
              </Translate>
            </p>
            <div className="curved overflow-hidden">
              <div className="flex items-center justify-center p-3 bg-b1">
                <div className="flex items-center">
                  <RangeSlider
                    name="restrictedVolume"
                    min={0}
                    max={100}
                    value={restrictedSliderValue}
                    onChange={handleRestrictedSliderChange}
                    className="mr-4"
                    style={{ accentColor: 'teal' }}
                  />
                  <div className="w-12 text-right font-semibold">{restrictedSliderValue}</div>
                </div>
              </div>
              <Code language="typescript">
                {`export default () => {
  const [restrictedSliderValue, setRestrictedSliderValue] = useState(50);
  const restrictedMin = 25;
  const restrictedMax = 75;
  const handleRestrictedSliderChange = useCallback((event) => {
    const newValue = Number(event.target.valueAsNumber);
    setRestrictedSliderValue(Math.max(restrictedMin, Math.min(restrictedMax, newValue)));
  }, [restrictedMin, restrictedMax]);

  return (
    <div className="flex items-center">
      <RangeSlider
        name="restrictedVolume"
        min={0}
        max={100}
        value={restrictedSliderValue}
        onChange={handleRestrictedSliderChange}
        className="mr-4"
        style={{ accentColor: 'teal' }}
      />
      <div className="w-12 text-right font-semibold">{restrictedSliderValue}</div>
    </div>
  );
};`}
              </Code>
            </div>

            <div className="flex items-center border-t border-b2 mt-8 pt-4">
              <Link className="text-t2" href="/field/switch">
                <i className="fas fa-arrow-left mr-2"></i>
                {_('Switch')}
              </Link>
              <div className="flex-grow"></div>
              <Link className="text-t2" href="/field/select">
                {_('Select')}
                <i className="fas fa-arrow-right ml-2"></i>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </LayoutPanel>
  );
}
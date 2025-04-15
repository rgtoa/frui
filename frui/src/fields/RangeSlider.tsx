//types
import type { ChangeEvent, CSSProperties } from 'react';
import type { InputConfig } from './Input';
import type { HTMLInputProps } from '../types';
//hooks
import { useState, useEffect, useCallback } from 'react';

/**
 * RangeSlider Props
 */
export type RangeSliderProps = HTMLInputProps & {
  label?: string,
  error?: any,
  min?: number,
  max?: number,
  step?: number,
  style?: CSSProperties,
  className?: string,
  onUpdate?: (value: number | number[] | undefined) => void,
  snapPoints?: number[],
  accentColor?: string, // Prop for accent color
};

/**
 * RangeSlider Hook Aggregate
 */
export function useRangeSlider(
  config: InputConfig & {
    min?: number;
    max?: number;
    step?: number;
    defaultValue?: any;
    value?: any;
    snapPoints?: number[];
    accentColor?: string; // Receive accentColor in config
  }
) {
  const { onChange, onUpdate, defaultValue, value, snapPoints, accentColor } = config;
  const [currentValue, setValue] = useState<number | number[] | undefined>(defaultValue || value);

  const getClosestSnapPoint = useCallback((val: number) => {
    if (!snapPoints || snapPoints.length === 0) {
      return val;
    }
    return snapPoints.reduce((prev, curr) => {
      return (Math.abs(curr - val) < Math.abs(prev - val) ? curr : prev);
    });
  }, [snapPoints]);

  useEffect(() => {
    if (typeof value !== 'undefined' && value !== currentValue) {
      setValue(value);
    }
  }, [value, currentValue]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue: number = (e.target as HTMLInputElement).valueAsNumber;
    const snappedValue = snapPoints ? getClosestSnapPoint(newValue) : newValue;
    setValue(snappedValue);
    onChange && onChange(e);
    onUpdate && onUpdate(snappedValue);
  };

  return {
    currentValue,
    handlers: {
      change: handleChange,
    },
    accentColor, // Return accentColor for inline style
  };
}

/**
 * Styled RangeSlider Component (Main)
 */
export default function RangeSlider(props: RangeSliderProps) {
  //separate component related props from field attributes
  const {
    defaultValue,
    value,
    label,
    error,
    min = 0,
    max = 100,
    step = 1,
    style,
    className,
    onChange,
    onUpdate,
    snapPoints,
    accentColor, // Receive accentColor prop
    ...attributes
  } = props;
  //hooks
  const { currentValue, handlers, accentColor: hookAccentColor } = useRangeSlider({
    onChange,
    onUpdate,
    defaultValue,
    value,
    min,
    max,
    step,
    snapPoints,
    accentColor, // Pass accentColor to the hook
  });

  const componentClassName = ['frui-field-rangeslider'];
  if (error) {
    componentClassName.push('frui-tx-error');
  }
  if (className) {
    componentClassName.push(className);
  }

  const inputStyle: CSSProperties = {
    ...style,
    accentColor: hookAccentColor, // Apply accentColor directly as inline style
  } as CSSProperties;

  return (
    <div className={componentClassName.join(' ')} style={style}>
      {label && <label className="frui-field-rangeslider__label">{label}</label>}
      <input
        {...attributes}
        type="range"
        className="frui-field-rangeslider__control"
        min={min}
        max={max}
        step={step}
        value={typeof currentValue !== 'undefined' ? (Array.isArray(currentValue) ? currentValue.join(',') : currentValue) : undefined}
        onChange={handlers.change}
        style={inputStyle}
      />
    </div>
  );
}
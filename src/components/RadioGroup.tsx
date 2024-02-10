import React, { FC, ReactNode, useEffect, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { RadioGroupContext } from './RadioGroupContext';

export interface RadioGroupProps {
  name: string;
  value: string;
  onChange: (value: string) => void;
  direction: 'horizontal' | 'vertical';
  variant?: 'radio' | 'inline';
  children: ReactNode;
  className?: string;
}

type HighlightParams = {
  top: number;
  left: number;
  width: number;
  height: number;
};

export const RadioGroup: FC<RadioGroupProps> = ({
  name,
  value,
  onChange,
  direction,
  variant = 'radio',
  children,
  className,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [highlightParams, setHighlightParams] = useState<HighlightParams>();

  useEffect(() => {
    if (variant === 'inline') {
      const selectedButton = ref.current?.querySelector('input:checked');
      if (selectedButton?.parentElement)
        setHighlightParams({
          top: selectedButton.parentElement.offsetTop,
          left: selectedButton.parentElement.offsetLeft,
          width: selectedButton.parentElement.offsetWidth,
          height: selectedButton.parentElement.offsetHeight,
        });
    }
  }, [value, children, direction]);

  return (
    <RadioGroupContext.Provider
      value={{ name, value, variant, direction, onChange }}
    >
      <div
        ref={ref}
        className={twMerge(
          'isolate',
          direction === 'horizontal' && 'flex gap-4',
          direction === 'vertical' && 'flex flex-col gap-2',
          variant === 'inline' &&
            'relative w-fit gap-0 rounded-xl bg-white p-1',
          className,
        )}
      >
        {variant === 'inline' && highlightParams && (
          <div
            className={`absolute rounded-lg bg-blue-brilliant transition-all`}
            style={highlightParams}
          ></div>
        )}
        {children}
      </div>
    </RadioGroupContext.Provider>
  );
};

export default RadioGroup;

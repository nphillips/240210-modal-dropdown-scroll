import React from 'react';
import { twMerge } from 'tailwind-merge';

export interface HeadingProps {
  size?: 'h1' | 'h2' | 'h3' | 'h4';
  heading: string;
  subheading?: string;
  className?: string;
  eyebrow?: string;
  isAlert?: boolean;
  line?: boolean;
}
export const Heading = ({
  size = 'h3',
  heading,
  subheading,
  className,
  eyebrow,
  isAlert,
  line,
}: HeadingProps) => {
  const showLine =
    line !== undefined ? line : size === 'h1' || size === 'h2' || size === 'h3';

  return (
    <div className={twMerge('[text-wrap:balance]', className)}>
      {eyebrow && (
        <div className="mb-1 text-[0.875rem] font-semibold uppercase leading-[1.5] tracking-[-.00875rem] text-blue-suede">
          {eyebrow}
        </div>
      )}
      <div
        className={twMerge(
          'w-fit text-[1.75rem] leading-[1] tracking-[-.0625rem] [text-wrap:balance]',
          showLine && 'pb-[.75rem] ',
        )}
      >
        {React.createElement(
          size,
          {
            className: twMerge(
              'inline leading-[1] tracking-[-.0625rem]',
              size === 'h1' && 'text-h1',
              size === 'h2' && 'text-h2',
              size === 'h3' && 'text-h3',
              size === 'h4' &&
                'text-[1.5rem] font-semibold leading-[1.25] tracking-[-0.0625rem] text-[#272B32]',
              // line
              showLine && 'relative',
              showLine &&
                'before:absolute before:bottom-0 before:left-0 before:right-0 before:mb-[-.5rem] before:h-[0.25rem] before:bg-blue-brilliant',
              !showLine && 'before:hidden',
              // alert
              isAlert && 'before:bg-alert-error-light',
            ),
          },
          heading,
        )}
      </div>
      {subheading && (
        <div className="mt-3 font-semibold leading-[1.25] text-[#475467]">
          {subheading}
        </div>
      )}
    </div>
  );
};

export default Heading;

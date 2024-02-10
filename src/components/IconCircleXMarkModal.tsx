import React from 'react';
import { twMerge } from 'tailwind-merge';

export interface IconCircleXMarkModalProps {
  className?: string;
}

export const IconCircleXMarkModal = ({
  className,
}: IconCircleXMarkModalProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 30 30"
      className={twMerge('h-[1.875rem] w-[1.875rem]', className)}
    >
      <path
        fillRule="evenodd"
        d="M15.1 2.2C7.976 2.2 2.2 7.976 2.2 15.1 2.2 22.224 7.976 28 15.1 28 22.224 28 28 22.224 28 15.1c0-7.124-5.776-12.9-12.9-12.9zM1 15.1C1 7.313 7.313 1 15.1 1s14.1 6.313 14.1 14.1-6.313 14.1-14.1 14.1S1 22.887 1 15.1zm9.176-4.924a.6.6 0 01.848 0L15.1 14.25l4.076-4.075a.6.6 0 01.848.848L15.948 15.1l4.076 4.076a.6.6 0 01-.848.848L15.1 15.948l-4.076 4.076a.6.6 0 01-.848-.848L14.25 15.1l-4.075-4.076a.6.6 0 010-.848z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export default IconCircleXMarkModal;

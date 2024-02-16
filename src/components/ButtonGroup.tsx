// ButtonGroup.tsx
import React, { createContext, ReactNode, ReactElement } from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonContextProps {
  size?: string;
  variant?:
    | 'inverse'
    | 'primary'
    | 'secondary'
    | 'outline-primary'
    | 'outline-secondary'
    | 'ghost-primary';
  isGroupChild?: boolean;
  disabled?: boolean;
}

export const ButtonContext = createContext<ButtonContextProps>({});

interface ButtonGroupProps {
  children: ReactNode;
  variant?:
    | 'inverse'
    | 'primary'
    | 'secondary'
    | 'outline-primary'
    | 'outline-secondary'
    | 'ghost-primary';
  size?: string;
  className?: string;
  disabled?: boolean;
}

export const ButtonGroup = ({
  children,
  variant = 'inverse',
  size = 'medium',
  className,
  disabled,
}: ButtonGroupProps) => {
  return (
    //  prettier-ignore
    <ButtonContext.Provider value={{ variant, size, isGroupChild: true }}>
      <div
        className={twMerge(
          'isolate flex w-fit rounded-[0.5rem] [&>*]:relative [&>*]:z-[-1] [&>*:first-child]:rounded-l-[.5rem] [&_.button-content]:z-[1] [&>*:last-child]:rounded-r-[.5rem]',
          // group dividers
          '[&>*]:before:absolute [&>*]:before:top-[.5rem] [&>*]:before:bottom-[.5rem] [&>*]:before:left-[-1px] [&>*]:before:z-[-1] [&>*]:before:border-l  [&>*:first-child]:before:hidden [&>*:focus-visible]:z-[1] [&>*:focus-visible]:before:hidden [&>*:hover]:z-[1] ',
          // :after only shows on hovering to cover up the divider that doesn't belong to the hovered button
          '[&>*]:after:pointer-events-none [&>*]:after:absolute [&>*]:after:top-0 [&>*]:after:bottom-0 [&>*]:after:left-[-1px] [&>*]:after:right-0 [&>*]:after:opacity-0 [&>*]:after:transition-opacity [&>*:first-child]:after:rounded-l-[.5rem] [&>*:last-child]:after:rounded-r-[.5rem]',
          // size-related and only when not within a group - shadows
          !disabled && variant === 'primary' && size === 'small' && 'shadow-com-button2-small-inactive',
          !disabled && variant === 'primary' && size === 'medium' && 'shadow-com-button2-medium-inactive',
          !disabled && variant === 'primary' && size === 'large' && 'shadow-com-button2-large-inactive',
          !disabled && variant === 'secondary' && size === 'small' && 'shadow-com-button2-small-inactive',
          !disabled && variant === 'secondary' && size === 'medium' && 'shadow-com-button2-medium-inactive',
          !disabled && variant === 'secondary' && size === 'large' && 'shadow-com-button2-large-inactive',
          !disabled && variant === 'inverse' && size === 'small' && 'shadow-com-button2-small-inactive',
          !disabled && variant === 'inverse' && size === 'medium' && 'shadow-com-button2-medium-inactive',
          !disabled && variant === 'inverse' && size === 'large' && 'shadow-com-button2-large-inactive',
          disabled && ' bg-[#E7ECF3] text-[#98A2B3] shadow-[0_0_0_1px_#D4DFEA_inset] [&>button]:pointer-events-none [&>*]:before:opacity-30 cursor-not-allowed', 
          !disabled && variant === 'primary' && ' bg-[#0061FF] text-white [&>*]:before:opacity-30 [&_button:disabled_.button-content]:text-white/50 [&_button:not(:disabled):hover]:after:bg-[#0047BA] [&_button:not(:disabled):hover]:after:opacity-100',
          !disabled && variant === 'secondary' && 'bg-[#16181C] text-white [&>*]:before:opacity-30 [&_button:disabled_.button-content]:text-white/50 [&_button:not(:disabled):hover]:after:bg-[#32353A] [&_button:not(:disabled):hover]:after:opacity-100',
          !disabled && variant === 'outline-primary' && 'text-[#0061FF] shadow-[0_0_0_1px_#0061FF_inset] [&>*]:before:opacity-30  [&_button:disabled_.button-content]:text-[#0061FF]/50 [&_button:not(:disabled):hover]:text-white [&_button:not(:disabled):hover]:after:bg-[#0047BA] [&_button:not(:disabled):hover]:after:opacity-100',
          !disabled && variant === 'outline-secondary' && 'text-[#16181C] shadow-[0_0_0_1px_#16181C_inset] [&>*]:before:opacity-20  [&_button:disabled_.button-content]:text-[#16181C]/50 [&_button:not(:disabled):hover]:text-white [&_button:not(:disabled):hover]:after:bg-[#32353A] [&_button:not(:disabled):hover]:after:opacity-100',
          !disabled && variant === 'ghost-primary' && 'text-[#0061FF] [&>*]:before:opacity-30  [&_button:disabled_.button-content]:text-[#0061FF]/50 [&_button:not(:disabled):hover]:text-white [&_button:not(:disabled):hover]:after:bg-[#0047BA] [&_button:not(:disabled):hover]:after:opacity-100',
          !disabled && variant === 'inverse' && 'bg-[#F8FCFF] [&>*]:text-[#272B32] [&>*]:before:opacity-20 [&_button:disabled_.button-content]:text-[#272B32]/50  [&_button:not(:disabled):hover]:border-[#E7ECF3] [&_button:not(:disabled):hover]:after:bg-[#E7ECF3] [&_button:not(:disabled):hover]:after:opacity-100',
          className,
        )}
      >
        {children}
      </div>
    </ButtonContext.Provider>
  );
};

export default ButtonGroup;

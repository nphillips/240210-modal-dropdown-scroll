import {
  type ButtonHTMLAttributes,
  MouseEventHandler,
  type ReactNode,
} from 'react';
import { twMerge } from 'tailwind-merge';
import { useContext } from 'react';
import { ButtonContext } from './ButtonGroup';

export interface ButtonIconProps {
  size: string;
  children: ReactNode;
}

export const ButtonIcon = ({ size, children }: ButtonIconProps) => {
  return (
    <div className={twMerge('flex h-full items-center justify-center ')}>
      {children}
    </div>
  );
};

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'small' | 'medium' | 'large';
  variant?:
  | 'primary'
  | 'secondary'
  | 'outline-primary'
  | 'outline-secondary'
  | 'ghost-primary'
  | 'inverse';
  className?: string;
  label?: string | ReactNode;
  onClick?: MouseEventHandler;
  icon?: ReactNode;
  iconRight?: boolean;
  disabled?: boolean; // this should be a boolean
  mobile?: boolean;
}

export const Button = ({
  mobile = false,
  size = 'medium',
  variant = 'inverse',
  className,
  label,
  icon,
  iconRight,
  disabled: propDisabled, // rename to avoid name conflict with disabled from context
  ...props
}: ButtonProps) => {
  const context = useContext(ButtonContext);

  // If context is provided, use it. Otherwise use props.
  const buttonSize = context.size || size;
  const buttonVariant = context.variant || variant;

  // Use isGroupChild from context if provided, otherwise assume Button is standalone
  const isGroupChild = context.isGroupChild || false;

  // Use disabled from context if provided, otherwise use disabled from props
  const disabled =
    context.disabled !== undefined ? context.disabled : propDisabled;

  return (
    //  prettier-ignore
    <button disabled={disabled} type="button" className={twMerge(
      'flex items-center justify-center leading-[1.25] transition-all disabled:cursor-not-allowed',
      !mobile && "font-medium uppercase ",
      mobile && "font-semibold",
      !isGroupChild && 'rounded-[0.5rem] border border-transparent disabled:border disabled:border-[#D4DFEA] disabled:bg-[#E7ECF3] [&:disabled_.button-content]:text-[#98A2B3] ',
      buttonVariant === 'primary' && '',
      // size-related — general
      buttonSize === 'small' && 'min-w-[2.25rem] px-[.75rem]',
      buttonSize === 'medium' && 'min-w-[3rem] px-[1rem]',
      buttonSize === 'large' && 'min-w-[3.75rem] px-[1rem]',
      !mobile && buttonSize === 'small' && 'text-[0.625rem]',    // 10px
      !mobile && buttonSize === 'medium' && 'text-[0.9375rem]',  // 15px
      !mobile && buttonSize === 'large' && 'text-[0.9375rem]',   // 15px
      mobile && buttonSize === 'small' && 'text-[0.625rem]',     // 10px
      mobile && buttonSize === 'medium' && 'text-[1rem]',        // 16px
      mobile && buttonSize === 'large' && 'text-[1rem]',         // 16px
      // size-related and only when not within a group - shadows
      !isGroupChild && !disabled && variant === 'primary' && buttonSize === 'small' && 'shadow-com-button2-small-inactive [&:not(:active):hover]:shadow-com-button2-small-active',
      !isGroupChild && !disabled && variant === 'primary' && buttonSize === 'medium' && 'shadow-com-button2-medium-inactive [&:not(:active):hover]:shadow-com-button2-medium-active',
      !isGroupChild && !disabled && variant === 'primary' && buttonSize === 'large' && 'shadow-com-button2-large-inactive [&:not(:active):hover]:shadow-com-button2-large-active',
      !isGroupChild && !disabled && variant === 'secondary' && buttonSize === 'small' && 'shadow-com-button2-small-inactive [&:not(:active):hover]:shadow-com-button2-small-active',
      !isGroupChild && !disabled && variant === 'secondary' && buttonSize === 'medium' && 'shadow-com-button2-medium-inactive [&:not(:active):hover]:shadow-com-button2-medium-active',
      !isGroupChild && !disabled && variant === 'secondary' && buttonSize === 'large' && 'shadow-com-button2-small-inactive [&:not(:active):hover]:shadow-com-button2-small-active',
      !isGroupChild && !disabled && variant === 'inverse' && buttonSize === 'small' && 'shadow-com-button2-small-inactive [&:not(:active):hover]:shadow-com-button2-small-active',
      !isGroupChild && !disabled && variant === 'inverse' && buttonSize === 'medium' && 'shadow-com-button2-medium-inactive [&:not(:active):hover]:shadow-com-button2-medium-active',
      !isGroupChild && !disabled && variant === 'inverse' && buttonSize === 'large' && 'shadow-com-button2-large-inactive [&:not(:active):hover]:shadow-com-button2-large-active',
      // size-related — heights
      buttonSize === 'small' && 'h-[2.25rem]',
      buttonSize === 'medium' && 'h-[3rem]',
      buttonSize === 'large' && 'h-[3.75rem]',
      // variants
      !isGroupChild && !disabled && variant === 'primary' && 'bg-[#0061FF] text-white hover:bg-[#0047BA] [&_button:disabled_.button-content]:text-white/50',
      !isGroupChild && !disabled && variant === 'secondary' && 'bg-[#16181C] text-white [&_button:disabled_.button-content]:text-white/50 [&:not(:disabled):hover]:bg-[#32353A]',
      !isGroupChild && !disabled && variant === 'outline-primary' && 'border-[#0061FF] text-[#0061FF] hover:border-[#0047BA] hover:bg-[#0047BA] hover:text-white [&_button:disabled_.button-content]:text-white/50',
      !isGroupChild && !disabled && variant === 'outline-secondary' && 'border-[#16181C] text-[#16181C] hover:border-[#32353A] hover:bg-[#32353A] hover:text-white [&_button:disabled_.button-content]:text-white/50',
      !isGroupChild && !disabled && variant === 'ghost-primary' && 'border-transparent text-[#0061FF] hover:border-[#0047BA] hover:bg-[#0047BA] hover:text-white [&_button:disabled_.button-content]:text-white/50',
      !isGroupChild && !disabled && variant === 'inverse' && 'bg-[#F8FCFF] hover:bg-[#E7ECF3]',
      className,
    )}
      {...props}
    >
      <div className="button-content flex items-center justify-center">
        {icon && !iconRight && <ButtonIcon size={size}>{icon}</ButtonIcon>}
        {label && !iconRight && <div className={twMerge(icon && 'ml-[.5rem]')}>{label}</div>}
        {label && iconRight && <div className={twMerge(icon && 'mr-[.5rem]')}>{label}</div>}
        {icon && iconRight && <ButtonIcon size={size}>{icon}</ButtonIcon>}
      </div>
    </button>
  );
};

export default Button;

import React, {
  InputHTMLAttributes,
  useState,
  ReactNode,
  useEffect,
} from 'react';
import clsx from 'clsx';
import { TooltipDeprecated } from './TooltipDeprecated';
import Password from './Password';
import Search, { type SearchInputRef } from './Search';
import Phone from './Phone';
import { twMerge } from 'tailwind-merge';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputSize?: 'large' | 'medium' | 'small' | 'extra-small';
  type: string;
  id: string;
  name?: string;
  hasError?: boolean;
  hasInstructionalMsg?: boolean;
  hasIssue?: boolean;
  isConfirmed?: boolean;
  value?: string;
  defaultValue?: string;
  onChange?: (evt: React.FormEvent<HTMLInputElement>) => void;
  classes?: string;
  disabled?: boolean;
  readonly?: boolean;
  required?: boolean;
  isCustom?: boolean;
  placeholder?: string;
  tooltip?: JSX.Element;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  inputRef?: any;
}

export interface InputComponent extends React.FC<InputProps> {
  Password: typeof Password;
  Search: typeof Search;
  Phone: typeof Phone;
}

export type { SearchInputRef };

export const Input: InputComponent = ({
  inputSize = 'medium',
  value,
  defaultValue,
  disabled,
  id,
  name,
  placeholder,
  hasError,
  hasInstructionalMsg,
  hasIssue,
  isConfirmed,
  required,
  isCustom = false,
  readonly = false,
  tooltip,
  startAdornment,
  endAdornment,
  onChange,
  inputRef,
  classes,
  ...rest
}: InputProps) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const [hasValue, setHasValue] = useState<boolean>(!!value || !!defaultValue);

  const showTooltip = () => {
    setTooltipOpen(true);
  };

  const hideTooltip = () => {
    setTooltipOpen(false);
  };

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    if (onChange) onChange(event);
    setHasValue(!!event.currentTarget.value);
  };

  return (
    <div className={clsx('input-container relative')}>
      {startAdornment && (
        <span className="absolute inset-y-0 left-0 flex items-center justify-center">
          {startAdornment}
        </span>
      )}
      {endAdornment && (
        <span className="absolute inset-y-0 right-4 flex items-center justify-center">
          {endAdornment}
        </span>
      )}
      {tooltip && tooltipOpen && (
        <div
          className={clsx(
            'absolute right-[-10px] mb-[-27px]',
            inputSize === 'large' && 'bottom-[75px]',
            inputSize === 'medium' && 'bottom-[61px]',
          )}
        >
          <TooltipDeprecated
            content={tooltip}
            onClickOutside={hideTooltip}
            pointerPosition="right"
          />
        </div>
      )}
      {tooltip && inputSize === 'large' && (
        <i
          className="icon wcicon-information icon-24 absolute right-4 top-[1rem] cursor-pointer "
          onClick={showTooltip}
        ></i>
      )}
      {tooltip && inputSize === 'medium' && (
        <i
          className="icon wcicon-information icon-24 absolute right-4 top-[.75rem] cursor-pointer"
          onClick={showTooltip}
        ></i>
      )}
      {tooltip && inputSize === 'small' && (
        <i
          className="icon wcicon-information icon-24 absolute right-4 top-[.5rem] cursor-pointer"
          onClick={showTooltip}
        ></i>
      )}

      <input
        ref={inputRef}
        className={twMerge(
          clsx(
            !isCustom &&
              'initial:w-full flex h-[3.125rem] items-center truncate border border-[#DDE2EC] px-4 font-spezia font-medium text-[#475467] transition-all placeholder:text-[#98A2B3] focus-visible:outline-0  disabled:bg-[#E7ECF3] disabled:text-[#98A2B3]',
            /*prettier-ignore*/ !hasError && !isConfirmed && !hasIssue && !tooltip && ' pr-4 ',

            /*prettier-ignore*/ !hasError && !isConfirmed && !hasIssue && !disabled && hasValue && 'border-[#98A2B3]',
            /*prettier-ignore*/ !hasError && !isConfirmed && !hasIssue && !disabled && 'focus:border-blue-brilliant',

            disabled && 'border-[#D4DFEA]',
            tooltip && 'pr-10',
            endAdornment && 'pr-12',
            startAdornment && 'pl-12',

            /*prettier-ignore*/ hasError && 'border-[#D33F00] pr-10 ',
            /*prettier-ignore*/ hasIssue && 'border-[#FFA800] pr-10',
            /*prettier-ignore*/ isConfirmed && 'border-[#00B047] pr-10',

            /*prettier-ignore*/ inputSize === 'small' && !isCustom && 'h-[2.25rem] rounded-[.375rem] text-[0.75rem] ',
            /*prettier-ignore*/ inputSize === 'medium' && !isCustom && 'h-[3rem] rounded-lg text-[0.875rem] ',
            /*prettier-ignore*/ inputSize === 'large' && !isCustom && 'h-[3.75rem] rounded-lg text-[0.875rem] ',

            inputSize === 'extra-small' && !isCustom && 'h-[2rem]',
            classes,
          ),
        )}
        name={name}
        placeholder={placeholder}
        defaultValue={defaultValue}
        value={value}
        id={id}
        disabled={disabled}
        required={required}
        readOnly={readonly}
        onChange={handleChange}
        autoComplete="off"
        {...rest}
      />
      {!tooltip && !disabled && (
        <div
          className={clsx(
            'input-state-indicator initial:hidden absolute right-4 top-1/2  h-[0.875rem] w-[0.875rem] -translate-y-1/2 items-center justify-center rounded-full  text-white',
            hasError && 'flex bg-alert-error',
            hasIssue && 'flex bg-alert-issue',
            isConfirmed && 'flex bg-[#00B047]',
          )}
        >
          <i
            className={clsx(
              'icon wcicon-exclamation icon-24 mt-[-.1em] leading-[1] [&:not(.show-input-exclamation-icon)]:hidden',
              hasError && 'show-input-exclamation-icon',
              hasIssue && 'show-input-exclamation-icon',
            )}
          ></i>
          <i
            className={clsx(
              'icon wcicon-checkmark_checked icon-24 leading-[1] [&:not(.show-input-checkmark-icon)]:hidden',
              isConfirmed && 'show-input-checkmark-icon',
            )}
          ></i>
        </div>
      )}
    </div>
  );
};

Input.Password = Password;
Input.Search = Search;
Input.Phone = Phone;

export default Input;

import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface FieldProps {
  labelSize?: 'large' | 'small';
  name?: string;
  htmlFor: string;
  children: JSX.Element;
  label: string;
  labelClass?: string;
  fieldClass?: string;
  labelExtension?: string;
  labelExtensionClass?: string;
  className?: string;
  errorMsg?: string;
  instructionalMsg?: string;
  instructionalMsgAddsSpace?: boolean;
}

export const Field: React.FC<FieldProps> = ({
  labelSize = 'large',
  htmlFor,
  children,
  fieldClass,
  labelClass,
  label,
  labelExtension,
  labelExtensionClass,
  errorMsg,
  instructionalMsg,
  instructionalMsgAddsSpace,
}) => {
  return (
    <div className={fieldClass}>
      <label
        htmlFor={htmlFor}
        className={twMerge(
          'block font-spezia font-medium ',
          label &&
            labelSize === 'large' &&
            'mb-2 text-[.875rem] leading-[1.15] text-[#667085]',
          label &&
            labelSize === 'small' &&
            'mb-1 text-[0.75rem] leading-[1.15] text-[#427596]',
          labelClass,
        )}
      >
        {label}
        {labelExtension && (
          <span className={labelExtensionClass}>{labelExtension}</span>
        )}
      </label>
      {children}
      {errorMsg && (
        <div
          className={clsx(
            'font-spezia text-[0.875rem] font-medium leading-[1.5] text-alert-error',
            labelSize === 'large' && 'mt-3',
            labelSize === 'small' && 'mt-1',
          )}
        >
          {errorMsg}
        </div>
      )}
      {!errorMsg && instructionalMsg && (
        <div
          className={clsx(
            'font-spezia text-[0.875rem] font-medium leading-[1.5] text-[#84ADC7] initial:opacity-0 [.input-container:focus-within~&]:opacity-100',
            !instructionalMsgAddsSpace && 'absolute',
            labelSize === 'large' && 'mt-3',
            labelSize === 'small' && 'mt-1',
          )}
        >
          {instructionalMsg}
        </div>
      )}
    </div>
  );
};

export default Field;

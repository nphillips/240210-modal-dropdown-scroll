import React, {
  FC,
  InputHTMLAttributes,
  useContext,
  type ReactNode,
} from 'react';
import { twMerge } from 'tailwind-merge';
import { RadioGroupContext } from './RadioGroupContext';

export interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  name?: string;
  value: string;
  label: string | ReactNode;
  labelClass?: string;
  checked?: boolean;
  onChange?: (evt: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Radio: FC<RadioProps> = ({
  id,
  name,
  value,
  label,
  labelClass,
  checked,
  onChange,
}) => {
  const context = useContext(RadioGroupContext);

  let _name = null;
  let _value = null;
  let _checked = null;
  let _variant = null;
  let _direction = null;
  let _onChange = null;

  if (!context) {
    // Handle case where Radio is not inside a RadioGroup
    _name = name;
    _value = value;
    _variant = 'radio';
    _direction = 'vertical';
    _onChange = onChange;
    _checked = checked;
  } else {
    _name = context.name;
    _value = value;
    _variant = context.variant;
    _direction = context.direction;
    _onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
      context.onChange(evt.target.value);
    };
    _checked = value === context.value;
  }

  return (
    <label
      htmlFor={id}
      className={twMerge('z-[1] flex cursor-pointer items-center')}
    >
      <input
        type="radio"
        id={id}
        name={_name}
        value={_value}
        onChange={_onChange}
        checked={_checked}
        className={twMerge(
          'mr-2',
          _variant === 'inline' && 'hidden',
          'peer/radio',
        )}
      />
      <span
        className={twMerge(
          'font-spezia text-h5 font-semibold text-grey-600',
          _variant === 'inline' &&
            'peer-checked/radio:drop-shadow-xl rounded-lg px-5 py-2 text-xs font-semibold text-grey-700 transition-colors peer-checked/radio:text-white',
          _variant === 'inline' && _direction === 'vertical' && 'w-full',
          labelClass,
        )}
      >
        {label}
      </span>
    </label>
  );
};

export default Radio;

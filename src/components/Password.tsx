import React, { SyntheticEvent, useState } from 'react';
import { Input, InputProps } from './Input';
import { twMerge } from 'tailwind-merge';

export const Password: React.FC<InputProps> = ({
  disabled,
  inputSize = 'medium',
  ...props
}) => {
  const [visible, setVisible] = useState(false);
  const visibilityIcon = visible ? 'wcicon-hide' : 'wcicon-show';

  return (
    <Input
      {...props}
      type={visible && !disabled ? props.type : 'password'}
      disabled={disabled}
      inputSize={inputSize}
      classes={twMerge(
        visible && !disabled && '[&~.input-state-indicator]:hidden',
        !visible && !disabled && '[&~.input-state-indicator]:hidden',
      )}
      endAdornment={
        !disabled && (
          <span className="cursor-pointer font-wellcube leading-none text-black-soft hover:text-blue-brilliant">
            <i
              className={twMerge(visibilityIcon, 'icon icon-lg')}
              tabIndex={-1}
              onClick={() => setVisible(!visible)}
              onMouseDown={(e: SyntheticEvent) => {
                // Prevent focused state lost
                // https://github.com/ant-design/ant-design/issues/15173
                e.preventDefault();
              }}
            />
          </span>
        )
      }
    />
  );
};

export default Password;

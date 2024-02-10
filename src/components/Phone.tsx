import React from 'react';
import {
  CountrySelector,
  usePhoneInput,
  PhoneInputProps as PhoneProps,
} from 'react-international-phone';

import { Input, InputProps } from './Input';
import type { ParsedCountry } from 'react-international-phone/build/types';
import clsx from 'clsx';

type PhoneInputProps = Omit<InputProps, 'type' | 'inputRef'> & {
  defaultCountry?: PhoneProps['defaultCountry'];
};

export const Phone: React.FC<PhoneInputProps> = ({
  defaultCountry,
  value,
  onChange,
  disabled,
  ...props
}) => {
  const { inputRef, phone, country, setCountry, handlePhoneValueChange } =
    usePhoneInput({ defaultCountry, value });

  const handleCountrySelected = (newCountry: ParsedCountry) => {
    setCountry(newCountry.iso2);
  };

  const handleValueChanged = (evt: any) => {
    const newPhone = handlePhoneValueChange(
      evt as React.ChangeEvent<HTMLInputElement>,
    );

    // Hack: we update target value to avoid "input jumping"
    evt.target.value = newPhone;

    if (onChange) {
      onChange(evt);
    }
  };

  return (
    <Input
      {...props}
      value={phone}
      onChange={handleValueChanged}
      type="tel"
      inputRef={inputRef}
      disabled={disabled}
      startAdornment={
        <CountrySelector
          selectedCountry={country}
          onSelect={handleCountrySelected}
          disabled={disabled}
          className={clsx("flex h-full items-center relative [&>button]:h-full [&>button]:rounded-l-lg [&>button]:border-0 [&>button]:bg-transparent [&>button]:hover:bg-transparent",
          "before:absolute before:right-0 before:top-[1px] before:bottom-[1px] before:border-r before:border-r-[#e5e5e5]",
          "[&_.react-international-phone-country-selector-button_.react-international-phone-flag-emoji]:max-w-[16px]",
          "[&_.react-international-phone-flag-emoji]:ml-[8px]",
          "[&_.react-international-phone-flag-emoji~div]:mr-[6px]",
          )}
        />
      }
    />
  );
};

export default Phone;

import React, { useState, MutableRefObject } from 'react';
import { Input, InputProps } from './Input';
import { twMerge } from 'tailwind-merge';

type SearchInputProps = Omit<InputProps, 'onChange' | 'value'> & {
  onSearch?: (value?: string) => void;
  searchInputRef?: MutableRefObject<SearchInputRef | undefined>;
  classExtendWrapper?: string | { default: string; active: string };
};

export interface SearchInputRef {
  reset(): void;
}

export const Search: React.FC<SearchInputProps> = ({
  placeholder = 'Search',
  inputSize = 'medium',
  classExtendWrapper = '',
  onSearch,
  searchInputRef,
  ...props
}) => {
  const [value, setValue] = useState<string>('');
  const [focused, setFocused] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleReset = () => {
    setSubmitted(false);
    setValue('');

    if (onSearch) {
      onSearch();
    }
  };

  if (searchInputRef) {
    searchInputRef.current = { reset: handleReset };
  }

  const handleKeyDown = (evt: React.KeyboardEvent<HTMLInputElement>) => {
    if (evt.key === 'Enter') {
      handleSearch();
    }

    if (props.onKeyDown) {
      props.onKeyDown(evt);
    }
  };

  const handleFocus = (evt: React.FocusEvent<HTMLInputElement>) => {
    setFocused(true);

    if (props.onFocus) {
      props.onFocus(evt);
    }
  };

  const handleBlur = (evt: React.FocusEvent<HTMLInputElement>) => {
    setFocused(false);

    if (props.onBlur) {
      props.onBlur(evt);
    }
  };

  const handleChange = (evt: React.FormEvent<HTMLInputElement>) => {
    const { value: newValue } = evt.target as HTMLInputElement;

    setValue(newValue);
    setSubmitted(false);
  };

  const handleSearch = () => {
    if (!value) {
      return handleReset();
    }

    if (onSearch) {
      onSearch(value);
    }

    setSubmitted(true);
  };

  const defaultWrapperClasses =
    typeof classExtendWrapper === 'string'
      ? classExtendWrapper
      : classExtendWrapper.default;
  const activeWrapperClasses =
    typeof classExtendWrapper === 'string'
      ? classExtendWrapper
      : classExtendWrapper.active;

  return (
    <div
      className={twMerge(
        'transition-width duration-300 ease-out',
        focused || submitted ? activeWrapperClasses : defaultWrapperClasses,
      )}
    >
      <Input
        {...props}
        placeholder={placeholder}
        inputSize={inputSize}
        onKeyDown={handleKeyDown}
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        endAdornment={
          <span className="cursor-pointer font-wellcube leading-none text-grey-400">
            <i
              className={twMerge(
                'icon',
                !submitted && 'wcicon-search-alt',
                submitted && 'icon wcicon-xmark',
                inputSize === 'large' && !submitted && 'icon-lg',
                inputSize === 'large' && submitted && 'icon-24',
                inputSize === 'medium' && !submitted && 'icon-16',
                inputSize === 'medium' && submitted && 'icon-lg',
              )}
              onClick={!submitted ? handleSearch : handleReset}
              onMouseDown={(e: React.SyntheticEvent) => {
                // Prevent focused state lost
                // https://github.com/ant-design/ant-design/issues/15173
                e.preventDefault();
              }}
            />
          </span>
        }
      />
    </div>
  );
};

export default Search;

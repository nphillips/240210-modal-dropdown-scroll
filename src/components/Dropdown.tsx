//@ts-nocheck
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import Select, {
  PropsValue,
  ClassNamesConfig,
  GroupBase,
  components,
} from 'react-select';
import EmotionCacheProvider from './EmotionCacheProvider';
import DOMPurify from 'dompurify';
import { Field } from './Field';
import ReactHtmlParser from 'react-html-parser';
import { twMerge } from 'tailwind-merge';
import IconDropdownCheckmark from './IconDropdownCheckmark';

export interface DropdownProps<T> {
  size?: 'small' | 'medium' | 'large';
  isMulti?: boolean;
  menuIsOpen?: boolean;
  isDisabled?: boolean;
  inputId?: string;
  label?: string;
  labelClassExtend?: string;
  containerClassExtend?: string;
  placeholder?: string;
  options: Option[];
  defaultValue?: Option | Option[] | null;
  value?: Option | Option[];
  searchPlaceholder?: string;
  useSearchIcon?: boolean;
  handleSelection: (items: Option[]) => void;
  formatOptionLabel?: any;
  classNames?: ClassNamesConfig<T, boolean, GroupBase<T>> | undefined;
  menuPlacement?: 'bottom' | 'top' | 'auto';
  menuPosition?: 'absolute' | 'fixed';
  menuShouldScrollIntoView?: boolean;
  menuLayoutEffect?: boolean;
  highlightSearch?: boolean;
  icon?: React.ReactNode | JSX.Element;
}

type Option = {
  id: string;
  value: string;
  label?: string;
};

const OPTION_HEIGHT = 50;
const MAX_HEIGHT = 250;

const defaultOptions: Option[] = [
  { id: 'option1', value: 'option1', label: 'option1' },
  { id: 'option2', value: 'option2', label: 'option2' },
  { id: 'option3', value: 'option3', label: 'option3' },
];

export const Dropdown = <T extends object>({
  size = 'medium',
  isMulti,
  options = defaultOptions,
  defaultValue,
  value,
  menuIsOpen,
  formatOptionLabel,
  isDisabled,
  label,
  labelClassExtend,
  containerClassExtend,
  classNames,
  placeholder = 'Select...',
  searchPlaceholder,
  useSearchIcon = false,
  inputId = 'react-select',
  handleSelection,
  menuPlacement = 'bottom',
  menuPosition = 'absolute',
  menuShouldScrollIntoView = false,
  menuLayoutEffect = false,
  highlightSearch = false,
  icon,
}: DropdownProps<T>) => {
  const [items, setItems] = useState<Option[]>([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const isSelected = !!items.length || value || defaultValue;

  const getMenuListHeight = (quantity) =>
    Math.min(MAX_HEIGHT, quantity * OPTION_HEIGHT || OPTION_HEIGHT);

  useEffect(() => {
    handleSelection && handleSelection(items);
  }, [items]);

  const transform = (node, index) => {
    if (node.type === 'text' && highlightSearch && inputValue) {
      const parts = node.data.split(new RegExp(`(${inputValue})`, 'gi'));
      return parts.map((part) =>
        part.toLowerCase() === inputValue.toLowerCase() ? <b>{part}</b> : part,
      );
    }
  };

  const handleOptionSelected = (selections: PropsValue<typeof options>) => {
    const selectedOptions = Array.isArray(selections)
      ? selections
      : [selections];
    setItems(selectedOptions);
  };

  const onMenuOpen = () => {
    setMenuOpen(true);
  };

  const onMenuClose = () => {
    setMenuOpen(false);
  };

  const CustomClearIndicator = (props) => {
    const {
      clearValue,
      innerProps: { ref, ...restInnerProps },
    } = props;
    return (
      <div
        {...restInnerProps}
        ref={ref}
        onClick={clearValue}
        className={clsx(
          'flex h-full w-8 cursor-pointer items-center justify-center',
          size === 'small' && 'h-[2.125rem]',
          size === 'medium' && 'min-h-[2.875rem]',
          size === 'large' && 'min-h-[3.625rem]',
        )}
      >
        <i className="icon wcicon-xmark icon-16"></i>
      </div>
    );
  };

  const DropdownIndicator = (props) => {
    return (
      components.DropdownIndicator && (
        <components.DropdownIndicator
          {...props}
          className={clsx(
            ' flex w-[2rem] items-center justify-center py-0 text-current',
            size === 'small' && 'mr-[.25rem] h-[2.125rem]',
            size === 'medium' && 'mr-[.5rem] min-h-[2.875rem]',
            size === 'large' && 'mr-[.5rem] min-h-[3.625rem]',
          )}
        >
          <i
            className={
              menuOpen && useSearchIcon
                ? 'icon wcicon-search-alt icon-16'
                : 'icon wcicon-chevron-down icon-16'
            }
          ></i>
        </components.DropdownIndicator>
      )
    );
  };

  const Option = (props) => {
    const { data, isFocused, isSelected, ...rest } = props;
    const sanitizedLabel = DOMPurify.sanitize(data.label);
    return (
      <div
        className={clsx(
          'relative before:pointer-events-none before:absolute before:left-0 before:right-0 before:top-[-.5px] before:border-t before:border-t-[#D4DFEA] [&:first-child]:before:hidden',
          'font-spezia font-medium leading-[1.25] ',
          size === 'small' && 'text-[.75rem]',
          size === 'medium' && 'text-[.875rem]',
          size === 'large' && 'text-[.875rem]',
        )}
      >
        <components.Option
          {...rest}
          isFocused={isFocused}
          isSelected={isSelected}
        >
          {isMulti && (
            <>
              <input
                type="checkbox"
                checked={props.isSelected}
                className="sr-only"
              />
              <div
                className={clsx(
                  'absolute  top-4 flex h-[.9375rem] w-[.9375rem] items-center justify-center rounded-[.1875rem] ',
                  size === 'small' && 'left-3',
                  size === 'medium' && 'left-4',
                  size === 'large' && 'left-4',
                  !isSelected && 'shadow-[0_0_0_.09375rem_#98A2B3_inset]',
                  isSelected &&
                    'bg-[#7DD0FF] shadow-[0_0_0_.09375rem_#667085_inset]',
                )}
              >
                {isSelected && <IconDropdownCheckmark />}
              </div>
            </>
          )}
          {ReactHtmlParser(sanitizedLabel, { transform })}
        </components.Option>
      </div>
    );
  };

  return (
    <EmotionCacheProvider>
      <Field htmlFor={inputId} label={label} labelClass={labelClassExtend}>
        <div className="relative ">
          <Select
            inputId={inputId}
            maxMenuHeight={MAX_HEIGHT}
            placeholder={
              menuOpen && searchPlaceholder ? searchPlaceholder : placeholder
            }
            components={{
              Option,
              DropdownIndicator,
              ClearIndicator: CustomClearIndicator,
            }}
            onInputChange={(value) => setInputValue(value)}
            isDisabled={isDisabled}
            options={options}
            onChange={handleOptionSelected}
            isMulti={isMulti}
            onMenuOpen={onMenuOpen}
            onMenuClose={onMenuClose}
            value={value}
            defaultValue={defaultValue}
            formatOptionLabel={formatOptionLabel}
            hideSelectedOptions={isMulti ? false : undefined}
            controlShouldRenderValue={isMulti ? false : undefined}
            closeMenuOnSelect={isMulti ? false : undefined}
            menuIsOpen={menuIsOpen}
            icon={icon}
            classNames={{
              clearIndicator: () => '',
              container: () =>
                twMerge(
                  /*prettier-ignore*/ isDisabled && '[&~.dropdown-icon]:text-[#98A2B3]',
                  /*prettier-ignore*/ !isDisabled && '[&:has([class$="placeholder"])~.dropdown-icon]:text-[#98A2B3]',
                  containerClassExtend,
                ),
              control: ({ isDisabled, isFocused, menuIsOpen }) =>
                twMerge(
                  'border border-[#DDE2EC] font-spezia font-medium leading-[1.25] transition-none min-h-[2.125rem]',

                  /* prettier-ignore */ isFocused && 'border-blue-brilliant outline-none border shadow-none',

                  !isDisabled &&
                    isSelected &&
                    'border-[#98A2B3] text-[#475467]',
                  isDisabled && 'bg-[#E7ECF4] border-[#D4DFEA] text-[#98A2B3]',

                  /*prettier-ignore */ menuPlacement === 'bottom' && size==="small" && 'rounded-t-[0.375rem]',
                  /*prettier-ignore */ menuPlacement === 'bottom' && size==="small" && !menuIsOpen && 'rounded-b-[0.375rem]',
                  /*prettier-ignore */ menuPlacement === 'bottom' && size==="small" && menuIsOpen && 'rounded-b-[0]',

                  /*prettier-ignore */ menuPlacement === 'top' && size==="small" && 'rounded-b-[0.375rem] focus:border',
                  /*prettier-ignore */ menuPlacement === 'top' && size==="small" && !menuIsOpen && 'rounded-t-[0.375rem]',
                  /*prettier-ignore */ menuPlacement === 'top' && size==="small" && menuIsOpen && 'rounded-t-[0] ',

                  /*prettier-ignore */ menuPlacement === 'bottom' && size!=="small" && 'rounded-t-lg',
                  /*prettier-ignore */ menuPlacement === 'bottom' && size!=="small" && !menuIsOpen && 'rounded-b-lg',
                  /*prettier-ignore */ menuPlacement === 'bottom' && size!=="small" && menuIsOpen && 'rounded-b-[0]',

                  /*prettier-ignore */ menuPlacement === 'top' && size!=="small" && 'rounded-b-lg focus:border',
                  /*prettier-ignore */ menuPlacement === 'top' && size!=="small" && !menuIsOpen && 'rounded-t-lg',
                  /*prettier-ignore */ menuPlacement === 'top' && size!=="small" && menuIsOpen && 'rounded-t-[0] ',

                  size === 'small' && 'text-[.75rem]',
                  size === 'medium' && 'text-[.875rem]',
                  size === 'large' && 'text-[.875rem]',

                  items?.length && !menuOpen ? '' : '',
                  isFocused && '',
                  isDisabled && '',
                ),
              dropdownIndicator: ({ isDisabled }) => '',
              group: () => '',
              groupHeading: () => '',
              indicatorsContainer: () => '',
              indicatorSeparator: () => 'hidden',
              input: () => '',
              loadingIndicator: () => '',
              loadingMessage: () => '',
              menu: ({ menuPlacement }) =>
                clsx(
                  'my-0 overflow-hidden shadow-[0_0_0_1px_#98A2B3] border-[#98A2B3] border-l border-r shadow-com-dropdown-menu2',
                  menuOpen && ' z-[100]',
                  /*prettier-ignore */ menuPlacement != 'top' && 'rounded-b-[0.375rem] border-b rounded-t-[0]',
                  /*prettier-ignore */ menuPlacement === 'top' && 'rounded-t-[0.375rem] border-t rounded-b-[0]',
                ),
              menuList: () => clsx('isolate py-0 visible-scrollbar '),
              menuPortal: () => '',
              multiValue: () => '',
              multiValueLabel: () => '',
              multiValueRemove: () => '',
              noOptionsMessage: () =>
                clsx(
                  'font-spezia font-medium leading-[1.25] min-h-[2.5rem] items-center flex justify-center',
                  size === 'small' && 'text-[.75rem]',
                  size === 'medium' && 'text-[.875rem]',
                  size === 'large' && 'text-[.875rem]',
                ),
              option: ({ isDisabled, isFocused, isSelected, isMulti }) =>
                clsx(
                  `h-[${OPTION_HEIGHT}px] pt-4 pr-4 pb-4 flex items-center`,
                  !isMulti && size === 'small' && 'pl-3',
                  !isMulti && size === 'medium' && 'pl-4',
                  !isMulti && size === 'large' && 'pl-4',
                  isMulti && size === 'small' && 'pl-9',
                  isMulti && size === 'medium' && 'pl-10',
                  isMulti && size === 'large' && 'pl-10',
                  !isSelected && !isFocused && 'text-[#272B32]',

                  /*prettier-ignore */ !isMulti && !isSelected && isFocused && 'bg-[#F8FCFF] text-blue-suede hover:bg-[#F8FCFF] active:bg-[#ECF4FA]',
                  /*prettier-ignore */ !isMulti && isSelected && !isFocused && 'bg-[#ECF4FA] text-blue-suede hover:bg-[#ECF4FA] active:bg-[#ECF4FA]',
                  /*prettier-ignore */ !isMulti && isSelected && isFocused && 'bg-[#ECF4FA] text-blue-suede hover:bg-[#ECF4FA] active:bg-[#ECF4FA]',

                  /*prettier-ignore */ isMulti && !isSelected && isFocused && 'bg-[#F8FCFF] text-current hover:bg-[#F8FCFF] active:bg-[#ECF4FA]',
                  /*prettier-ignore */ isMulti && isSelected && !isFocused && 'bg-transparent text-current hover:bg-[#F8FCFF] active:bg-[#ECF4FA]',
                  /*prettier-ignore */ isMulti && isSelected && isFocused && 'bg-[#F8FCFF] text-current hover:bg-[#F8FCFF] active:bg-[#ECF4FA]',
                ),
              placeholder: ({ isDisabled }) =>
                clsx(
                  !isDisabled && 'text-[#98A2B3]',
                  isDisabled && 'text-[#98A2B3]',
                ),
              singleValue: () => 'text-current',
              valueContainer: () =>
                clsx(
                  !icon && 'pl-3',
                  icon && size === 'small' && 'pl-9',
                  icon && size === 'medium' && 'pl-10',
                  icon && size === 'large' && 'pl-10',
                ),
              ...classNames,
            }}
            menuPlacement={menuPlacement}
            menuPosition={menuPosition}
            menuShouldScrollIntoView={menuShouldScrollIntoView}
          />
          {icon && (
            <div
              className={clsx(
                'dropdown-icon pointer-events-none absolute  top-0 flex flex-col justify-center ',
                size === 'small' && 'left-3 h-[2.125rem]',
                size === 'medium' && 'left-4 h-[2.875rem]',
                size === 'large' && 'left-4 h-[3.625rem]',
              )}
            >
              {icon}
            </div>
          )}
        </div>
        {menuOpen && menuLayoutEffect && (
          <div style={{ height: `${getMenuListHeight(options.length)}px` }} />
        )}
      </Field>
    </EmotionCacheProvider>
  );
};

export default Dropdown;

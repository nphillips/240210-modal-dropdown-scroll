// Import statements (React, Button, clsx, etc.)

import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';

export interface CustomDropdownProps {
  scrollingContainerRef: React.RefObject<HTMLDivElement>;
}

export interface CustomDropdownOptionProps {
  label: string;
}

export const CustomDropdownOption = ({ label }: CustomDropdownOptionProps) => {
  return (
    <label className="flex min-h-[40px] items-center border-t border-t-grey-100 px-2">
      <input type="checkbox" name="checkboxes" className="mr-2" />
      <div>{label}</div>
    </label>
  );
};

export const CustomDropdown = ({
  scrollingContainerRef,
}: CustomDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);

    // Wait for the dropdown to open and then scroll
    if (!isOpen) {
      setTimeout(() => {
        const menuBottomElement = document.getElementById('menu-bottom');
        if (menuBottomElement && scrollingContainerRef.current) {
          menuBottomElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 0);
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (dropdownRef.current && !dropdownRef.current.contains(target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [dropdownRef]);

  return (
    <div className="relative" ref={dropdownRef}>
      <div>
        <label className="block">Click to open custom dropdown:</label>
        <button
          onClick={toggleDropdown}
          className="w-full rounded-md border px-2 py-3 text-left"
        >
          Selected option name <span className="float-right">▼</span>
        </button>
      </div>
      <div
        className={clsx(
          'absolute left-0 right-0 bg-white transition-all',
          !isOpen && 'max-h-0 overflow-hidden',
          isOpen && 'max-h-[320px] overflow-y-visible',
        )}
      >
        <div className="max-h-[320px] overflow-y-auto rounded-b-[0.375rem] rounded-t-[0] border-b border-l border-r border-[#98A2B3] shadow-com-dropdown-menu2 ">
          <CustomDropdownOption label="Option 1" />
          <CustomDropdownOption label="Option 2" />
          <CustomDropdownOption label="Option 3" />
          <CustomDropdownOption label="Option 4" />
          <CustomDropdownOption label="Option 5" />
          <CustomDropdownOption label="Option 6" />
          <CustomDropdownOption label="Option 7" />
          <CustomDropdownOption label="Option 8" />
          <CustomDropdownOption label="Option 9" />
          <CustomDropdownOption label="Option 10" />
          <CustomDropdownOption label="Option 11" />
          <CustomDropdownOption label="Option 12" />
          <CustomDropdownOption label="Option 13" />
          <CustomDropdownOption label="Option 14" />
          <CustomDropdownOption label="Option 15" />
          <CustomDropdownOption label="Option 16" />
          <CustomDropdownOption label="Option 17" />
          <CustomDropdownOption label="Option 18" />
          <CustomDropdownOption label="Option 19" />
          <CustomDropdownOption label="Option 20" />
        </div>
        <div className=" bottom-0 h-[40px]" id="menu-bottom"></div>
      </div>
    </div>
  );
};

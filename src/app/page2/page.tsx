'use client';
import { useState, useRef, useEffect } from 'react';
import Button from '@/components/Button';
import clsx from 'clsx';

export interface CustomDropdownProps {
  scrollingContainerRef: React.RefObject<HTMLDivElement>;
}

export interface CustomDropdownOptionProps {
  label: string;
}
export const CustomDropdownOption = ({ label }: CustomDropdownOptionProps) => {
  return (
    <label className="flex min-h-[40px] items-center border px-2">
      <input type="checkbox" name="checkboxes" className="mr-2" />
      <div>{label}</div>
    </label>
  );
};

export const CustomDropdown = ({
  scrollingContainerRef,
}: CustomDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

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
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
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
        <CustomDropdownOption label="Option 1" />
        <CustomDropdownOption label="Option 2" />
        <CustomDropdownOption label="Option 3" />
        <CustomDropdownOption label="Option 4" />
        <CustomDropdownOption label="Option 5" />
        <CustomDropdownOption label="Option 6" />
        <CustomDropdownOption label="Option 7" />
        <CustomDropdownOption label="Option 8" />
        <div className="h-[40px]" id="menu-bottom"></div>
      </div>
    </div>
  );
};

export default function Page2() {
  const scrollingContainerRef = useRef(null); // Add this line

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black/20">
      <div
        ref={scrollingContainerRef}
        className="scrolling-container w-[800px] overflow-y-scroll scroll-smooth rounded-lg bg-white"
      >
        <div className="p-6">
          <div className="mb-4">
            <h2 className="text-[24px] font-semibold">Header</h2>
            <div>descriptive text</div>
          </div>
          <div className="flex ">
            <div className="flex flex-[1_1_400px] flex-col gap-y-4">
              <div className="h-[80px] bg-grey-50">object 1</div>
              <div className="h-[80px] bg-grey-50">object 2</div>
              <div className="min-h-[80px]  bg-grey-50">
                <CustomDropdown scrollingContainerRef={scrollingContainerRef} />
              </div>
            </div>

            <div className="ml-4 flex-[1_1_300px] border-l border-l-grey-100 pl-4">
              Selected sites:
            </div>
          </div>
          <div className="mt-8 flex justify-center gap-x-4">
            <Button variant="secondary" label="Cancel" className="w-[140px]" />
            <Button variant="primary" label="Okay" className="w-[140px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

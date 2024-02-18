// CustomDropdown.tsx
import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';

export interface CustomDropdownProps {
  scrollingContainerRef: React.RefObject<HTMLDivElement>;
  children?: React.ReactNode;
  onToggle?: (isOpen: boolean) => void;
}

export const CustomDropdown = ({
  scrollingContainerRef,
  children,
  onToggle,
}: CustomDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    const newOpenState = !isOpen;
    setIsOpen(newOpenState);
    if (onToggle) {
      onToggle(newOpenState);
    }

    if (newOpenState) {
      setTimeout(() => {
        const menuBottomElement = document.getElementById('menu-bottom');
        if (menuBottomElement && scrollingContainerRef.current) {
          menuBottomElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 0);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!dropdownRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
        if (onToggle) {
          onToggle(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [dropdownRef, onToggle]);

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
          {children}
        </div>
        <div className="bottom-0 h-[40px]" id="menu-bottom"></div>
      </div>
    </div>
  );
};

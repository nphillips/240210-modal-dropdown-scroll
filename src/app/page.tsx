//page.tsx
'use client';
import { useEffect, useRef, useState } from 'react';
import Button from '@/components/Button';
import { CustomDropdown } from '@/components/CustomDropdown';
import CustomDropdownOption from '@/components/CustomDropdownOption';
import CustomSelectedTag from '@/components/CustomSelectedTag';
import clsx from 'clsx';

export default function Page2() {
  const scrollingContainerRef = useRef(null);
  const selectedTagsRef = useRef(null); // Step 1: Ref for the container of selected tags

  const [dropdownOptions, setDropdownOptions] = useState([
    { label: 'Option 1', checked: false },
    { label: 'Option 2', checked: false },
    { label: 'Option 3', checked: true },
    { label: 'Option 4', checked: false },
    { label: 'Option 5', checked: false },
    { label: 'Option 6', checked: false },
    { label: 'Option 7', checked: true },
    { label: 'Option 8', checked: false },
    { label: 'Option 9', checked: false },
    { label: 'Option 10', checked: false },
    { label: 'Option 11', checked: false },
    { label: 'Option 12', checked: false },
    { label: 'Option 13', checked: false },
    { label: 'Option 14', checked: false },
    { label: 'Option 15', checked: false },
    { label: 'Option 16', checked: false },
    { label: 'Option 17', checked: false },
    { label: 'Option 18', checked: false },
    { label: 'Option 19', checked: false },
    { label: 'Option 20', checked: false },
  ]);

  const [dropdownMenuOpen, setDropdownMenuOpen] = useState(false);

  const toggleOption = (label: string) => {
    const updatedOptions = dropdownOptions.map((option) => {
      if (option.label === label) {
        return { ...option, checked: !option.checked };
      }
      return option;
    });
    setDropdownOptions(updatedOptions);
  };

  const handleDropdownToggle = (isOpen: boolean) => {
    setDropdownMenuOpen(isOpen);
  };

  useEffect(() => {
    if (selectedTagsRef.current) {
      const selectedTagsElement = selectedTagsRef.current;
      const lastSelectedTag = selectedTagsElement.lastChild;
      if (lastSelectedTag) {
        lastSelectedTag.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [dropdownOptions]);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black/20">
      <div
        ref={scrollingContainerRef}
        className="scrolling-container w-[var(--modal-max-width-lg)] overflow-y-scroll scroll-smooth rounded-2xl bg-white shadow-com-modal"
      >
        <div
          className={clsx(
            ' main-content-row flex flex-1 flex-col  px-[48px]  pb-[calc(80px)] pt-[50px]',
          )}
        >
          <div className="mb-4">
            <h2 className="text-[24px] font-semibold">Header</h2>
            <div>descriptive text</div>
          </div>
          <div
            className={clsx(
              ' relative z-[1] flex',
              !dropdownMenuOpen && ' pb-[80px]',
            )}
          >
            <div className="flex flex-[1_1_400px] flex-col gap-y-4">
              <div className="h-[80px] bg-grey-50">object 1</div>
              <div className="h-[80px] bg-grey-50">object 2</div>
              <div className="relative min-h-[80px]  bg-grey-50">
                <CustomDropdown
                  scrollingContainerRef={scrollingContainerRef}
                  onToggle={handleDropdownToggle}
                >
                  {dropdownOptions.map((option) => (
                    <CustomDropdownOption
                      key={option.label}
                      label={option.label}
                      checked={option.checked}
                      onToggle={() => toggleOption(option.label)}
                    />
                  ))}
                </CustomDropdown>
              </div>
            </div>

            <div
              className={clsx(
                '  min-w-0  flex-[1_1_300px]  ',
                !dropdownMenuOpen && 'h-[280px]',
                dropdownMenuOpen && 'h-[calc(280px+80px)]',
              )}
            >
              <div
                className={clsx(
                  'sticky top-2  flex  max-h-[270px] w-full min-w-0 flex-[0_0_auto] flex-col  ',
                )}
              >
                <div
                  className={clsx(
                    ' ml-4 overflow-y-auto  border-l border-l-grey-100 pl-4',
                    !dropdownMenuOpen && 'h-[280px]',
                    dropdownMenuOpen &&
                      'absolute left-0 right-0 top-0 h-[410px]',
                  )}
                >
                  <div className="sticky top-0 bg-[white]">Selected sites:</div>
                  <div className={clsx(' flex-1 space-y-4 ')}>
                    {dropdownOptions
                      .filter((option) => option.checked)
                      .map((option) => (
                        <CustomSelectedTag
                          key={option.label}
                          tag={option.label}
                        />
                      ))}
                  </div>
                </div>
              </div>
            </div>
            <div
              className={clsx(
                'button-row absolute bottom-0 left-0 right-0 justify-center gap-x-4 pt-8 ',
                !dropdownMenuOpen && 'flex',
                dropdownMenuOpen && 'hidden ',
              )}
            >
              <Button
                variant="secondary"
                label="Cancel"
                className="w-[140px]"
              />
              <Button variant="primary" label="Okay" className="w-[140px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

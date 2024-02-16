'use client';
import { useRef } from 'react';
import Button from '@/components/Button';
import { CustomDropdown } from '@/components/CustomDropdown';

export default function Page2() {
  const scrollingContainerRef = useRef(null); // Add this line

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black/20">
      <div
        ref={scrollingContainerRef}
        className="scrolling-container w-[var(--modal-max-width-lg)] overflow-y-scroll scroll-smooth rounded-2xl bg-white shadow-com-modal"
      >
        <div className="px-[48px] pb-[64px] pt-[50px]">
          <div className="mb-4">
            <h2 className="text-[24px] font-semibold">Header</h2>
            <div>descriptive text</div>
          </div>
          <div className="flex ">
            <div className="flex flex-[1_1_400px] flex-col gap-y-4">
              <div className="h-[80px] bg-grey-50">object 1</div>
              <div className="h-[80px] bg-grey-50">object 2</div>
              <div className="relative min-h-[80px]  bg-grey-50">
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

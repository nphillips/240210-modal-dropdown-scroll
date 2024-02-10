import React, {useEffect, useRef} from "react";

export interface TooltipDeprecatedProps {
    content: JSX.Element;
    onClickOutside?: () => void;
    pointerPosition?: string;
};

/**
 * @deprecated
 * @param content
 * @param onClickOutside
 * @param pointerPosition
 * @param otherProps
 * @constructor
 */
export const TooltipDeprecated: React.FC<TooltipDeprecatedProps> = ({
    content,
    onClickOutside,
    pointerPosition = 'right',
    ...otherProps
}: TooltipDeprecatedProps) => {


  const ref = useRef<any>(null);

  useEffect(() => {
    const handleClickOutside = (event: { target: any; }) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside && onClickOutside();
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [ onClickOutside ]);

  return (
    <div className="text-sm">
      <div ref={ref} className="w-[253px] rounded-lg border border-blue-suede bg-white-soft p-6">
        {content}
      </div>
      <div className={`relative ${pointerPosition === 'left' ? 'left-[31px]' : pointerPosition === 'center' ? 'left-[118px]' : 'left-[205px]'} mt-[-6px] h-3 w-3 rotate-[-45deg] border-l border-b border-blue-suede bg-white-soft`}></div>
    </div>

  );
}

export default TooltipDeprecated;

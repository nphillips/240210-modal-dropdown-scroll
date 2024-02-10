import React from "react";
import { twMerge } from "tailwind-merge";

export interface IconDropdownCheckmarkProps {
    className?: string;
}

function IconDropdownCheckmark({ className }: IconDropdownCheckmarkProps) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" className={twMerge(
            "w-[.625rem] h-[.625rem] text-current",
            className,
        )}>
            <path
                fillRule="evenodd"
                d="M8.923 2.197a.75.75 0 01.047 1.06l-4.584 5a.75.75 0 01-1.083.023L1.22 6.197a.75.75 0 011.06-1.06l1.53 1.529 4.054-4.423a.75.75 0 011.06-.046z"
                clipRule="evenodd"
            ></path>
        </svg>
    );
}

export default IconDropdownCheckmark;

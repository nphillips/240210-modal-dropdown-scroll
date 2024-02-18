// CustomSelectedTag.tsx
export interface CustomSelectedTagProps {
  tag: string;
}
export const CustomSelectedTag = ({ tag }: CustomSelectedTagProps) => {
  return (
    <div className="bg-blue-water flex h-10 w-full min-w-0 items-center rounded px-2 py-1">
      <div className="flex-1 truncate text-[.875rem] font-medium leading-[1.25] text-blue-suede">
        {tag}
      </div>
      <div className="ml-auto flex flex-[0_0_auto] items-center">x</div>
    </div>
  );
};

export default CustomSelectedTag;

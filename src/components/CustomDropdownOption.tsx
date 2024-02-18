// CustomDropdownOption.tsx
export interface CustomDropdownOptionProps {
  label: string;
  checked?: boolean;
  onToggle: () => void;
}

export const CustomDropdownOption = ({
  label,
  checked,
  onToggle,
}: CustomDropdownOptionProps) => {
  return (
    <label className="flex min-h-[40px] items-center border-t border-t-grey-100 px-2">
      <input
        type="checkbox"
        name="checkboxes"
        className="mr-2"
        checked={checked}
        onChange={onToggle}
      />
      <div>{label}</div>
    </label>
  );
};

export default CustomDropdownOption;

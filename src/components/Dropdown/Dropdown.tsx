import React, { useState } from "react";
import styles from "src/components/Dropdown/Dropdown.module.css";

interface IDropdownItem {
  value: string | number;
  content: React.ReactNode;
}

interface IDropdownProps {
  options: IDropdownItem[];
  onChange: (value: string | number) => void;
  /**
   * a css value is expected
   */
  width: string;
  defaultValue: string | number;
}

const Dropdown: React.FC<IDropdownProps> = ({
  options,
  onChange,
  width,
  defaultValue,
}: IDropdownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownElements = isOpen
    ? options.map((option) => buildItem(option))
    : null;
  const buildItem = (option: IDropdownItem) => (
    <div onClick={() => onChange(option.value)} className={styles.option}>
      {option.content}
    </div>
  );
  const defaultElt =
    defaultValue && options.find((o) => o.value === defaultValue)
      ? buildItem(
          options.find((o) => o.value === defaultValue) as IDropdownItem
        )
      : null;
  console.log("defaultElt", defaultElt);
  return (
    <div
      className={styles.dropdown}
      style={{ width: width || "" }}
      onClick={() => setIsOpen(true)}
    >
      {defaultElt}
      {dropdownElements}
    </div>
  );
};

export default Dropdown;

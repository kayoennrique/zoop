import "./Select.css";

interface SelectOptionProps {
  amount: string;
  children: React.ReactNode;
}

const SelectOption = ({ amount, children }: SelectOptionProps) => {
  return (
    <>
      <option value={amount} className="select__option">
        {children}
      </option>
    </>
  );
};

export default SelectOption;

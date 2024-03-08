import "./Select.css";

interface SelectGroupProps extends React.HTMLProps<HTMLSelectElement> {
  id: string;
  name: string;
  children: React.ReactNode;
}

const SelectGroup = ({ id, children, name, ...rest }: SelectGroupProps) => {
  return (
    <select name={name} id={id} className="select__group" {...rest}>
      {children}
    </select>
  );
};

export default SelectGroup;

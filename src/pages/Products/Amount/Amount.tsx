import { Select, SelectGroup } from "@/components/Select";

const selectOptions = [
  { value: "Amount", label: "Quantidade" },
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
];

const Amount = () => {
  return (
    <SelectGroup name="select-quantidade" id="select-quantidade">
      {selectOptions.map((option) => (
        <Select key={option.value} amount={option.value}>
          {option.label}
        </Select>
      ))}
    </SelectGroup>
  );
};

export default Amount;

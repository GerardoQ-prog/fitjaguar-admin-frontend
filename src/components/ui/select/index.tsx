import { FieldError } from "react-hook-form";
import ErrorMessage from "../error-message";

interface ISelectProps {
  label: string;
  options: any[];
  onChange: any;
  value: string;
  name: string;
  error: FieldError | undefined;
}
const Select: React.FC<ISelectProps> = ({
  label,
  options,
  onChange,
  value,
  name,
  error,
}) => {
  return (
    <div className="my-2 w-full">
      <label className="block mb-1 font-bold text-white">{label}</label>
      <select
        className="bg-black-300 text-white border-none outline-none rounded-md p-3 font-medium w-full"
        value={value}
        onChange={onChange}
        name={name}
      >
        <option value="">Selecciona</option>
        {options.map((item) => (
          <option value={item._id}>
            {item.lastname ? item.name + " " + item.lastname : item.name}
          </option>
        ))}
      </select>
      {error?.message && <ErrorMessage>{error.message}</ErrorMessage>}
    </div>
  );
};

export default Select;

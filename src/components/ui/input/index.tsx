interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input: React.FC<IInputProps> = ({
  label,
  name,
  value,
  onChange,
  ...rest
}) => {
  return (
    <div className="flex flex-col gap-1 w-full my-2">
      <label className="font-bold">{label}</label>
      <input
        className="bg-black-300 text-white border-none outline-none rounded-md p-3 font-medium"
        name={name}
        value={value}
        onChange={onChange}
        autoComplete="off"
        {...rest}
      />
    </div>
  );
};

export default Input;

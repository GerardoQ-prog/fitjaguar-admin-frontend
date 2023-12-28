import { FieldError, RegisterOptions, UseFormRegister } from "react-hook-form";
import ErrorMessage from "../error-message";

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  className?: string;
  register: UseFormRegister<any>;
  error: FieldError | undefined;
  rules: RegisterOptions;
}

const Input: React.FC<IInputProps> = ({
  label,
  className = "bg-black-300 text-white",
  id,
  register,
  error,
  rules,
  ...rest
}) => {
  return (
    <div className="flex flex-col gap-1 w-full my-2">
      <label className="font-bold">{label}</label>
      <input
        className={`${className} border-none outline-none rounded-md p-3 font-medium disabled:opacity-60 disabled:cursor-not-allowed`}
        autoComplete="off"
        id={id}
        {...register(id, rules)}
        {...rest}
      />
      {error?.message && <ErrorMessage>{error.message}</ErrorMessage>}
    </div>
  );
};

export default Input;

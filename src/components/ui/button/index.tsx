interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  colors?: string;
}
const Button: React.FC<IButtonProps> = ({
  children,
  className = "",
  colors = "bg-primary text-black",
  ...rest
}) => {
  return (
    <button
      type="button"
      className={`${className} ${colors} w-full font-bold max-h-[50px] p-3 rounded-[10px] border-none outline-none text-base disabled:bg-gray-100 disabled:text-white`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;

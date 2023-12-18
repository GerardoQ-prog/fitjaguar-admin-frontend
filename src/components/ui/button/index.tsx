interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}
const Button: React.FC<IButtonProps> = ({
  children,
  className = "",
  ...rest
}) => {
  return (
    <button
      type="button"
      className={`${className} bg-primary text-black font-bold max-h-[50px] p-3 rounded-[10px] border-none outline-none text-base`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;

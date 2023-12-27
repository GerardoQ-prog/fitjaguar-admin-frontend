interface IErrorMessageProps {
  children: React.ReactNode;
}

const ErrorMessage: React.FC<IErrorMessageProps> = ({ children }) => {
  return <p className="text-xs text-red-500">{children}</p>;
};

export default ErrorMessage;

interface ICardSummaryProps {
  background: string;
  icon: JSX.Element;
  colorTitle: string;
  color: string;
  title: string;
  description: string;
  children: React.ReactNode;
}

const CardSummary: React.FC<ICardSummaryProps> = ({
  background,
  children,
  color,
  colorTitle,
  description,
  icon,
  title,
}) => {
  return (
    <div className={`${background} w-full max-w-[255px] p-5 rounded-3xl `}>
      <div className="flex justify-between">
        <p className={`${colorTitle} text-base font-extrabold`}>{title}</p>
        {icon}
      </div>
      <div className={`${color} text-center my-10 text-2xl font-bold`}>
        {children}
      </div>
      <p className={`${color} text-xs font-light text-center my-3`}>
        {description}
      </p>
    </div>
  );
};

export default CardSummary;

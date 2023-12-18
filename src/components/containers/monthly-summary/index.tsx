import CardSummary from "../../elements/card-summary";
import BookIcon from "../../ui/icons/book";
import CurrencyIcon from "../../ui/icons/currency";
import IncomeIcon from "../../ui/icons/income";
import UsersIcon from "../../ui/icons/users";

const MonthlySummary = () => {
  return (
    <div>
      <p>Resumen mensual</p>
      <div className="flex gap-5">
        <CardSummary
          background="bg-black"
          title="Ingresos Agosto"
          icon={<IncomeIcon />}
          color="text-white"
          colorTitle="text-primary"
          description="Total de ingresos"
        >
          S/ 8,492.000
        </CardSummary>
        <CardSummary
          background="bg-black"
          title="Nuevos Usuarios"
          icon={<UsersIcon />}
          color="text-white"
          colorTitle="text-primary"
          description="Usuarios registrados"
        >
          300
        </CardSummary>
        <CardSummary
          background="bg-primary"
          title="Nuevos Usuarios"
          icon={<BookIcon />}
          color="text-black"
          colorTitle="text-black"
          description="Total de cursos vendidos"
        >
          24
        </CardSummary>
        <CardSummary
          background="bg-black"
          title="Monto Total"
          icon={<CurrencyIcon />}
          color="text-white"
          colorTitle="text-primary"
          description="Total de ingresos"
        >
          S/ 201,670.300
        </CardSummary>
      </div>
    </div>
  );
};

export default MonthlySummary;

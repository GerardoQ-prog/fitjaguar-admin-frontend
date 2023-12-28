import { RegisterOptions } from "react-hook-form";

const rulesEmail: RegisterOptions = {
  required: "El email es requerido",
  pattern: {
    value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i,
    message: "El email debe ser valido",
  },
};

export const validationFormLogin = {
  rulesEmail,
};

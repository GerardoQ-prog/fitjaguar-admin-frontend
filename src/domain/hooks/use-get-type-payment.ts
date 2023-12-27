import { useQuery } from "@tanstack/react-query";
import { typePaymentService } from "../services/type-payment.service";

export const useGetTypePayment = () => {
  return useQuery({
    queryKey: ["type-payment"],
    queryFn: typePaymentService.getTypesPayment,
  });
};

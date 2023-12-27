import { useQuery } from "@tanstack/react-query";
import { statusPaymentService } from "../services/status-payment.service";

export const useGetStatusPayment = () => {
  return useQuery({
    queryKey: ["status-payment"],
    queryFn: statusPaymentService.getStatusPayment,
  });
};

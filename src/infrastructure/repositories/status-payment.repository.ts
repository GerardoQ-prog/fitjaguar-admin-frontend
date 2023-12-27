import { http } from "../http/http";

export const statusPaymentRepository = {
  getStatusPayment: async () => {
    const coaches = await http.get<any[]>("/status-payment");
    return coaches;
  },
};

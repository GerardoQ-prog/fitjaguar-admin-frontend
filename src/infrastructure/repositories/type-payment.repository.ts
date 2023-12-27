import { http } from "../http/http";

export const typePaymentRepository = {
  getTypesPayment: async () => {
    const coaches = await http.get<any[]>("/type-payment");
    return coaches;
  },
};

import { typePaymentRepository } from "../../infrastructure/repositories/type-payment.repository";

export const typePaymentService = {
  getTypesPayment: () => {
    return typePaymentRepository.getTypesPayment();
  },
};

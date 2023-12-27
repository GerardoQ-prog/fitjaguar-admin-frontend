import { statusPaymentRepository } from "../../infrastructure/repositories/status-payment.repository";

export const statusPaymentService = {
  getStatusPayment: () => {
    return statusPaymentRepository.getStatusPayment();
  },
};

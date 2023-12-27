import { codeRepository } from "../../infrastructure/repositories/code.repository";

export const codeService = {
  getCodes: () => {
    return codeRepository.getCodes();
  },
  createNewCode: (newCode: any) => {
    const response = codeRepository.createNewCode(newCode);
    return response;
  },
  updateCode: (newCode: any) => {
    const response = codeRepository.updateCode(newCode);
    return response;
  },
};

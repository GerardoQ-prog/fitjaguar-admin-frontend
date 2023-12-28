import { codeRepository } from "../../infrastructure/repositories/code.repository";

export const codeService = {
  getCodes: () => {
    return codeRepository.getCodes();
  },
  getCodeById: (id: string) => {
    return codeRepository.getRoadById(id);
  },
  createNewCode: (newCode: any) => {
    const response = codeRepository.createNewCode(newCode);
    return response;
  },
  updateCode: (newCode: any) => {
    const response = codeRepository.updateCode(newCode);
    return response;
  },
  deleteCode: (codeId: string) => {
    const response = codeRepository.deleteCode(codeId);
    return response;
  },
};

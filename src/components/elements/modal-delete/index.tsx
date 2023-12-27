import React from "react";
import Modal from "../../ui/modal";
import Button from "../../ui/button";

interface IModalDeleteProps {
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => void;
}

const ModalDelete: React.FC<IModalDeleteProps> = ({
  isOpen,
  onClose,
  onDelete,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div>
        <h2 className="text-primary font-bold text-[30px] my-2">
          ¿Estás seguro de eliminar esto?
        </h2>
        <p className="text-white text-[20px] my-2">
          Esta acción no se puede deshacer
        </p>
        <div className="flex justify-end items-center gap-5">
          <Button onClick={onDelete} colors="bg-red-600 text-white">
            Eliminar
          </Button>
          <Button onClick={onClose}>Cancelar</Button>
        </div>
      </div>
    </Modal>
  );
};

export default ModalDelete;

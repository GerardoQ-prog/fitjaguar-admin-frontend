import CloseIcon from "../icons/close";

interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<IModalProps> = ({ isOpen, onClose, children }) => {
  return (
    <div
      className={`fixed bg-[rgba(0,0,0,0.25)] top-0 left-0 w-[100vw] h-[100vh] z-[999] ${
        isOpen ? "flex" : "hidden"
      } justify-center items-center`}
    >
      <div className="bg-black-300 fixed p-4 lg:p-9 rounded-[20px] w-[85%] h-[auto] max-w-[975px] lg:max-h-[560px]">
        <div className="flex justify-end items-center">
          <div className="flex items-center cursor-pointer" onClick={onClose}>
            <p className="text-base text-primary-500">Cerrar</p>
            <CloseIcon />
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;

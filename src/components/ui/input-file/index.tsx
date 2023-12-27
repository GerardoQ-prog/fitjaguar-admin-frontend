import React from "react";
import MoreIcon from "../icons/more";
import { convertFileToImageBase64 } from "../../../utils";

interface IInputFileProps {
  image: string;
  handleChangeImage: (base64: string) => void;
}

const InputFile: React.FC<IInputFileProps> = ({ image, handleChangeImage }) => {
  const handleChangeInputFile = (e: any, fn: any) => {
    const file = e.target.files[0];
    convertFileToImageBase64(file, fn);
  };

  return (
    <div className="w-full">
      <label className="font-bold">Ingresar foto</label>
      {image === "" || !image ? (
        <div className="flex items-center justify-center w-full">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-64 border border-white rounded-lg cursor-pointer bg-black-300"
          >
            <div className="flex items-center justify-center gap-2">
              <MoreIcon />
              <p className=" text-white font-bold">Agregar foto</p>
            </div>
            <input
              id="dropzone-file"
              type="file"
              className="hidden"
              onChange={(e: any) => handleChangeInputFile(e, handleChangeImage)}
            />
          </label>
        </div>
      ) : (
        <div className="w-full">
          <img
            src={image}
            alt="Archivo seleccionado"
            className="w-[300px] object-contain"
          />
          <div className="flex items-center justify-center w-full mt-5">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-20 border border-white rounded-lg cursor-pointer bg-black-300"
            >
              <div className="flex items-center justify-center gap-2">
                <MoreIcon />
                <p className=" text-white font-bold">Agregar foto</p>
              </div>
              <input
                id="dropzone-file"
                type="file"
                className="hidden"
                onChange={(e: any) =>
                  handleChangeInputFile(e, handleChangeImage)
                }
              />
            </label>
          </div>
        </div>
      )}
    </div>
  );
};

export default InputFile;

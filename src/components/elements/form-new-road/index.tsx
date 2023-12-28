import Input from "../../ui/input";
import Button from "../../ui/button";
import { useCreateNewRoad } from "../../../domain/hooks/use-create-new-road";
import { useNavigate, useParams } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { validationFormNewRoad } from "../../../utils/validations/road";
import { capitalizeFullName, convertTextToSlug } from "../../../utils";
import { useUpdateRoad } from "../../../domain/hooks/use-update-road";
import { useDeleteRoad } from "../../../domain/hooks/use-delete-road";
import ModalDelete from "../modal-delete";
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

interface IFormNewRoadProps {
  data?: any;
}

type FormNewRoadValues = {
  name: string;
};

const FormNewRoad: React.FC<IFormNewRoadProps> = ({ data }) => {
  let { slug } = useParams();
  const navigate = useNavigate();
  const mutation = useCreateNewRoad();
  const mutationUpdate = useUpdateRoad();
  const mutationDelete = useDeleteRoad();
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormNewRoadValues>({
    mode: "onChange",
    defaultValues: data && {
      name: data.name,
    },
  });

  const [openModalDelete, setOpenModalDelete] = useState<boolean>(false);

  const createNewRoad: SubmitHandler<FormNewRoadValues> = async (dataForm) => {
    try {
      if (slug) {
        await mutationUpdate.mutateAsync(
          {
            ...dataForm,
            name: capitalizeFullName(dataForm.name),
            slug: convertTextToSlug(dataForm.name),
            _id: data._id,
          },
          {
            onSuccess: (dataResponse: any) => {
              if (!dataResponse?.error) {
                queryClient.setQueryData(["road-slug", slug], {
                  ...dataResponse,
                });
              }
            },
          }
        );
      } else {
        await mutation.mutateAsync({
          ...dataForm,
          name: capitalizeFullName(dataForm.name),
          slug: convertTextToSlug(dataForm.name),
        });
      }
      navigate("/rutas");
    } catch (error) {
      console.log(error);
    }
  };

  const deleteRoad = async () => {
    try {
      await mutationDelete.mutateAsync(data._id);
      navigate("/rutas");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form
        className="flex gap-10 items-center p-4"
        onSubmit={handleSubmit(createNewRoad)}
      >
        <Input
          label="Nombre de la ruta"
          register={register}
          error={errors.name}
          id="name"
          rules={validationFormNewRoad.rulesName}
        />
        <Button className="w-[80%] mt-6" type="submit">
          {slug ? "Editar ruta" : "Crear ruta"}
        </Button>
        {slug && (
          <Button
            className="w-[80%] mt-6"
            colors="bg-red-600 text-white"
            onClick={() => setOpenModalDelete(true)}
          >
            Eliminar ruta
          </Button>
        )}
      </form>
      <ModalDelete
        isOpen={openModalDelete}
        onClose={() => setOpenModalDelete(false)}
        onDelete={deleteRoad}
      />
    </>
  );
};

export default FormNewRoad;

import Input from "../../ui/input";
import Select from "../../ui/select";
import Button from "../../ui/button";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { validationFormNewCode } from "../../../utils/validations/code";
import { useNavigate, useParams } from "react-router-dom";
import { useGetStatusPayment } from "../../../domain/hooks/use-get-status-payment";
import { useGetTypePayment } from "../../../domain/hooks/use-get-type-payment";
import { countries } from "../../../utils/data/countries";
import { useCreateNewCode } from "../../../domain/hooks/use-create-new-code";
import { generateCode } from "../../../utils";
import { useUpdateCode } from "../../../domain/hooks/use-update-code";
import ModalDelete from "../modal-delete";
import { useState } from "react";
import { useDeleteCode } from "../../../domain/hooks/use-delete-code";
import { useQueryClient } from "@tanstack/react-query";

interface IFormNewCodeProps {
  data?: any;
}

type FormNewCodeValues = {
  adviser: string;
  email: string;
  typePayment: string;
  statusPayment: string;
  country: string;
  amount: string;
  code: string;
  discharge: string;
};

const FormNewCode: React.FC<IFormNewCodeProps> = ({ data }) => {
  let { id } = useParams();
  const navigate = useNavigate();
  const { data: dataStatusPayment } = useGetStatusPayment();
  const { data: dataTypePayment } = useGetTypePayment();
  const mutation = useCreateNewCode();
  const mutationUpdate = useUpdateCode();
  const mutationDelete = useDeleteCode();
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
    setValue,
  } = useForm<FormNewCodeValues>({
    mode: "onChange",
    defaultValues: data
      ? {
          adviser: data.adviser,
          email: data.email,
          typePayment: data.typePayment?._id || "",
          statusPayment: data.statusPayment?._id || "",
          country: data.country,
          amount: data.amount,
          code: data.code,
          discharge: data.discharge,
        }
      : {
          adviser: "Gerardo Quispe",
        },
  });

  const [openModalDelete, setOpenModalDelete] = useState<boolean>(false);

  const createNewCode: SubmitHandler<FormNewCodeValues> = async (dataForm) => {
    if (id) {
      await mutationUpdate.mutateAsync(
        {
          ...dataForm,
          _id: data._id,
        },
        {
          onSuccess: (dataResponse: any) => {
            if (!dataResponse?.error) {
              queryClient.setQueryData(["code-id", id], {
                ...dataResponse,
                typePayment: {
                  _id: dataResponse.typePayment,
                },
                statusPayment: {
                  _id: dataResponse.statusPayment,
                },
              });
            }
          },
        }
      );
      navigate("/codigo-activacion");
    } else {
      await mutation.mutateAsync(dataForm);
      navigate("/codigo-activacion");
    }
  };

  const generateCodeForm = () => {
    const code = generateCode(watch("adviser"), watch("amount"));
    setValue("code", code);
  };

  const deleteCode = async () => {
    try {
      await mutationDelete.mutateAsync(data._id);
      navigate("/codigo-activacion");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(createNewCode)}>
        <div className="grid grid-cols-3 gap-2 items-start">
          <Input
            label="Nombre de asesor"
            register={register}
            error={errors.adviser}
            id="adviser"
            rules={validationFormNewCode.rulesName}
            disabled
          />
          <Input
            label="Email de usuario"
            register={register}
            error={errors.email}
            id="email"
            rules={validationFormNewCode.rulesEmail}
            disabled={!!id}
          />
          <Controller
            control={control}
            name="country"
            rules={validationFormNewCode.rulesCountry}
            render={({ field }) => (
              <Select
                label="País"
                options={countries ? countries : []}
                error={errors.country}
                {...field}
                disabled={!!id}
              />
            )}
          />
          <Controller
            control={control}
            name="typePayment"
            rules={validationFormNewCode.rulesTypePayment}
            render={({ field }) => (
              <Select
                label="Tipo de pago"
                options={dataTypePayment ? dataTypePayment : []}
                error={errors.typePayment}
                {...field}
                disabled={!!id}
              />
            )}
          />
          <Controller
            control={control}
            name="statusPayment"
            rules={validationFormNewCode.rulesStatusPayment}
            render={({ field }) => (
              <Select
                label="Estado de pago"
                options={dataStatusPayment ? dataStatusPayment : []}
                error={errors.statusPayment}
                {...field}
              />
            )}
          />
          <Input
            label="Monto (USD)"
            register={register}
            error={errors.amount}
            id="amount"
            rules={validationFormNewCode.rulesAmount}
            disabled={!!id}
          />
          <Input
            label="Codigo"
            register={register}
            error={errors.code}
            id="code"
            rules={validationFormNewCode.rulesCode}
            disabled
          />
          <Button className="mt-7" onClick={generateCodeForm}>
            Generar código
          </Button>
        </div>
        <Input
          label="Descargo"
          register={register}
          error={errors.discharge}
          id="discharge"
          rules={validationFormNewCode.rulesDischarge}
        />
        <br />
        <div className="flex gap-5">
          <Button type="submit">
            {id ? "Actualizar código" : "Crear código"}
          </Button>
          {id && (
            <Button
              colors="bg-red-600 text-white"
              onClick={() => setOpenModalDelete(true)}
            >
              Eliminar código
            </Button>
          )}
        </div>
      </form>
      <ModalDelete
        isOpen={openModalDelete}
        onClose={() => setOpenModalDelete(false)}
        onDelete={deleteCode}
      />
    </>
  );
};

export default FormNewCode;

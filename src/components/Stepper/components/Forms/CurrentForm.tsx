import type { Control, FieldErrors, FieldValues, Path } from "react-hook-form";
import { AppointmentForm } from "./AppointmentForm/AppointmentForm";
import { OwnerForm } from "./OwnerForm/OwnerForm";
import { VehicleForm } from "./VehicleForm/VehicleForm";
import type { InputsFormServices, ServiceCard } from "../../../../types/service";
import { MotionGrid } from "../../../MotionComponents/MuiMotion";
import { ErrorMessage } from "../Errors/ErrorMessage";

type CurrentFormProps<T extends FieldValues> = {
  activeStep: number;
  control: Control<T>;
  name: Path<T>[];
  serviceSelected: ServiceCard | null;
  errors: FieldErrors<InputsFormServices>;
};

export const CurrentForm = <T extends FieldValues>({
  activeStep,
  control,
  name,
  serviceSelected,
  errors
}: CurrentFormProps<T>) => {

  return (
    <MotionGrid
      container
      bgcolor={"#FFF8E7"}
      paddingInline={"30px"}
      paddingBlock={"50px"}
      alignItems={"center"}
      position={'relative'}
    >
      <MotionGrid
        size={4}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        paddingInline={"18px"}
        width={"50%"}
      >
        <img
          src={serviceSelected?.image}
          alt={serviceSelected?.alt}
          style={{
            width: "160px",
            height: "160px",
            objectFit: "cover",
            aspectRatio: "16/9",
            borderRadius: "100px",
          }}
        />
        <h3>{serviceSelected?.title}</h3>
        <p style={{ textAlign: "center", width: "60%" }}>
          {serviceSelected?.desc}
        </p>
      </MotionGrid>
      <OwnerForm control={control} name={name[0]} activeStep={activeStep} />
      <VehicleForm control={control} name={name[1]} activeStep={activeStep} />
      <AppointmentForm
        control={control}
        name={name[2]}
        activeStep={activeStep}
      />
      <ErrorMessage errors={errors} activeStep={activeStep}/>
    </MotionGrid>
  );
};

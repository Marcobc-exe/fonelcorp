import type { Control, FieldValues, Path } from "react-hook-form";
import { AppointmentForm } from "./AppointmentForm/AppointmentForm";
import { OwnerForm } from "./OwnerForm/OwnerForm";
import { VehicleForm } from "./VehicleForm/VehicleForm";
import { Box } from "@mui/material";

type CurrentFormProps<T extends FieldValues> = {
  activeStep: number;
  control: Control<T>;
  name: Path<T>[];
};

export const CurrentForm = <T extends FieldValues>({
  activeStep,
  control,
  name,
}: CurrentFormProps<T>) => {
  const forms = [
    <OwnerForm control={control} name={name[0]} />,
    <VehicleForm control={control} name={name[1]} />,
    <AppointmentForm control={control} name={name[2]} />,
  ];

  return (
    <Box
      component={'div'}
      bgcolor={"#FFF8E7"}
      paddingInline={"30px"}
      paddingBlock={"50px"}
    >
      {forms[activeStep]}
    </Box>
  );
};

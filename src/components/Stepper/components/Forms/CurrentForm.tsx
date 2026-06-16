import type { Control, FieldErrors, FieldValues, Path } from "react-hook-form";
import { AppointmentForm } from "./AppointmentForm/AppointmentForm";
import { OwnerForm } from "./OwnerForm/OwnerForm";
import { VehicleForm } from "./VehicleForm/VehicleForm";
import type {
  InputsFormServices,
  ServiceCard,
} from "../../../../types/service";
import { MotionGrid } from "../../../MotionComponents/MuiMotion";
import { ErrorMessage } from "../Errors/ErrorMessage";
import { useMediaQuery, useTheme } from "@mui/material";
import { SelectedService } from "../MobileUI/SelectedService";

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
  errors,
}: CurrentFormProps<T>) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <MotionGrid
      container
      bgcolor={"#FFF8E7"}
      paddingInline={isMobile ? "0" : "30px"}
      paddingBlock={isMobile ? "0" : "50px"}
      paddingTop={"50px"}
      alignItems={"center"}
      position={"relative"}
    >
      <SelectedService
        isTablet={isTablet}
        isDesktop={isDesktop}
        serviceSelected={serviceSelected}
      />
      <OwnerForm control={control} name={name[0]} activeStep={activeStep} />
      <VehicleForm control={control} name={name[1]} activeStep={activeStep} />
      <AppointmentForm
        control={control}
        name={name[2]}
        activeStep={activeStep}
      />
      <ErrorMessage errors={errors} activeStep={activeStep} />
    </MotionGrid>
  );
};

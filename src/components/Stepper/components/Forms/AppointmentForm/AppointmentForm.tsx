import type { Control, FieldValues, Path } from "react-hook-form";
import { Input } from "../../../../Input/Input";
import { MotionGrid } from "../../../../MotionComponents/MuiMotion";

type Props<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
  activeStep: number;
};

export const AppointmentForm = <T extends FieldValues>({
  control,
  name,
  activeStep
}: Props<T>) => {
  return (
    <MotionGrid 
      display={activeStep === 2 ? 'flex' : 'none'} 
      flexDirection={"column"} 
      gap={{ xs: 2, sm: 4 }}
      size={{ sm: 12, md: 4, xs: 12 }}
    >
      <p>Select your date, time and current address:</p>
      <Input
        size={12}
        control={control}
        name={`${name}.date` as Path<T>}
        label="Date"
        variant="filled"
        fullWidth={true}
      />
      <Input
        size={12}
        control={control}
        name={`${name}.time` as Path<T>}
        label="Time"
        variant="filled"
        fullWidth={true}
      />
      <Input
        size={12}
        control={control}
        name={`${name}.address` as Path<T>}
        label="Address"
        variant="filled"
        fullWidth={true}
      />
    </MotionGrid>
  );
};

import type { Control, FieldValues, Path } from "react-hook-form";
import { Input } from "../../../../Input/Input";
import { MotionGrid } from "../../../../MotionComponents/MuiMotion";

type Props<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
  activeStep: number;
};

export const OwnerForm = <T extends FieldValues>({
  control,
  name,
  activeStep,
}: Props<T>) => {
  return (
    <MotionGrid
      display={activeStep === 0 ? "flex" : "none"}
      flexDirection={"column"}
      gap={2}
      size={4}
    >
      <p>Owner information:</p>
      <Input
        size={12}
        control={control}
        name={`${name}.name` as Path<T>}
        label="Name"
        variant="filled"
        fullWidth={true}
      />
      <Input
        size={12}
        control={control}
        name={`${name}.email` as Path<T>}
        label="Email"
        variant="filled"
        type="email"
        fullWidth={true}
      />
      <Input
        size={12}
        control={control}
        name={`${name}.phone` as Path<T>}
        label="Phone"
        variant="filled"
        fullWidth={true}
      />
    </MotionGrid>
  );
};

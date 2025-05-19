import type { Control, FieldValues, Path } from "react-hook-form";
import { Input } from "../../../../Input/Input";
import { Box } from "@mui/material";

type Props<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
};

export const AppointmentForm = <T extends FieldValues>({
  control,
  name,
}: Props<T>) => {
  return (
    <Box display={"flex"} flexDirection={"column"} gap={4}>
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
    </Box>
  );
};

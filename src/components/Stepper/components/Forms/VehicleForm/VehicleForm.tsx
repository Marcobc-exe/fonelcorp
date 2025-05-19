import type { Control, FieldValues, Path } from "react-hook-form";
import { Input } from "../../../../Input/Input";
import { Box } from "@mui/material";

type Props<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
};

export const VehicleForm = <T extends FieldValues>({
  control,
  name,
}: Props<T>) => {
  return (
    <Box display={"flex"} flexDirection={"column"} gap={4}>
      <Input
        size={12}
        control={control}
        name={`${name}.make` as Path<T>}
        label="Make"
        variant="filled"
        fullWidth={true}
      />
      <Input
        size={12}
        control={control}
        name={`${name}.model` as Path<T>}
        label="Model"
        variant="filled"
        fullWidth={true}
      />
      <Input
        size={12}
        control={control}
        name={`${name}.color` as Path<T>}
        label="Color"
        variant="filled"
        fullWidth={true}
      />
      <Input
        size={12}
        control={control}
        name={`${name}.year` as Path<T>}
        label="Year"
        variant="filled"
        fullWidth={true}
      />
      <Input
        size={12}
        control={control}
        name={`${name}.licensePalte` as Path<T>}
        label="License Plate"
        variant="filled"
        fullWidth={true}
      />
    </Box>
  );
};

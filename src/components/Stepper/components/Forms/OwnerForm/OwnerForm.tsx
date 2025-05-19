import type { Control, FieldValues, Path } from "react-hook-form";
import { Input } from "../../../../Input/Input";
import { Box } from "@mui/material";

type Props<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
};

export const OwnerForm = <T extends FieldValues>({
  control,
  name,
}: Props<T>) => {
  return (
    <Box display={"flex"} flexDirection={"column"} gap={4}>
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
    </Box>
  );
};

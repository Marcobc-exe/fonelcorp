import type { Control, FieldValues, Path } from "react-hook-form";
import { Input } from "../../../../Input/Input";
import { MotionBox, MotionGrid } from "../../../../MotionComponents/MuiMotion";
import { useMediaQuery, useTheme } from "@mui/material";

type Props<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
  activeStep: number;
};

export const VehicleForm = <T extends FieldValues>({
  control,
  name,
  activeStep,
}: Props<T>) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <MotionGrid
      display={activeStep === 1 ? "flex" : "none"}
      flexDirection={"column"}
      gap={{ xs: 2, sm: 4 }}
      size={{ sm: 12, md: 6, xs: 12 }}
    >
      <p>Vehicle information:</p>
      <MotionBox display={"flex"} flexDirection={isMobile ? "column" : "row"} gap={2}>
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
      </MotionBox>
      <MotionBox display={"flex"} flexDirection={isMobile ? "column" : "row"} gap={2}>
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
      </MotionBox>
      <Input
        size={12}
        control={control}
        name={`${name}.licensePlate` as Path<T>}
        label="License Plate"
        variant="filled"
        fullWidth={true}
      />
    </MotionGrid>
  );
};

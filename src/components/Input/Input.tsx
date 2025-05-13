import type { Theme } from "@emotion/react";
import { TextField, type SxProps, type TextFieldVariants } from "@mui/material";
import {
  Controller,
  type Path,
  type Control,
  type FieldValues,
  type RegisterOptions,
} from "react-hook-form";
import { MotionGrid } from "../MotionComponents/MuiMotion";

type Props<T extends FieldValues> = {
  rows?: number;
  name: Path<T>;
  label: string;
  multiline?: boolean;
  fullWidth?: boolean;
  control: Control<T>;
  variant: TextFieldVariants;
  rules?: Omit<
    RegisterOptions<T, Path<T>>,
    "setValueAs" | "disabled" | "valueAsNumber" | "valueAsDate"
  >;
  sx?: SxProps<Theme>;
  type?: React.HTMLInputTypeAttribute;
  size?: number;
  initial?: { opacity?: number; x?: number; y?: number };
  whileInView?: { opacity?: number; x?: number; y?: number };
  transition?: { duration?: number };
  viewport?: { once?: boolean; amount: number };
};

export const Input = <T extends FieldValues>({
  sx = {
    "& .MuiFilledInput-root": {
      color: "#294971",
      border: "none",
      bgcolor: "#FFF1CE",
      overflow: "hidden",
      borderRadius: "15px",
      "&.Mui-focused": {
        bgcolor: "#FFF1CE",
      },
    },
  },
  name,
  rows = 1,
  rules,
  label,
  control,
  variant,
  fullWidth = false,
  multiline = false,
  type,
  size,
  initial,
  whileInView,
  transition,
  viewport,
}: Props<T>) => {
  return (
    <Controller
      name={name}
      rules={rules}
      control={control}
      render={({ field: { value, onChange, ref }, fieldState: { error } }) => (
        <MotionGrid
          size={{ xs: 12, sm: 12, md: size ?? 12 }}
          initial={initial}
          whileInView={whileInView}
          transition={transition}
          viewport={viewport}
        >
          <TextField
            required
            ref={ref}
            rows={rows}
            value={value}
            label={label}
            error={!!error?.message}
            variant={variant}
            onChange={onChange}
            fullWidth={fullWidth}
            multiline={multiline}
            helperText={error?.message}
            sx={sx}
            type={type}
            slotProps={{
              input: {
                disableUnderline: true,
              },
            }}
            InputLabelProps={{
              sx: {
                color: "#294971",
                fontWeight: "600",
                "&.Mui-focused": {
                  color: "#123456",
                },
              },
            }}
          />
        </MotionGrid>
      )}
    />
  );
};

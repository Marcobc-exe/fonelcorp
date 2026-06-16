import {
  Controller,
  type Control,
  type FieldValues,
  type Path,
} from "react-hook-form";
import { MotionGrid } from "../MotionComponents/MuiMotion";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { listServiceCard } from "../../const/const";

type Props<T extends FieldValues> = {
  size: number;
  name: Path<T>;
  control: Control<T>;
};

export const CustomSelect = <T extends FieldValues>({
  control,
  size,
  name,
}: Props<T>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, ref, value }, fieldState: { error } }) => (
        <MotionGrid
          size={{ xs: 12, sm: 12, md: size ?? 12 }}
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <FormControl
            fullWidth
            variant="filled"
            sx={{
              bgcolor: "#FFF1CE",
              borderRadius: "15px",
              overflow: "hidden",
              border: "none",
            }}
          >
            <InputLabel
              sx={{
                color: "#294971",
                fontWeight: "bold",
                bgcolor: "transparent",
                "&.Mui-focused": {
                  color: "#294971",
                },
              }}
            >
              Services
            </InputLabel>
            <Select
              ref={ref}
              required
              fullWidth
              name={name}
              value={value}
              label="Services"
              id="id-select-service"
              labelId="select-label"
              error={!!error?.message}
              onChange={onChange}
              sx={{
                color: "#294971",
                bgcolor: "#FFF1CE",
                "&:hover": {
                  bgcolor: "#f5cd67",
                },
                "&:open": {
                  bgcolor: "#FFF1CE",
                },
              }}
              disableUnderline
              MenuProps={{
                PaperProps: {
                  sx: {
                    bgcolor: "#FFF1CE",
                    borderRadius: "15px",
                  },
                },
              }}
            >
              {listServiceCard.map((service) => (
                <MenuItem
                  key={service.id}
                  value={service.title}
                  sx={{
                    borderRadius: "15px",
                    "&.Mui-selected": {
                      fontWeight: "bold",
                      bgcolor: "#f5cd67",
                    },
                  }}
                >
                  {service.title}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </MotionGrid>
      )}
    />
  );
};

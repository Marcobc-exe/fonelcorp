import './appointmentForm.css';
import {
  Controller,
  type Control,
  type FieldValues,
  type Path,
} from "react-hook-form";
import { Input } from "../../../../Input/Input";
import { MotionGrid } from "../../../../MotionComponents/MuiMotion";
import {
  DatePicker,
  DesktopTimePicker,
  LocalizationProvider,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

type Props<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
  activeStep: number;
};

export const AppointmentForm = <T extends FieldValues>({
  control,
  name,
  activeStep,
}: Props<T>) => {
  return (
    <MotionGrid
      display={activeStep === 2 ? "flex" : "none"}
      flexDirection={"column"}
      gap={{ xs: 2, sm: 4 }}
      size={{ sm: 12, md: 4, xs: 12 }}
    >
      <p>Select your date, time and current address:</p>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Controller
          control={control}
          name={`${name}.date` as Path<T>}
          render={({ field: { value, onChange }}) => (
            <DatePicker
              name={`${name}.date` as Path<T>}
              disablePast
              value={value}
              onChange={onChange}
              views={["year", "month", "day"]}
              slotProps={{
                textField: {
                  variant: "standard",
                  InputProps: {
                    disableUnderline: true,
                  },
                  sx: {
                    bgcolor: "#FFF1CE",
                    paddingInline: "10px",
                    borderRadius: "15px",
                    height: "56px",
                    justifyContent: "center",
                    color: "#294971",
                    ":hover": {
                      bgcolor: "#f5cd67",
                    },
                  },
                },
                layout: {
                  sx: {
                    bgcolor: "#FFF1CE",
                    color: "#294971",
                    borderRadius: "15px",
                  },
                },
                desktopPaper: {
                  sx: {
                    borderRadius: "15px",
                  },
                },
                day: {
                  sx: {
                    ":hover": {
                      bgcolor: "#f5cd67",
                    },
                    "&.MuiButtonBase-root.Mui-selected": {
                      backgroundColor: "#f5cd67",
                      color: "#000",
                      fontWeight: "bold",
                    },
                  },
                },
                monthButton: {
                  sx: {
                    "&.MuiMonthCalendar-button.Mui-selected": {
                      backgroundColor: "#f5cd67",
                      color: "#000",
                      fontWeight: "bold",
                    },
                  }
                },
                yearButton: {
                  sx: {
                    '&.MuiYearCalendar-button.Mui-selected': {
                      backgroundColor: "#f5cd67",
                      color: "#000",
                      fontWeight: "bold",
                    }
                  }
                }
              }}
            />
          )}
        />
        <Controller
          control={control}
          name={`${name}.time` as Path<T>}
          render={({ field: { value, onChange }}) => (
            <DesktopTimePicker
              name={`${name}.time` as Path<T>}
              disablePast
              views={['hours', 'minutes']}
              value={value}
              onChange={onChange}
              slotProps={{
                textField: {
                  variant: "standard",
                  InputProps: {
                    disableUnderline: true,
                  },
                  sx: {
                    bgcolor: "#FFF1CE",
                    paddingInline: "10px",
                    borderRadius: "15px",
                    height: "56px",
                    justifyContent: "center",
                    color: "#294971",
                    ":hover": {
                      bgcolor: "#f5cd67",
                    },
                  },
                },
                layout: {
                  sx: {
                    bgcolor: "#FFF1CE",
                    color: "#294971",
                    borderRadius: "15px",
                    // '&.MuiMultiSectionDigitalClockSection-item.Mui-selected': {
                    //   bgcolor: 'green'
                    // }
                  },
                },
                desktopPaper: {
                  color: 'green',
                  sx: {
                    borderRadius: "15px",
                  },
                },
                digitalClockSectionItem: {
                  sx: {
                    borderRadius: '10px',
                    ':hover': {
                      bgcolor: '#f5cd67'
                    },
                    "&.MuiButtonBase-root.Mui-selected": {
                      backgroundColor: "#f5cd67",
                      color: "#000",
                      fontWeight: "bold",
                    },
                  }
                },
                actionBar: {
                  className: 'action-bar-btns',
                  sx: {
                    color: '#294971',
                  },
                },
              }}
            />
          )}
        />
      </LocalizationProvider>
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

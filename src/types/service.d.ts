import type { PickerValue } from "@mui/x-date-pickers/internals";

export type ServiceCard = {
  id: number;
  image: string;
  title: string;
  desc: string;
  alt: string;
  url: string;
  // handleShowForm: (service: ServiceCard) => void;
};

export type Content = {
  label: string;
  target: string;
};

export type InputsFormServices = string & {
  owner: {
    name: string;
    email: string;
    phone: string;
  };
  vehicle: {
    make: string;
    model: string;
    color: string;
    year: string;
    licensePlate: string;
  };
  appointment: {
    date: PickerValue;
    time: PickerValue;
    address: string;
  };
};

type FormKeys = "owner" | "vehicle" | "appointment";

interface OwnerForm {
  name: string;
  email: string;
  phone: string;
}

interface VehicleForm {
  make: string;
  model: string;
  color: string;
  year: string;
  licensePlate: string;
}

interface AppointmentForm {
  date: PickerValue;
  time: PickerValue;
  address: string;
}

export type FormDataMap = {
  owner: OwnerForm;
  vehicle: VehicleForm;
  appointment: AppointmentForm;
};

export type HandleInputsForm = OwnerForm | VehicleForm | AppointmentForm  ;

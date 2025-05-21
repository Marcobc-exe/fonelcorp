export type ServiceCard = {
  id: number;
  image: string;
  title: string;
  desc: string;
  alt: string;
  handleShowForm: (service: ServiceCard) => void;
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
    date: string;
    time: string;
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
  date: string;
  time: string;
  address: string;
}

export type FormDataMap = {
  owner: OwnerForm;
  vehicle: VehicleForm;
  appointment: AppointmentForm;
};

export type HandleInputsForm = OwnerForm | VehicleForm | AppointmentForm  ;

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
}

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
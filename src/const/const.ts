import type { ReasonService } from "../types/iconService";
import type { Content, ServiceCard } from "../types/service";

export const listServiceCard: ServiceCard[] = [
  {
    id: 1,
    image: "./images/battery-boost-service.jpg",
    title: "Battery Boost",
    desc: "Car won’t start due to a dead battery? Our roadside assistance team offers fast, reliable jump start services 24/7 to get you back on the road. Available throughout Calgary & Edmonton.",
    alt: "battery boost roadside assistance service in Calgary and Edmonton",
  },
  {
    id: 2,
    image: "./images/battery-replace-service.jpg",
    title: "Battery Replacement",
    desc: "Stuck with an old or faulty car battery? We come to you and replace your vehicle battery on the spot with a high-quality replacement. No towing needed.",
    alt: "battery replacement roadside assistance service in Calgary and Edmonton",
  },
  {
    id: 3,
    image: "./images/tire-changes-service.jpg",
    title: "Tire Change",
    desc: "Flat tire on the highway or in your driveway? Our mobile tire change service brings the tools and expertise to replace or install your spare tire wherever you are.",
    alt: "flat tire roadside assistance service in Calgary and Edmonton",
  },
  {
    id: 4,
    image: "./images/lockout-service.jpg",
    title: "Lockout Service",
    desc: "Locked out of your car? Our professional lockout service helps you regain access to your vehicle quickly and safely — no damage, no stress.",
    alt: "lockout roadside assistance service in Calgary and Edmonton",
  },
  {
    id: 5,
    image: "./images/fuel-delivery-service.jpg",
    title: "Fuel Delivery",
    desc: "Out of gas and stuck on the road? We provide emergency fuel delivery directly to your location so you can keep moving without the wait or the hassle.",
    alt: "fuel delivery roadside assistance service in Calgary and Edmonton",
  },
];

// export const listIconService: IconService[] = [
//   {
//     id: 1,
//     image: "./images/icon-tire.png",
//     title: "Tire Change",
//   },
//   {
//     id: 2,
//     image: "./images/icon-battery-boost.png",
//     title: "Battery Boost",
//   },
//   {
//     id: 3,
//     image: "./images/icon-lockout.png",
//     title: "Lockout Service",
//   },
//   {
//     id: 4,
//     image: "./images/icon-fuel.png",
//     title: "Fuel Delivery",
//   },
//   {
//     id: 5,
//     image: "./images/icon-battery-replace.png",
//     title: "Baterry Replacement",
//   },
// ];

export const listReason: ReasonService[] = [
  {
    id: 1,
    title: "Professional technicians",
    desc: '"Certified, friendly experts at your service."',
    src: "./images/certified-pro.png",
    alt: "certified-pro",
  },
  {
    id: 2,
    title: "Affordable rates",
    desc: '"Transparent pricing with no hidden fees."',
    src: "./images/affordable-rates.png",
    alt: "affordable-rates",
  },
  {
    id: 3,
    title: "24/7 Availability",
    desc: '"Availability anytime, anywhere in Edmonton and Calgary area."',
    src: "./images/availability-24-7.png",
    alt: "avaibility-24-7",
  },
];

export const about: Content[] = [
  { label: "Home", target: "home" },
  { label: "Services", target: "services" },
  { label: "Areas Covered", target: "areas" },
  { label: "Contact", target: "contact" },
  { label: "Privacy Policy", target: "policy" },
];

export const content: Content[] = [
  { label: "Home", target: "home" },
  { label: "Services", target: "services" },
  { label: "Areas Covered", target: "areas" },
  { label: "Contact", target: "contact" },
];

export const whatsAppLink = "https://wa.me/14034661621";
export const email = "roadside@fonel.ca";
export const phone = "403-466-1621";
export const call = `tel:+1${phone.replace("-", "")}`;

export const seo = {
  services: {
    default: {
      title: "Roadside Assistance",
      label: "roadside assistance",
      fullTitle: "24/7 Roadside Assistance in Calgary & Edmonton | Fonel Corp",
      desc: "Stuck on the road? Fonel provides fast battery replacement, battery boost, fuel delivery, car lockout help, and tire changes – 24/7.",
      time: "24/7",
      img: '/images/logo.png'
    },
    batteryBoost: {
      title: "Battery Boost in Calgary | Fonel",
      label: "battery boost",
      desc: "Car won’t start due to a dead battery? Our roadside assistance team offers fast, reliable jump start services 24/7 to get you back on the road. Available throughout Calgary & Edmonton.",
      img: '/images/battery-boost-service.jpg'
    },
    batteryReplacement: {
      title: "Battery Replacement Calgary | Fonel",
      label: "battery replacement",
      desc: "Stuck with an old or faulty car battery? We come to you and replace your vehicle battery on the spot with a high-quality replacement. No towing needed.",
      img: '/images/battery-replace-service.jpg'
    },
    fuelDelivery: {
      title: "Fuel Delivery Calgary | Fonel",
      label: "fuel delivery",
      desc: "Out of gas and stuck on the road? We provide emergency fuel delivery directly to your location so you can keep moving without the wait or the hassle.",
      img: '/images/fuel-delivery-service.jpg'
    },
    lockout: {
      title: "Car Lockout Help Calgary | Fonel",
      label: "lockout",
      desc: "Locked out of your car? Our professional lockout service helps you regain access to your vehicle quickly and safely — no damage, no stress.",
      img: '/images/lockout-service.jpg'
    },
    tireChange: {
      title: "Tire Change Service Calgary | Fonel",
      label: "tire change",
      desc: "Flat tire on the highway or in your driveway? Our mobile tire change service brings the tools and expertise to replace or install your spare tire wherever you are.",
      img: '/images/tire-changes-service.jpg'
    },
  },
};

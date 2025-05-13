import type { IconService, ReasonService } from "../types/iconService";
import type { Content, ServiceCard } from "../types/service";

export const listServiceCard: ServiceCard[] = [
  {
    id: 1,
    image: "./images/battery-boost-service.jpg",
    title: "Battery Boost",
    desc: "Dead baterry? We provide fast jump start anytime.",
  },
  {
    id: 2,
    image: "./images/battery-replace-service.jpg",
    title: "Battery Replacement",
    desc: "Old battery? We can install a new on the spot.",
  },
  {
    id: 3,
    image: "./images/tire-changes-service.jpg",
    title: "Tire Change",
    desc: "Flat or damaged tire? We'll get you rolling again.",
  },
  {
    id: 4,
    image: "./images/lockout-service.jpg",
    title: "Lockout Service",
    desc: "Locked out of your vehicle? We'll get you back in without damage.",
  },
  {
    id: 5,
    image: "./images/fuel-delivery-service.jpg",
    title: "Fuel Delivery",
    desc: "Ran out of gas? We deliver fuel directly to your location.",
  },
];

export const listIconService: IconService[] = [
  {
    id: 1,
    image: "./images/icon-tire.png",
    title: "Tire Change",
  },
  {
    id: 2,
    image: "./images/icon-battery-boost.png",
    title: "Battery Boost",
  },
  {
    id: 3,
    image: "./images/icon-lockout.png",
    title: "Lockout Service",
  },
  {
    id: 4,
    image: "./images/icon-fuel.png",
    title: "Fuel Delivery",
  },
  {
    id: 5,
    image: "./images/icon-battery-replace.png",
    title: "Baterry Replacement",
  },
];

export const listReason: ReasonService[] = [
  {
    id: 1,
    title: "Professional technicians",
    desc: '"Certified, friendly experts at your service."',
  },
  {
    id: 2,
    title: "Affordable rates",
    desc: '"Transparent pricing with no hidden fees."',
  },
  {
    id: 3,
    title: "24/7 Availability",
    desc: '"Availability anytime, anywhere in Edmonton and Calgary area."',
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

import { Layout } from "./components/Layout/Layout";
import "./App.css";
import { HeroTitle } from "./components/HeroTitle/HeroTittle";
import { OurServices } from "./components/OurServices/OurServices";
import { ChooseUs } from "./components/ChooseUs/ChooseUs";
import { AreasCovered } from "./components/AreasCovered/AreasCovered";
import { ContactForm } from "./components/ContactForm/ContactForm";
import { Footer } from "./components/Footer/Footer";
import { PPModal } from "./components/PPModal.tsx/PPModal";
import { useState } from "react";

const App = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleModal = (value: boolean) => {
    setOpenModal(value);
  };

  return (
    <Layout>
      <HeroTitle />
      <OurServices />
      <AreasCovered />
      <ChooseUs />
      <ContactForm />
      <Footer handleModal={handleModal} />
      <PPModal open={openModal} handleModal={handleModal} />
    </Layout>
  );
};

export default App;

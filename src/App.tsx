import { Layout } from './components/Layout/Layout'
import './App.css'
import { HeroTitle } from './components/HeroTitle/HeroTittle'
import { OurServices } from './components/OurServices/OurServices'
import { ChooseUs } from './components/ChooseUs/ChooseUs'
import { AreasCovered } from './components/AreasCovered/AreasCovered'
import { ContactForm } from './components/ContactForm/ContactForm'
import { Footer } from './components/Footer/Footer'

const App = () => {

  return (
    <Layout>
      <HeroTitle />
      <OurServices />
      <AreasCovered />
      <ChooseUs />
      <ContactForm />
      <Footer />
    </Layout>
  )
}

export default App

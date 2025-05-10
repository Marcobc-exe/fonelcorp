import { Layout } from './components/Layout/Layout'
import './App.css'
import { HeroTitle } from './components/HeroTitle/HeroTittle'
import { OurServices } from './components/OurServices/OurServices'
import { ChooseUs } from './components/ChooseUs/ChooseUs'

const App = () => {

  return (
    <Layout>
      <HeroTitle />
      <OurServices />
      <ChooseUs />
    </Layout>
  )
}

export default App

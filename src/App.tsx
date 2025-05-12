import { Layout } from './components/Layout/Layout'
import './App.css'
import { HeroTitle } from './components/HeroTitle/HeroTittle'
import { OurServices } from './components/OurServices/OurServices'
import { ChooseUs } from './components/ChooseUs/ChooseUs'
import { AreasCovered } from './components/AreasCovered/AreasCovered'

const App = () => {

  return (
    <Layout>
      <HeroTitle />
      <OurServices />
      <AreasCovered />
      <ChooseUs />
    </Layout>
  )
}

export default App

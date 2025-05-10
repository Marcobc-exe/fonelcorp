import { Layout } from './components/Layout/Layout'
import './App.css'
import { HeroTitle } from './components/HeroTitle/HeroTittle'
import { OurServices } from './components/OurServices/OurServices'

const App = () => {

  return (
    <Layout>
      <HeroTitle />
      <OurServices />
    </Layout>
  )
}

export default App

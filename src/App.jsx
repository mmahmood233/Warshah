import './index.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import Problem from './components/Problem'
import HowItWorks from './components/HowItWorks'
import PickupReturn from './components/PickupReturn'
import Services from './components/Services'
import GarageQuality from './components/GarageQuality'
import SocialProof from './components/SocialProof'
import AppPreview from './components/AppPreview'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <TrustBar />
      <Problem />
      <HowItWorks />
      <PickupReturn />
      <Services />
      <GarageQuality />
      <SocialProof />
      <AppPreview />
      <FinalCTA />
      <Footer />
    </>
  )
}

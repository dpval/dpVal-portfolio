import LogoSection from "./sections/LogoSection"
import NavBar from "./components/NavBar"
import ShowcaseSection from "./sections/ShowcaseSection"
import FeatureCards from "./sections/FeatureCards"
import ExperienceSection from "./sections/ExperienceSection"
import TechStack from "./sections/TechStack"
import Testimonials from "./sections/Testimonials"
import Home from "./sections/Home"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"


const App = () => {
  return (
    <>
    <NavBar />
    <Home />
    <ShowcaseSection />
    <LogoSection />
    <FeatureCards />
    <ExperienceSection />
    <TechStack />
    <Testimonials />
    <Contact />
    <Footer />
    </>
  )
}

export default App
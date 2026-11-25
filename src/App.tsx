import './App.css'
import ScrollProgress from './common/ScrollProgress'
import SectionNav from './common/SectionNav'
import AI from './sections/AI/AI'
import Contact from './sections/Contact/Contact'
import Experience from './sections/Experience/Experience'
import Footer from './sections/Footer/Footer'
import Hero from './sections/Hero/Hero'
import Hobbies from './sections/Hobbies/Hobbies'
import Projects from './sections/Projects/Projects'
import Skills from './sections/Skills/Skills'

function App() {
  return (
    <>
      <ScrollProgress />
      <SectionNav />
      <Hero />
      <Projects />
      <AI />
      <Experience />
      <Hobbies />
      <Skills />
      <Contact />
      <Footer />
    </>
  )
}

export default App

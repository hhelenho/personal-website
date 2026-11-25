import './App.css'
import ScrollProgress from './common/ScrollProgress'
import SectionNav from './common/SectionNav'
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
      <Experience />
      <Hobbies />
      <Skills />
      <Footer />
    </>
  )
}

export default App

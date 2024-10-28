import Hero from '../../components/Hero'
import SectionBio from '../../components/SectionBio'
import SectionProjects from '../../components/SectionProjects'
import Stack from '../../components/Stack'
import Contact from '../../components/Contact'

const Home = () => {
  return (
    <div>
      <Hero />
      <Stack />
      <SectionBio />
      <SectionProjects />
      <Contact/>
    </div>
  )
}

export default Home
import Hero from '../../components/Hero'
import SectionBio from '../../components/SectionBio'
import SectionProjects from '../../components/SectionProjects'
import Stack from '../../components/Stack'
import styles from './Home.module.css'

const Home = () => {
  return (
    <div>
      <Hero />
      <Stack />
      <SectionBio />
      <SectionProjects />
    </div>
  )
}

export default Home
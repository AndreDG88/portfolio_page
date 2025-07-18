import styles from './Home.module.css'
import Header from '../../components/Header/Header'
import AboutMe from '../../components/AboutMe/AboutMe'
import ProjectGallery from '../../components/ProjectGallery/ProjectGallery'
import Contact from '../../components/Contact/Contact'
import HeroSlider from '../../components/HeroSlider/HeroSlider'

function Home() {
  return (
    <div>
      <Header />
      <HeroSlider />
      <main className="container">
        <section id="about">
          <AboutMe />
        </section>

        <section id="projects">
          <h2 className={styles.title}>Projetos</h2>
          <ProjectGallery />
        </section>
        
        <section id="contact">
          <h2 className={styles.title}>Contato</h2>
          <Contact />
        </section>
      </main>
    </div>
  )
}

export default Home


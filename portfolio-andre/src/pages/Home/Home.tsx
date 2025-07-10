import styles from './Home.module.css'
import Header from '../../components/Header/Header'
import AboutMe from '../../components/AboutMe/AboutMe'
import ProjectGallery from '../../components/ProjectGallery/ProjectGallery'

function Home() {
  return (
    <div  className="container">
      <Header />
      <main>
        <section id="about">
          <AboutMe />
        </section>

        <section id="projects">
          <h2 className={styles.title}>Projetos</h2>
          <ProjectGallery />
        </section>
        
        <section id="contact">
          <h2>Contato</h2>
          {/* dados de contato em breve */}
        </section>
      </main>
    </div>
  )
}

export default Home


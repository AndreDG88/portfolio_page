import Header from '../../components/Header/Header'
import AboutMe from '../../components/AboutMe/AboutMe'

function Home() {
  return (
    <div  className="container">
      <Header />
      <main>
        <section id="about">
          <AboutMe />
        </section>

        <section id="projects">
          <h2>Projetos</h2>
          {/* galeria em breve */}
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


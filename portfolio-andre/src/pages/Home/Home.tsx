import Header from '../../components/Header/Header'

function Home() {
  return (
    <div  className="container">
      <Header />
      <main>
        <section id="about">
          <h2>Sobre Mim</h2>
          {/* conteúdo em breve */}
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


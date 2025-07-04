import styles from './AboutMe.module.css'
import avatar from '../../assets/media/avatar.png'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

function AboutMe() {
  return (
    <section id="about" className={styles.about}>
      <img src={avatar} alt="André Soares" className={styles.avatar} />

      <div className={styles.bio}>
        <h2>Sobre Mim</h2>

        <p>
          Sou <strong>André Soares</strong>, desenvolvedor Full Stack Python com formação pela EBAC e
          formado em Design Gráfico pela UVA. Tenho experiência prática em projetos de desenvolvimento,
          como landing pages, e-commerce e sistemas com React, TypeScript, Python e Vue.
          Também atuo como designer e ilustrador, com forte domínio em projetos gráficos.
        </p>

        <p>
          Tenho perfil focado, organizado e com facilidade de trabalho em equipe, já tendo atuado como
          coordenador de criação. Estou sempre buscando unir técnica e criatividade em soluções funcionais.
        </p>

        <div className={styles.links}>
          <a
            href="https://github.com/AndreDG88"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub size={40} />
          </a>

          <a
            href="https://www.linkedin.com/in/andre-soares88"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={40} />
          </a>
        </div>

        <div className={styles.stats}>
          <img
            loading="lazy"
            height="180em"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=AndreDG88&layout=compact&langs_count=7&theme=dracula"
            alt="Top Languages"
          />
          <img
            loading="lazy"
            height="180em"
            src="https://github-readme-stats.vercel.app/api?username=AndreDG88&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"
            alt="GitHub Stats"
          />
        </div>
      </div>
    </section>
  )
}

export default AboutMe

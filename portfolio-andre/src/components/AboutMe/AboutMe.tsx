import styles from './AboutMe.module.css'
import avatar from '../../assets/media/avatar.png'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { motion } from 'framer-motion'
import TechIcons from '../TechIcons/TechIcons'

function AboutMe() {
  return (
    <section id="about" className={styles.about}>
      <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5 }}
      >
        <img src={avatar} alt="André Soares" className={styles.avatar} />
      </motion.div>

      <div className={styles.bio}>
        <h2>Olá! Eu sou André Soares</h2>

        <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 3.0 }}
        >
          <p>
            Desenvolvedor Full Stack com foco em Python e uma sólida formação em Design Gráfico.
            Minha trajetória começou no universo criativo, atuando por mais de 18 anos com identidade visual, sinalização e ilustração, e evoluiu naturalmente para a tecnologia.
            Onde hoje desenvolvo soluções que combinam funcionalidade, estética e experiência de usuário.
          </p>

          <p>
            Me graduei em Design pela UVA e me especializei em Desenvolvimento Full Stack pela EBAC, onde aprofundei conhecimentos nas mais diversas técnologoias, 
            como React, TypeScript, Python, Django e Docker. Além de ferramentas que auxiliam o trabalgo em equipe, como o Git.
            Essa formação híbrida me permite pensar projetos de forma completa, do conceito visual à entrega técnica.
          </p>
        </motion.div>

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

        <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 3.0 }}
        >
          <p>
            Sou organizado, comprometido com entregas bem-feitas e tenho facilidade de comunicação e liderança. Já coordenei equipes de criação e participei
            de projetos multidisciplinares. Gosto de ambientes colaborativos e acredito que boas soluções surgem da união entre criatividade e método.
          </p>

          <p>
            Tenho afinidade com interfaces, UI/UX e aplicações web responsivas. Entre meus projetos, estão calculadoras interativas, sistemas de cadastro, portais visuais e
            experimentações em 3D e animação. Busco oportunidades em que eu possa crescer como desenvolvedor, contribuir com time e aprender continuamente.
          </p>
        </motion.div>
      </div>

          <TechIcons />

      <div className={styles.bio}>
        <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 3.0 }}
        >
          <p>
            Meu portfólio reúne projetos que refletem essa versatilidade entre o design e o desenvolvimento. Acredito no poder da simplicidade e da empatia no desenvolvimento
            de produtos digitais. Se você procura alguém que pense além do código, seja comprometido e goste de desafios criativos, vamos conversar!
          </p>
        </motion.div>
        
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
        {/* Timeline ao final */}
      </div>
    </section>
  )
}

export default AboutMe

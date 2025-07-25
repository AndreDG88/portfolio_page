import styles from './Timeline.module.css'
import { motion } from 'framer-motion'

const events = [
  {
    year: '2006',
    title: 'Início como Designer Gráfico',
    description: 'Início da carreira com projetos de identidade visual, material promocional e trabalhos com mídia impressa. Desenvolvimento de habilidades em layout, composição e atendimento ao cliente.'
  },
  {
    year: '2011',
    title: 'Graduação em Design Gráfico (UVA)',
    description: 'Conclusão do curso na Universidade Veiga de Almeida. Aprofundamento na áre de design 2D e novo aprendizado na área 3D.'
  },
  {
    year: '2014–2019',
    title: 'Atuação como Coordenador de Criação',
    description: 'Liderança de equipes criativas, campanhas completas, sinalização e materiais editoriais. Gestão de prazos, briefing e entregas.'
  },
  {
    year: '2022',
    title: 'Transição para Desenvolvimento',
    description: 'Início dos estudos em desenvolvimento front-end e back-end. Primeiros projetos próprios com HTML, CSS, e JS.'
  },
  {
    year: '2023-25',
    title: 'Formação Full Stack Python (EBAC)',
    description: 'Curso completo com foco em desenvolvimento Full Stack Python e boas práticas. Projetos autorais e aplicação prática dos conhecimentos.'
  },
  {
    year: '2024–25',
    title: 'Atuação Full Stack & Designer Multidisciplinar',
    description: 'Criação de projetos que unem design e código. Busca por oportunidades que valorizem criatividade, organização e tecnologia.'
  }
]

function Timeline() {
  return (
    <div className={styles.timeline}>
      <ul>
        {events.map((event, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className={styles.year}>{event.year}</div>
            <div>
              <p className={styles.title}>{event.title}</p>
              <p>{event.description}</p>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  )
}

export default Timeline

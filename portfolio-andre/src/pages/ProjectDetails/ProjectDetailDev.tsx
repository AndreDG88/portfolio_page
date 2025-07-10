import { useParams } from 'react-router-dom'
import { projects } from '../../data/projects'
import styles from './ProjectDetail.module.css'

function ProjectDetailDev() {
  const { id } = useParams()
  const project = projects.find((p) => p.id === id)

  if (!project) return <p>Projeto não encontrado.</p>

  return (
    <div className={styles.detailContainer}>
      <h1>{project.title}</h1>
      <img src={project.image} alt={project.title} className={styles.image} />
      <p className={styles.description}>{project.description}</p>
    </div>
  )
}

export default ProjectDetailDev

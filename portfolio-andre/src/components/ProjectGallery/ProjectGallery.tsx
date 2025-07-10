import styles from './ProjectGallery.module.css'
import { projects } from '../../data/projects'
import { useNavigate } from 'react-router-dom'

function ProjectGallery() {
  const navigate = useNavigate()

  const handleClick = (projectId: string, category: string) => {
    const route = category === 'dev' 
  ? `/project/dev/${projectId}` 
  : `/project/design/${projectId}`
    navigate(route)
  }

  return (
    <div className={styles.gallery}>
      {projects.map((project) => (
        <div
          key={project.id}
          className={styles.card}
          onClick={() => handleClick(project.id, project.category)}
        >
          <img src={project.image} alt={project.title} />
          <div className={styles.overlay}>
            <h3>{project.title}</h3>
            <p>Veja mais sobre este projeto</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProjectGallery

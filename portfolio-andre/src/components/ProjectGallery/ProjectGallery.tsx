import styles from './ProjectGallery.module.css'
import { projects } from '../../data/projects'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'


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
        <motion.div
          key={project.id}
          className={styles.card}
          onClick={() => handleClick(project.id, project.category)}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.96 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <img src={project.image} alt={project.title} />
          <div className={styles.overlay}>
            <h3>{project.title}</h3>
            <p>Veja mais sobre este projeto</p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default ProjectGallery

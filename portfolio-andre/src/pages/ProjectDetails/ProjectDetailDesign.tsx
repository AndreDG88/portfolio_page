import { useParams } from 'react-router-dom'
import { projects } from '../../data/projects'
import styles from './ProjectDetail.module.css'
import { motion } from 'framer-motion'
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import Header from '../../components/Header/Header'
import { useState } from 'react'
import { useEffect } from 'react'

function ProjectDetailDesign() {
  useEffect(() => {window.scrollTo(0, 0)}, [])
  const { id } = useParams()
  const project = projects.find((p) => p.id === id && p.category === 'design')

  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)

  if (!project) return <p>Projeto não encontrado.</p>

  const handleNext = () => {
    if (project.gallery && selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % project.gallery.length)
    }
  }

  const handlePrev = () => {
    if (project.gallery && selectedImageIndex !== null) {
      setSelectedImageIndex(
        (selectedImageIndex - 1 + project.gallery.length) % project.gallery.length
      )
    }
  }

  return (
    <>
      <Header />

      <div className={styles.hero}>
        <img src={project.image} alt={project.title} />
      </div>

      <div className={styles.Container}>
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>{project.title}</h1>
        <p>{project.description}</p>
      </motion.div>

      {project.techs && (
        <div className={styles.techSection}>
          <h2>Tecnologias & Técnicas</h2>
          <ul>
            {project.techs.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>
      )}

      <div className='container'>
        {project.gallery && (
          <div className={styles.gallery}>
            {project.gallery.map((img, index) => (
              <div
                key={index}
                className={styles.thumb}
                onClick={() => setSelectedImageIndex(index)}
              >
                <img src={img} alt={`Imagem ${index + 1}`} />
                <div className={styles.thumbOverlay}>Clique para ampliar</div>
              </div>
            ))}
          </div>
        )}
      </div>

      {selectedImageIndex !== null && project.gallery && project.gallery[selectedImageIndex] && (
        <div className={styles.lightbox}>
          <button className={styles.closeBtn} onClick={() => setSelectedImageIndex(null)}>
            <FaTimes size={24} />
          </button>
          <div className={styles.lightboxImageWrapper}>
            <button className={styles.navBtn} onClick={handlePrev}>
              <FaChevronLeft size={30} />
            </button>

            <img src={project.gallery[selectedImageIndex]} alt="Ampliada" />

            <button className={styles.navBtn} onClick={handleNext}>
              <FaChevronRight size={30} />
            </button>
          </div>
        </div>
      )}
    </div>
    </>   
  )
}

export default ProjectDetailDesign

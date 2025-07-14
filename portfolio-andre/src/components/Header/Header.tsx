import { useState } from 'react'
import styles from './Header.module.css'
import logo from '../../assets/media/logo-brand.png'
import { FaBars, FaTimes } from 'react-icons/fa'
import { motion } from 'framer-motion'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => setMenuOpen(!menuOpen)

  return (
    <motion.header
      className={styles.header}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className={styles.logoArea}>
        <img src={logo} alt="Logo" className={styles.logo} />
        <h1 className={styles.title}>André Soares</h1>
      </div>

      <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
        <ul className={styles.navLinks}>
          <li><a href="#about" onClick={toggleMenu}>Sobre</a></li>
          <li><a href="#projects" onClick={toggleMenu}>Projetos</a></li>
          <li><a href="#contact" onClick={toggleMenu}>Contato</a></li>
        </ul>
      </nav>

      <button className={styles.menuToggle} onClick={toggleMenu} aria-label="Menu">
        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>
    </motion.header>
  )
}

export default Header

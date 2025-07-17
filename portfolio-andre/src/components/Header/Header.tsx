import { useState } from 'react'
import styles from './Header.module.css'
import logo from '../../assets/media/logo-brand.png'
import { FaBars, FaTimes } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { HashLink as Link } from 'react-router-hash-link'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => setMenuOpen(!menuOpen)

  return (
    <motion.div
      className={styles.headerWrapper}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <header className={styles.header}>
        <div className={styles.logoArea}>
          <img src={logo} alt="Logo" className={styles.logo} />
          <h1 className={styles.title}>André Soares</h1>
        </div>

        <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
          <ul className={styles.navLinks}>
            <li><Link smooth to="/#about" onClick={toggleMenu}>Sobre</Link></li>
            <li><Link smooth to="/#projects" onClick={toggleMenu}>Projetos</Link></li>
            <li><Link smooth to="/#contact" onClick={toggleMenu}>Contato</Link></li>
          </ul>
        </nav>

        <button className={styles.menuToggle} onClick={toggleMenu} aria-label="Menu">
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </header>
    </motion.div>
  )
}

export default Header

import styles from './Header.module.css'
import logo from '../../assets/media/logo-brand.png'

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoArea}>
        <img src={logo} alt="Logo" className={styles.logo} />
        <h1 className={styles.title}>André Soares</h1>
      </div>
      <nav>
        <ul className={styles.navLinks}>
          <li><a href="#about">Sobre</a></li>
          <li><a href="#projects">Projetos</a></li>
          <li><a href="#contact">Contato</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

import styles from './TechIcons.module.css'
import {
  FaReact,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaFigma,
  FaDocker,
  FaGithub
} from 'react-icons/fa'

import {
  SiTypescript,
  SiJavascript,
  SiDjango,
  SiAdobephotoshop,
  SiAdobeillustrator,
} from 'react-icons/si'

import { HiOutlineDocumentText } from 'react-icons/hi'
import { MdDraw } from 'react-icons/md'
import { PiCubeLight } from 'react-icons/pi'
import { TbVector } from 'react-icons/tb'

function TechIcons() {
  return (
    <div className={styles.techIcons}>
      <h3>Skills & Ferramentas</h3>
      <div className={styles.iconGrid}>
        <FaReact title="React" />
        <SiTypescript title="TypeScript" />
        <SiJavascript title="JavaScript" />
        <FaPython title="Python" />
        <SiDjango title="Django" />
        <FaNodeJs title="Node.js" />
        <FaHtml5 title="HTML5" />
        <FaCss3Alt title="CSS3" />
        <FaDocker title="Docker" />
        <FaGitAlt title="Git" />
        <FaGithub title="GitHub" />
        <FaFigma title="Figma" />
        <SiAdobephotoshop title="Adobe Photoshop" />
        <SiAdobeillustrator title="Adobe Illustrator" />
        <TbVector title="CorelDRAW" /> 
        <HiOutlineDocumentText title="Adobe InDesign" />
        <PiCubeLight title="Autodesk 3ds Max" />
        <MdDraw title="Autodesk SketchBook" />
      </div>
    </div>
  )
}

export default TechIcons

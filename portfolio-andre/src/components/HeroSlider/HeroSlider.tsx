import { useEffect, useState, useMemo } from 'react';
import styles from './HeroSlider.module.css';
import { projects } from '../../data/projects';

const HeroSlider = () => {
  const images = useMemo(() => {
    const shuffled = [...projects.map((project) => project.image)];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div id="home" className={styles.hero}>
      {images.map((image, index) => (
        <div
          key={index}
          className={`${styles.slide} ${index === currentIndex ? styles.active : ''}`}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      ))}
      <div className={styles.overlay}></div>
    </div>
  );
};

export default HeroSlider;

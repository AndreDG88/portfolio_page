import { useEffect, useState } from 'react';
import styles from './HeroSlider.module.css';
import { projects } from '../../data/projects';

const HeroSlider = () => {
  const images = projects.map((project) => project.image);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // 3 segundos

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

import React, { useState } from 'react';
import styles from '@/styles/ScrollComponent.module.css';

function ScrollComponent() {
  const [isScrolling, setIsScrolling] = useState(false);

  function handleButtonClick() {
    if (!isScrolling) {
      setIsScrolling(true);
      scrollToAboutMe();
    }
  }

  function scrollToAboutMe() {
    const aboutMeSection = document.getElementById('about_me');
    if (aboutMeSection) {
      aboutMeSection.scrollIntoView({ behavior: 'smooth' });
      // Wait for the animation to complete before resetting the scrolling state
      setTimeout(() => {
        setIsScrolling(false);
      }, 1000); // Adjust the timeout to match the animation duration
    }
  }

  return (
    <div className={styles.scroll} onClick={handleButtonClick}>
      <div className={styles.column}>
        <img className={styles.mouse} src="/mouse.svg" alt='scroll_down_mouse' width={40} height={68} />
        <img className={styles.arrow} src="/arrow.svg" alt='scroll_down_arrow' width={30} height={17} />
      </div>
      <div className={styles.scrollText}>
        <div className={styles.ab}>SCROLL</div>
        <div className={styles.ab}>DOWN</div>
      </div>
    </div>
  );
}

export default ScrollComponent;

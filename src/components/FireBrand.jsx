import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function FireBrand() {
  const letterRefs = useRef([]);
  const subTextRef = useRef(null);

  useEffect(() => {
    // Initialize letter refs
    letterRefs.current = letterRefs.current.slice(0, "CAMPOS DE FUEGO".length);

    // Stagger animation for letters
    letterRefs.current.forEach((letter, index) => {
      if (letter) {
        setTimeout(() => {
          letter.style.opacity = "1";
          letter.style.transform = "translateY(0)";
        }, 100 * index);
      }
    });

    // Fade in subtitle
    if (subTextRef.current) {
      setTimeout(() => {
        subTextRef.current.style.opacity = "1";
        subTextRef.current.style.transform = "translateY(0)";
      }, 800);
    }
  }, []);

  return (
    <div className="brand-container">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="brand-content"
      >
        <div className="brand-text-wrapper">
          <div className="brand-main-text">
            {"CAMPOS DE FUEGO".split("").map((letter, index) => (
              <span
                key={index}
                ref={el => letterRefs.current[index] = el}
                className="brand-letter"
              >
                {letter}
              </span>
            ))}
          </div>
          <div className="brand-sub-text" ref={subTextRef}>
            PARRILLA OUTDOOR - SERVICIO DE GASTRONOMÍA
          </div>
        </div>
      </motion.div>
    </div>
  );
}

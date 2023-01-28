import { useState, useEffect } from 'react';
import styles from './ModalConfig.module.css';

function ModalConfig() {
  const [darkMode, setMarkMode] = useState(false);
  useEffect(() => {
    if (document.documentElement.classList.contains('darkMode')) {
      setMarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode === false) {
      document.documentElement.classList.remove('darkMode');
      document.documentElement.classList.add('lightMode');
    } else {
      document.documentElement.classList.remove('lightMode');
      document.documentElement.classList.add('darkMode');
    }
  }, [darkMode]);

  const changeColor = (e) => {
    e.stopPropagation();
    console.log(e);
    console.log(e.target.dataset.color);
    /* console.log(e.target.getAttribute('data-color')); */

    const r = document.querySelector(':root');
    r.style.setProperty('--primaryColor', e.target.dataset.color);
    r.style.setProperty('--primaryDark', e.target.dataset.dark);
  };
  return (
    <div className={styles.config}>
      <h2>Preferencias</h2>

      <h4>Cambia de Modo</h4>
      <div className={styles.switchContainer}>
        <label
          role="presentation"
          className={styles.switchMode}
          htmlFor="checkboxMode"
        >
          <input
            type="checkbox"
            id="checkboxMode"
            checked={darkMode}
            onChange={() => setMarkMode(!darkMode)}
          />
          <div className={styles.slider}>
            <div className={styles.icon}>
              {darkMode ? (
                <i className="fas fa-moon" />
              ) : (
                <i className="fas fa-sun" />
              )}
            </div>
          </div>
        </label>
        <p> {darkMode ? 'Modo Oscuro' : 'Modo Claro'}</p>
      </div>
      <h4>Cambia el color Principal</h4>
      <div className={styles.colorsContainer}>
        <span
          onClick={changeColor}
          role="presentation"
          data-color="#546e7a"
          data-dark="#455a64"
        />
        <span
          onClick={changeColor}
          role="presentation"
          data-color="#00b8d4 "
          data-dark="#00b0ff"
        />
        <span
          onClick={changeColor}
          role="presentation"
          data-color="#f57c00"
          data-dark="#ef6c00"
        />
        <span
          onClick={changeColor}
          role="presentation"
          data-color="#ff014f"
          data-dark="#b40037"
        />
        <span
          onClick={changeColor}
          role="presentation"
          data-color="#66b58f"
          data-dark="#428866"
        />
      </div>
    </div>
  );
}

export default ModalConfig;

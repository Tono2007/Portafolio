import { useState, useEffect } from 'react';
import styles from './ModalConfig.module.css';

function ModalConfig() {
  const [mode, setMode] = useState(false);
  useEffect(() => {
    const r = document.querySelector(':root');
    const rs = getComputedStyle(r);

    rs.getPropertyValue('--backgroundPrimary') === '#212121' && setMode(true);
  }, []);

  const changeColor = (e) => {
    e.stopPropagation();
    console.log(e);
    console.log(e.target.dataset.color);
    /* console.log(e.target.getAttribute('data-color')); */

    const r = document.querySelector(':root');
    r.style.setProperty('--primaryColor', e.target.dataset.color);
    r.style.setProperty('--primaryDark', e.target.dataset.dark);
  };
  const handleMode = (e) => {
    e.stopPropagation();
    const r = document.querySelector(':root');
    if (mode) {
      r.style.setProperty('--backgroundPrimary', '#ecf0f3');
      r.style.setProperty('--backgroundSecondary', '#e2e8ec');
      r.style.setProperty('--contrastBackground', '#fff');
      r.style.setProperty('--backgroundTertiary', '#cbcbcb');
      r.style.setProperty('--backgroundQuaternary', '#f5f5f5');
      r.style.setProperty('--textPrimary', '#3c3e41');
      r.style.setProperty('--textSecondary', '#000');
      r.style.setProperty('--textTertiary', '#878e99');
      r.style.setProperty('--textQuaternary', '#43474b');
    } else {
      /* 
            r.style.setProperty('--backgroundPrimary', '#424242');
            r.style.setProperty('--backgroundSecondary', '#191919');
            r.style.setProperty('--contrastBackground', '#191919');
            r.style.setProperty('--backgroundTertiary', '#3c3e41');
            r.style.setProperty('--backgroundQuaternary', '#3c3e41'); */
      r.style.setProperty('--backgroundPrimary', '#212121');
      r.style.setProperty('--backgroundSecondary', '#424242 ');
      r.style.setProperty('--contrastBackground', '#212121');
      r.style.setProperty('--backgroundTertiary', '#3c3e41');
      r.style.setProperty('--backgroundQuaternary', '#616161');
      r.style.setProperty('--textPrimary', '#eeeeee');
      r.style.setProperty('--textSecondary', '#fff');
      r.style.setProperty('--textTertiary', '#d3d3d3');
      r.style.setProperty('--textQuaternary', '#fff');
    }
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
          onClick={handleMode}
        >
          <input
            type="checkbox"
            id="checkboxMode"
            checked={mode}
            onChange={(e) => setMode(!mode)}
          />
          <div className={styles.slider}>
            <div className={styles.icon}>
              {mode ? (
                <i className="fas fa-moon" />
              ) : (
                <i className="fas fa-sun" />
              )}
            </div>
          </div>
        </label>
        <p> {mode ? 'Modo Oscuro' : 'Modo Claro'}</p>
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

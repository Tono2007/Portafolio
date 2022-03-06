import { useState } from 'react';
import styles from './Contact.module.css';
import { constants } from '../../utils/constants';
import me from '../../assets/me.jpg';

const Contact = () => {
  const [formValues, setFormValues] = useState({});
  return (
    <section className={styles.contact} id="contact">
      <div className={styles.heading}>
        <h4>DATOS DE CONTACTO</h4>
        <h1>¡Trabajemos juntos!</h1>
      </div>
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.box}>
            <div className={styles.img}>
              <img src={me} alt="" />
            </div>
            <div className={styles.details}>
              <h1>Juan Antonio Ayola Cortes</h1>
              <p>
                Estoy disponible en casi todas las redes sociales. Puede
                enviarme un mensaje, le responderé dentro de las 24 horas.
                Siempre puedes contactarme por los siguientes medios.
              </p>
              <br />
              <p>
                Numero:{' '}
                <a
                  href={constants.profilesUrls.whatsapp}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {constants.profilesUrls.number}
                </a>
              </p>
              <p>
                Correo:{' '}
                <a
                  href={`mailto: ${constants.profilesUrls.email}`}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {constants.profilesUrls.email}
                </a>
              </p>
              <br />

              <span> CONTÁCTAME AQUÍ</span>
              <div className={styles.socialContainer}>
                <a
                  href={constants.profilesUrls.facebook}
                  className="btnShadow"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <i className="fa-brands fa-facebook-f" />
                </a>
                <a
                  href={constants.profilesUrls.github}
                  className="btnShadow"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <i className="fa-brands fa-github" />
                </a>
                <a
                  href={constants.profilesUrls.linkedin}
                  className="btnShadow"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <i className="fa-brands fa-linkedin-in" />
                </a>
                <a
                  href={constants.profilesUrls.whatsapp}
                  className="btnShadow"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <i className="fab fa-whatsapp" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.right}>
          <form onSubmit={() => console.log('df')} className={styles.form}>
            <div className={`${styles.input} ${styles.inputRow}`}>
              <span>NOMBRE</span>
              <input type="text" name="nombre" id="2" />
            </div>
            <div className={`${styles.input} ${styles.inputRow}`}>
              <span>NUMERO</span>
              <input type="phone" name="nombre" id="2" />
            </div>
            <div className={styles.input}>
              <span>EMAIL</span>
              <input type="email" name="email" id="2" />
            </div>
            <div className={styles.input}>
              <span>ASUNTO</span>
              <input type="text" name="nombre" id="2" />
            </div>
            <div className={styles.input}>
              <span>MENSAJE</span>
              <textarea type="text" name="nombre" id="2" cols="10" rows="10" />
            </div>
            <button className={styles.submitBtn} type="button">
              ENVIAR MENSAJE <i className="fas fa-long-arrow-right" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

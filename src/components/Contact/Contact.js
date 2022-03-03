import React, { useState } from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  const [formValues, setFormValues] = useState({});
  return (
    <section className={styles.contact} id="contact">
      <div className={styles.heading}>
        <h4>CONTACT</h4>
        <h1>Contact With Me</h1>
      </div>
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.box}>
            <div className={styles.img}>
              <img src="https://picsum.photos/400/250?random=1" alt="" />
            </div>
            <div className={styles.details}>
              <h1>Nevina Acotaze</h1>
              <p>
                I am available for freelancer work. Connect with me via and
                calll in to my accuount. Trabajemos juntos | Contáctame aquí.
              </p>
              <br />
              <p>Phone: +52 43478343</p>
              <p>Email: sdfsdf@sdfsdfsdf.sdf</p>
              <br />

              <span>FIND WITH ME</span>
              <div className={styles.socialContainer}>
                <button className="btnShadow" type="button">
                  <i className="fa-brands fa-facebook-f" />
                </button>
                <button className="btnShadow" type="button">
                  <i className="fa-brands fa-github" />
                </button>
                <button className="btnShadow" type="button">
                  <i className="fa-brands fa-linkedin-in" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.right}>
          <form onSubmit={() => console.log('df')} className={styles.form}>
            <div className={`${styles.input} ${styles.inputRow}`}>
              <span>YOUR NAME</span>
              <input type="text" name="nombre" id="2" />
            </div>
            <div className={`${styles.input} ${styles.inputRow}`}>
              <span>YOUR NUMBER</span>
              <input type="phone" name="nombre" id="2" />
            </div>
            <div className={styles.input}>
              <span>YOUR EMAIL</span>
              <input type="email" name="email" id="2" />
            </div>
            <div className={styles.input}>
              <span>SUBJECT</span>
              <input type="text" name="nombre" id="2" />
            </div>
            <div className={styles.input}>
              <span>YOUR MESSAGE</span>
              <textarea type="text" name="nombre" id="2" cols="10" rows="10" />
            </div>
            <button className={styles.submitBtn} type="button">
              SEND MESSAGE <i className="fas fa-long-arrow-right" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

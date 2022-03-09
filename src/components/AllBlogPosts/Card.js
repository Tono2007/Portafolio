import { useEffect, useState } from 'react';
import styles from './styles.module.css';
import Modal from '../Modal/Modal';
import ModalCard from '../Blog/ModalCard';

function Card({ data }) {
  const [modal, setModal] = useState(false);

  const { id, title, date, banner, tags, author } = data;
  // eslint-disable-next-line import/no-dynamic-require
  const img = require(`../Blog/BlogData/${banner}`);

  return (
    <>
      <Modal
        openModal={modal}
        fnCloseModal={() => setModal(false)}
        style={styles.modalContent}
      >
        <ModalCard data={data} />
      </Modal>
      <div
        className={styles.card}
        onClick={() => setModal(true)}
        role="presentation"
      >
        <div className={styles.img}>
          <img src={img} alt="" />
        </div>
        <div className={styles.info}>
          <div className={styles.title}>
            <h2>{title}</h2>
            {/* <div className={styles.date}>
            <span>{date}</span>
          </div> */}
          </div>
          <p>
            <span className={styles.date}>{date}</span>
            <br />@{author}
          </p>
          <div className={styles.tagsContainer}>
            {tags.map((tag, index) => (
              <span key={index} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
          <span className={styles.arrow}>
            <i className="fas fa-arrow-right" />
          </span>
        </div>
      </div>
    </>
  );
}

export default Card;

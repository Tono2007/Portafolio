import { useState, memo, lazy, Suspense } from 'react';
import Modal from '../Modal/Modal';

import styles from './styles.module.css';

const ModalCard = lazy(() => import('../Blog/ModalCard'));

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
        styleContent={styles.modalContent}
      >
        <Suspense fallback={<p className="loadingLabel">Cargando...</p>}>
          <ModalCard data={data} />
        </Suspense>
      </Modal>
      <div
        className={styles.card}
        onClick={() => setModal(true)}
        role="presentation"
      >
        <div className={styles.img}>
          <img width="300px" height="300px" src={img} alt="" />
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
            {tags.slice(1, 4).map((tag, index) => (
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

export default memo(Card);

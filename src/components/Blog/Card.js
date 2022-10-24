import { useState, memo, lazy, Suspense } from 'react';
import styles from './Blog.module.css';

import Modal from '../Modal/Modal';

const ModalCard = lazy(() => import('./ModalCard'));

const Card = ({ data }) => {
  const [modal, setModal] = useState(false);
  const { id, title, date, banner } = data;
  // eslint-disable-next-line import/no-dynamic-require
  const img = require(`./BlogData/${banner}`);

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
      <article role="presentation">
        <button
          type="button"
          className={styles.card}
          onClick={() => setModal(true)}
          onKeyPress={() => setModal(true)}
          aria-label={`Ver blog ${title}`}
        >
          <div className={styles.img}>
            <img src={img} alt={`Banner ${title}`} />
          </div>
          <div className={styles.date}>
            <span>{date}</span>
          </div>
          <div className={styles.title}>
            <h2>{title}</h2>
            <span className={styles.arrow}>
              <i className="fas fa-arrow-right" />
            </span>
          </div>
        </button>
      </article>
    </>
  );
};

export default memo(Card);

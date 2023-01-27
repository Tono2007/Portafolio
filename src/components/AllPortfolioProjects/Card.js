import { useState, memo, lazy, Suspense } from 'react';
import Modal from '../Modal/Modal';
import Loader from '../Loader';

import styles from './Card.module.css';

const ModalCard = lazy(() => import('../Portfolio/ModalCard'));

const Card = ({ project }) => {
  const { id, category, date, title, image } = project;
  const [modal, setModal] = useState(false);
  // eslint-disable-next-line import/no-dynamic-require
  const img = require(`../../assets/portafolio/${image}`);

  return (
    <>
      <Modal openModal={modal} fnCloseModal={() => setModal(false)}>
        <Suspense fallback={<Loader />}>
          <ModalCard project={project} />
        </Suspense>
      </Modal>
      <article
        className={styles.card}
        onClick={() => setModal(true)}
        onKeyPress={() => setModal(true)}
        role="presentation"
      >
        <div className={styles.category}>
          <span>{category}</span>
        </div>
        <div className={styles.img}>
          <img width="300px" height="300px" src={img} alt="" />
        </div>

        <span className={styles.date}>
          <i className="fas fa-calendar-alt" />•{` ${date}`}
        </span>
        <div>
          <h2>{title}</h2>

          <span className={styles.arrow}>
            <i className="fas fa-arrow-right" />
          </span>
        </div>
      </article>
    </>
  );
};

export default memo(Card);

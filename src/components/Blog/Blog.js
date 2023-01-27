import { useState, useRef, lazy, Suspense } from 'react';
import styles from './Blog.module.css';
import data from './BlogData';

import useIsInViewportOnce from '../../utils/hooks/useIsInViewportOnce';

import Card from './Card';
import Modal from '../Modal/Modal';
import Loader from '../Loader';

const AllBlogPosts = lazy(() => import('../AllBlogPosts'));

const Blog = () => {
  const sectionRef = useRef();
  const isInViewportOnce = useIsInViewportOnce(sectionRef);
  const [modal, setModal] = useState(false);

  return (
    <>
      <Modal
        openModal={modal}
        fnCloseModal={() => setModal(false)}
        styleContent={styles.modalContentAB}
      >
        <Suspense fallback={<Loader />}>
          <AllBlogPosts />
        </Suspense>
      </Modal>
      <section className={styles.blog} id="blog" ref={sectionRef}>
        <div className="container">
          <div
            className={`${styles.heading} ${
              isInViewportOnce ? 'useSlideInLeft' : 'useSlideInLeftEnter'
            }`}
          >
            <h4>VISITA MI BLOG Y DAME FEEDBACK</h4>
            <h1>Mi Blog</h1>
          </div>
          <button
            type="button"
            className={styles.seeAllBtn}
            onClick={() => setModal(true)}
          >
            VER TODAS LAS PUBLICACIONES
          </button>
          <div className={styles.contentGrid}>
            {/* {data.slice(0, 3).map((post) => (
            <Card key={post.id} data={post} />
          ))} */}
            {data.slice(0, 3).map((post) => (
              <Card key={post.id} data={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;

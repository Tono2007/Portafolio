import { useState } from 'react';
import styles from './Blog.module.css';
import data from './BlogData';

import Card from './Card';
import Modal from '../Modal/Modal';
import AllBlogPosts from '../AllBlogPosts';

const Blog = () => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <Modal
        openModal={modal}
        fnCloseModal={() => setModal(false)}
        styleContent={styles.modalContentAB}
      >
        <AllBlogPosts />
      </Modal>
      <section className={styles.blog} id="blog">
        <div className="container">
          <div className={styles.heading}>
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
            {data.slice(1, 4).map((post) => (
              <Card key={post.id} data={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;

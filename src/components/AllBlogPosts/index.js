import { useEffect, useState } from 'react';
import data from '../Blog/BlogData';
import styles from './styles.module.css';
import Card from './Card';

function Index() {
  const [modal, setModal] = useState(false);

  const [post, setPost] = useState('');

  return (
    <section className={styles.allBlog}>
      <div className="container">
        <div className={styles.heading}>
          <h4>VISITA MI BLOG Y DAME FEEDBACK</h4>
          <h1>Mi Blog</h1>
        </div>
        <div className={styles.contentGrid}>
          {/* {data.slice(0, 3).map((post) => (
      <Card key={post.id} data={post} />
    ))} */}
          {data.slice(0, 4).map((post) => (
            <Card key={post.id} data={post} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Index;

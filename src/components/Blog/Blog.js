import Card from './Card';
import styles from './Blog.module.css';
import data from './BlogData';

const Blog = () => {
  return (
    <section className={styles.blog} id="blog">
      <div className="container">
        <div className={styles.heading}>
          <h4>VISITA MI BLOG Y DAME FEEDBACK</h4>
          <h1>Mi Blog</h1>
        </div>
        <div className={styles.contentGrid}>
          {/* {data.slice(0, 3).map((post) => (
            <Card key={post.id} data={post} />
          ))} */}
          {data.map((post) => (
            <Card key={post.id} data={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;

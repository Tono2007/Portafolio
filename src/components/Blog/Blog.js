import Card from './Card';
import styles from './Blog.module.css';

const Blog = () => {
  const data = [0, 1, 2, 3, 4, 5, 6];
  return (
    <section className={styles.blog} id="blog">
      <div className="container">
        <div className={styles.heading}>
          <h4>VISIT MY BLOG AND KEEP YOUR FEEDBACK</h4>
          <h1>My Blog</h1>
        </div>
        <div className={styles.contentGrid}>
          {data.map((value) => (
            <Card key={value} id={value} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;

import React from 'react';
import './Blog.css';
import Card from './Card';

const Blog = () => {
  const data = [0, 1, 2, 3, 4, 5, 6];
  return (
    <section className="portfolio blog" id="blog">
      <div className="container">
        <div className="heading text-center">
          <h4>VISIT MY BLOG AND KEEP YOUR FEEDBACK</h4>
          <h1>My Blog</h1>
        </div>
        <div className="content grid">
          {data.map((value) => (
            <Card key={value} id={value} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;

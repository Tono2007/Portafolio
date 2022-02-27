import React from 'react';
import './Portfolio.css';
import Card from './Card';
import PortfolioData from './PortfolioData';

const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <div className="heading text-center">
          <h4>VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</h4>
          <h1>My Portfolio</h1>
        </div>
        <div className="content grid">
          {PortfolioData.map((project, index) => (
            <Card key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

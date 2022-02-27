import React from 'react';
import Card from './Card';
import ResumeData from './ResumeData';
import './Resume.css';

const Resume = () => {
  return (
    <section className="resume" id="resume">
      <div className="container top">
        <div className="heading text-center">
          <h4>7+ YEARS OF EXPERIENCE</h4>
          <h1>My Resume</h1>
        </div>
        <div className="content-section mtop d_flex">
          <div className="left">
            <div className="heading">
              <h4>2007-2010</h4>
              <h1>Education Quality</h1>
            </div>
            <div className="content">
              {ResumeData.map((value, index) => {
                if (value.category === 'education') {
                  return <Card key={index} data={value} />;
                }
                return <Card key={index} data={value} />;
              })}
            </div>
          </div>
          <div className="left">
            <div className="heading">
              <h4>2007-2010</h4>
              <h1>Job Experience</h1>
            </div>
            <div className="content">
              {ResumeData.map((value, index) => {
                if (value.category === 'education') {
                  return <Card key={index} data={value} />;
                }
                return <Card key={index} data={value} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;

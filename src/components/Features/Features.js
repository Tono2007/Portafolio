import React from "react";
import Card from "./Card";
import "./Features.css";
import data from "./FeaturesData";

const Features = () => {
  return (
    <>
      <section className="features top" id="features">
        <div className="container">
          <div className="heading">
            <h4>Features</h4>
            <h1>What I Do</h1>
          </div>
          <div className="content grid">
            {data.map((feature, index) => (
              <Card
                key={index}
                image={feature.image}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;

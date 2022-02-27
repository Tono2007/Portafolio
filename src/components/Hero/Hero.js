import { Typewriter } from 'react-simple-typewriter';
import './Hero.css';
import hero from '../../assets/hero8.svg';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container f_flex top">
        <div className="left top">
          <h3> WELCOME TO MY WORLD</h3>
          <h1>
            Hi, I&#39;m <span>Antonio Ayola</span>
          </h1>

          <h2>
            a
            <span>
              <Typewriter
                words={[' Profesional Coder', ' Developer']}
                loop={5}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            ducimus facilis voluptatum quis quisquam possimus cupiditate ab iste
            aut fugit! Officiis fugiat quo distinctio error ea accusantium,
            placeat dignissimos fuga.
          </p>
          <div className="hero_btn d_flex">
            <div className="col_1">
              <h4>FIND ME WITH</h4>
              <div className="button">
                <button className="btn_shadow" type="button">
                  <i className="fa-brands fa-facebook-f" />
                </button>
                <button className="btn_shadow" type="button">
                  <i className="fa-brands fa-github" />
                </button>
                <button className="btn_shadow" type="button">
                  <i className="fa-brands fa-linkedin-in" />
                </button>
              </div>
            </div>
            <div className="col_1">
              <h4>BEST SKILL ON</h4>
              <button className="btn_shadow skillBtn" type="button">
                <img
                  className="skillImg"
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                  alt="react"
                />
              </button>
              <button className="btn_shadow skillBtn" type="button">
                <img
                  className="skillImg"
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                  alt="NodeJs"
                />
              </button>
              <button className="btn_shadow skillBtn" type="button">
                <img
                  className="skillImg"
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                  alt="Js"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="right_img">
            <img src={hero} alt="hero" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

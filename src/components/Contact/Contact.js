import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formValues, setFormValues] = useState({});
  return (
    <div>
      <section className="contact" id="contact">
        <div className="container top">
          <div className="heading text-center">
            <h4>CONTACT</h4>
            <h1>Contact With Me</h1>
          </div>
          <div className="content d_flex">
            <div className="left">
              <div className="box box_shadow">
                <div className="img">
                  <img src="https://picsum.photos/400/250?random=1" alt="" />
                </div>
                <div className="details">
                  <h1>Nevina Acotaze</h1>
                  <p>
                    I am available for freelancer work. Connect with me via and
                    calll in to my accuount.
                  </p>
                  <br />
                  <p>Phone: +52 43478343</p>
                  <p>Email: sdfsdf@sdfsdfsdf.sdf</p>
                  <span>FIND WITH ME</span>
                  <div className="button f_flex">
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
              </div>
            </div>

            <div className="right box_shadow">
              <form onSubmit={console.log('df')}>
                <div className="f_flex">
                  <div className="input row">
                    <span>YOUR NAME</span>
                    <input type="text" name="nombre" id="2" />
                  </div>
                  <div className="input row">
                    <span>YOUR NUMBER</span>
                    <input type="phone" name="nombre" id="2" />
                  </div>
                  <div className="input ">
                    <span>YOUR EMAIL</span>
                    <input type="email" name="email" id="2" />
                  </div>
                  <div className="input ">
                    <span>SUBJECT</span>
                    <input type="text" name="nombre" id="2" />
                  </div>
                  <div className="input ">
                    <span>YOUR MESSAGE</span>
                    <textarea
                      type="text"
                      name="nombre"
                      id="2"
                      cols="10"
                      rows="10"
                    />
                  </div>
                  <button className="btn_shadow submitBtn" type="button">
                    SEND MESSAGE
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

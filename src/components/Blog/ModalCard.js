/* eslint-disable import/no-dynamic-require */
import { useEffect, useState } from 'react';
import styles from './ModalCard.module.css';
import ReactMarkdown from 'react-markdown';

function ModalCard({ data }) {
  const { id, title, date, banner, md, author } = data;
  const [post, setPost] = useState('');

  //console.log(md);
  const img = require(`./BlogData/${banner}`);

  useEffect(() => {
    import(`./BlogData/${md}`)
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((res) => setPost(res))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={styles.modalContainer}>
      <h1>
        {id}.-{`   ${title}`}
      </h1>

      <div className={styles.modalImg}>
        <img src={img} alt="" />
      </div>
      <div className={styles.modalText}>
        <span>Publicado el {date}</span> por Antonio Ayola
        <ReactMarkdown>{post}</ReactMarkdown>
        <h1>{title}</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem ut
          deserunt repellat modi explicabo omnis officia, reprehenderit
          deleniti, fugiat quasi mollitia nesciunt velit est, consequatur amet
          eius vero voluptatum commodi! Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Ratione nobis optio, dolor ea molestias ullam sequi
          omnis libero
        </p>
        <h1>Titulo1</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Exercitationem animi ut porro voluptate facere tenetur eum quas
          cupiditate saepe est quis placeat similique modi natus nulla, quia
          autem rem ab.
        </p>
        <h1>Titulo3</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores
          adipisci tempora sunt sit neque, est sint facilis illo, quidem harum
          assumenda exercitationem totam eum voluptates veniam a excepturi nulla
          fugiat! Si llegaste hasta aquí... Gracias por leer &lt;3
        </p>
        {/* <div className="contact mtop">
          <h1>Leave a Reply</h1>
          <form action="" className="blog_contact d_flex">
            <div className="left">
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Email" />
              <input type="text" placeholder="Website" />
              <button type="submit" className="btn_shadow">
                SUBMIT NOW
              </button>
            </div>
            <div className="right">
              <textarea cols="30" rows="20" placeholder="Comment" />
            </div>
          </form>
        </div> */}
      </div>
    </div>
  );
}

export default ModalCard;

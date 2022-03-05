import styles from './ModalCard.module.css';

function ModalCard() {
  return (
    <div className={styles.modalContainer}>
      <div className={styles.modalImg}>
        <img src="https://picsum.photos/900/500?random=1" alt="" />
      </div>
      <div className={styles.modalText}>
        <span>17 de Septiembre, 2022</span>
        <h1>Digital Marketing for developers</h1>
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

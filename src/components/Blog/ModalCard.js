/* eslint-disable import/no-dynamic-require */
import { useEffect, useState } from 'react';
import styles from './ModalCard.module.css';
import me from '../../assets/me.jpg';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

function ModalCard({ data }) {
  const { id, title, date, banner, md, author, tags } = data;
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
      <div className={styles.tagsContainer}>
        <p>Tags-&gt;</p>

        {tags.map((tag, index) => (
          <span key={index}>{tag}</span>
        ))}
      </div>

      <div className={styles.modalImg}>
        <img src={img} alt="" />
      </div>
      <div className={styles.header}>
        <div className={styles.avatar}>
          <img src={me} alt="" />
          <p>• {author} •</p>
        </div>
        <span>Publicado el {date}</span>
      </div>
      <hr />
      <div className={styles.modalText}>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            // eslint-disable-next-line react/no-unstable-nested-components
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '');
              return !inline && match ? (
                <>
                  <SyntaxHighlighter
                    showLineNumbers
                    // eslint-disable-next-line react/no-children-prop
                    children={String(children).replace(/\n$/, '')}
                    style={coldarkDark}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  />
                  <div>boton para copiar proximamente</div>
                </>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
        >
          {post}
        </ReactMarkdown>

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

import styles from './styles.module.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

export function Link({ node, children, ...props }) {
  const linkProps = props;
  let icon = 'fas fa-link';
  if (props.href.startsWith('http')) {
    linkProps.rel = 'nofollow noopener noreferrer';
    linkProps.target = '_blank';
    icon = 'fas fa-external-link';
  }

  return (
    <a {...linkProps} className={styles.link}>
      {children} <i className={icon} />
    </a>
  );
}

export function Code({ node, inline, className, children, ...props }) {
  const match = /language-(\w+)/.exec(className || '');
  return !inline && match ? (
    <>
      <div className={styles.codeActions}>
        <span> {match[1]}</span>
        <button
          type="button"
          className={styles.copyBtn}
          onClick={() => {
            navigator.clipboard.writeText(String(children).replace(/\n$/, ''));
            alert('Text copiado');
          }}
        >
          Copiar <i className="fas fa-link" />
        </button>
      </div>
      <SyntaxHighlighter
        showLineNumbers
        // eslint-disable-next-line react/no-children-prop
        children={String(children).replace(/\n$/, '')}
        style={prism}
        language={match[1]}
        PreTag="div"
        {...props}
        className={styles.highlighter}
      />
    </>
  ) : (
    <code className={className} {...props}>
      {children}
    </code>
  );
}

export default Link;

import P from 'prop-types';
import './styles.css';

// Coletando as props atraves do destructuring
export const PostCard = ({ id, title, body, cover }) => {
  return (
    <div className="post-card">
      <img src={cover} alt={title}></img>
      <div className="post-content">
        <h2>
          {title} {id}
        </h2>
        <p>{body}</p>
      </div>
    </div>
  );
};

PostCard.propTypes = {
  id: P.number.isRequired,
  title: P.string.isRequired,
  body: P.string.isRequired,
  cover: P.string.isRequired,
};

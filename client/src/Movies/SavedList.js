import React from 'react';
import { Link } from 'react-router-dom';

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
        <Link exact to={`/movies/${movie.id}`}>
        <div className="saved-movie">
          <span>{movie.title}</span>
        </div>
      </Link>
    ))}
    <Link to="/">
      <div className="home-button">Home</div>
    </Link>
  </div>
);

export default SavedList;

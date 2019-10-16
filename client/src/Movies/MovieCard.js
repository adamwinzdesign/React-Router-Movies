import React from 'react';

const MovieCard = props => {
  const { title, director, metascore, stars } = props.movie;

  return (
    <div className="movie-card">
      <h2>{title}</h2>
      <div className="movie-metascore">
        Metascore: {metascore}
      </div>
      <div className="movie-director">
        Director: {director}
      </div>
      <div><h2>Actors:</h2></div>
      {stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
    </div>
  );
};

export default MovieCard;

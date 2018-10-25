import React, { Component } from 'react';
import './../index.css';

class MovieItem extends Component {
  render() {
    const { movie, toggleIsInMyList } = this.props;
    const imgURL = 'https://image.tmdb.org/t/p/w300/';
    return (
      <div className="movie-element">
        <li key="movie.id">
          <img
            src={imgURL + movie.backdrop_path}
            onClick={() => toggleIsInMyList(movie.id)}
            alt="movie-img"
          />
          <span className="movie-title">{movie.title}</span>
        </li>
      </div>
    );
  }
}

export default MovieItem;

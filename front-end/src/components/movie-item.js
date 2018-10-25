import React, { Component } from 'react';
import './../index.css';

class MovieItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { movie } = this.props;
    const imgURL = 'https://image.tmdb.org/t/p/w300/';
    return (
      <li key="movie.id">
        <span>{this.props.movie.title}</span>
        <img src={imgURL + movie.backdrop_path} alt="movie-img" />
      </li>
    );
  }
}

export default MovieItem;

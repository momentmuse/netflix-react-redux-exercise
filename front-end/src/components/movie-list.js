import React, { Component } from 'react';
import { connect } from 'react-redux';

import './../index.css';
import {
  populateMovieList,
  toggleIsInMyList
} from '../store/actions/index.actions';
import MovieItem from './movie-item';

class MovieList extends Component {
  componentDidMount() {
    fetch('https://movied.herokuapp.com/discover')
      .then(res => res.json())
      .then(movies => this.props.populateMovieList('discoverList', movies));
  }

  renderMovieList = arr => {
    return arr.map(movie => (
      <MovieItem movie={movie} toggleIsInMyList={this.props.toggleIsInMyList} />
    ));
  };

  renderMoviesfromID = (idList, movieList) => {
    const filteredList = movieList.filter(movie => idList.includes(movie.id));
    return this.renderMovieList(filteredList);
  };

  render() {
    const { myListIDs, discoverList } = this.props;
    return (
      <React.Fragment>
        <h1>My List</h1>
        <div className="my-list-container">
          <ul className="my-list">
            {myListIDs.length > 0 ? (
              this.renderMoviesfromID(myListIDs, discoverList)
            ) : (
              <p>You haven't saved any movies!</p>
            )}
          </ul>
        </div>
        <h1>Discover List</h1>
        <div className="discover-list-container">
          <ul className="discover-list">
            {discoverList.length > 0 ? (
              this.renderMovieList(discoverList)
            ) : (
              <p>Loading Movie List</p>
            )}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  myListIDs: state.myListIDs,
  discoverList: state.discoverList
});

const mapDispatchToProps = dispatch => ({
  populateMovieList: (list, arr) => dispatch(populateMovieList(list, arr)),
  toggleIsInMyList: id => dispatch(toggleIsInMyList(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieList);

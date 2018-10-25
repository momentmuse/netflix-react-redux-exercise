import React, { Component } from 'react';
import { connect } from 'react-redux';

import './../index.css';
import {
  populateMovieList,
  toggleIsInMyList
} from '../store/actions/index.actions';
import MovieItem from './movie-item';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    fetch('https://movied.herokuapp.com/discover')
      .then(res => res.json())
      .then(movies => this.props.populateMovieList('discoverList', movies));
  }

  renderMovieList = arr => {
    return arr.map(movie => <MovieItem movie={movie} />);
  };

  renderMovieListfromID = arr => {};

  render() {
    return (
      <React.Fragment>
        <div className="my-list-container">
          <h1>my-list works!</h1>
          <ul className="my-list">
            {this.props.myListIDs.length > 0 ? (
              this.renderMovieListfromID(this.props.myListIDs)
            ) : (
              <p>You haven't saved any movies!</p>
            )}
          </ul>
        </div>
        <div className="discover-list-container">
          <h1>discover-list works!</h1>
          <ul className="discover-list">
            {this.props.discoverList.length > 0 ? (
              this.renderMovieList(this.props.discoverList)
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
  toggleIsInMyList: movie => dispatch(toggleIsInMyList(movie))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieList);

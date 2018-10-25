import React, { Component } from 'react';
import { connect } from 'react-redux';
import './../index.css';
import { addMovie, removeMovie } from '../store/actions/index.actions';

class MyList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <h1>my list works!</h1>;
  }
}

const mapStateToProps = state => ({
  myList: state.myList.myMovies
});

const mapDispatchToProps = dispatch => ({
  addMovie: movie => dispatch(addMovie(movie)),
  removeMovie: id => dispatch(removeMovie(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyList);

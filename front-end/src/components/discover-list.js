import React, { Component } from 'react';
import { connect } from 'react-redux';

import './../index.css';
import { getDiscoverMovies } from '../store/actions/index.actions';

class DiscoverList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    fetch('https://movied.herokuapp.com/discover')
      .then(res => res.json())
      .then(movies => this.props.getDiscoverMovies(movies));
  }

  renderDiscoverList = arr => {
    return arr.map(movie => {
      return <li>{movie.title}</li>;
    });
  };

  render() {
    return (
      <div class="discover-list-container">
        <h1>discover-list works!</h1>
        <ul class="discover-list">
          {this.renderDiscoverList(this.props.discoverList)}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  discoverList: state.discoverList.discoverMovies
});

const mapDispatchToProps = dispatch => ({
  getDiscoverMovies: arr => dispatch(getDiscoverMovies(arr))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DiscoverList);

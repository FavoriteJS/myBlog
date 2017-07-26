import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchIssuesIfNeeded } from '../actions/index.js';
import CellView from '../components/CellView.js';

class All extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchIssuesIfNeeded());
  }

  render() {
    if (this.props.isFetching) {
      return null;
    }
    console.log(this.props)
    
    return (
      <div className="list">
        <CellView title="全部" items={this.props.items} />
      </div>
    );
  }
};

function mapStateToProps(state) {
  const {
    isFetching,
    items
  } = state || {
    isFetching: true,
    items: []
  };

  return {
    isFetching,
    items
  }
}

export default connect(mapStateToProps)(All);

import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class BookDetail extends Component {
  render() {
    if (!this.props.book) {
      return <div>please select a book</div>
    }

    return (
      <div>
        <h3>Detail for:</h3>
        <div>
          <div>Title: {this.props.book.title}</div>
          <div>Pages: {this.props.book.pages}</div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);

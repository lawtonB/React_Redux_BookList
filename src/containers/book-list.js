import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
        key={book.title}
        onClick={() => this.props.selectBook(book)}
        className='list-group-item'>
        {book.title}

        </li>
      );
    });
  }

  render() {
  return (
    <ul className='list-group col-sm-4'>
      {this.renderList()}
    </ul>
    )
  }
}

function mapStateToProps(state) {
  //object returned from here will show up as props inside bookList
  return {
    books: state.books
  };
}

//anything returned from mapDispatchToProps will end up as props on bookList container eg this.props.selectBook
function mapDispatchToProps(dispatch) {
  //when selectBook is called result is passed to reducers via bindActionCreators
    return bindActionCreators({
      selectBook: selectBook
    }, dispatch);
}

//connect takes a function and a component and produces(promotes) a component to a container. mapDispatchToProps makes it available as a prop
export default connect (mapStateToProps, mapDispatchToProps)(BookList);

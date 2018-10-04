import React, { Component } from 'react';
import Book from './Book';

class Shelf extends Component {
  shelfWasChanged = (event, book) => {
    const newShelf = event.target.value;
    this.props.changeShelf(book, newShelf);
  }

  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.map(targetBook=>(
              <Book key={ targetBook.id } book={ targetBook } changeShelf={ this.props.changeShelf }/>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default Shelf;

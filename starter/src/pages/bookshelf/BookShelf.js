import {Link} from "react-router-dom";
import BookCard from "../../componants/book/BookCard";
import PropTypes from "prop-types";

const BookShelf = ({currentReadingBooksList, wantToReadBooksList, readBooksList, OnBookShelfUpdated}) => {

    return(
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {
                        currentReadingBooksList.map((book) => <li key={book.id} > <BookCard OnBookShelfUpdated={OnBookShelfUpdated} book={book} /> </li>)
                    }
                  </ol>
                </div>
              </div>

              <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {
                        wantToReadBooksList.map((book) => <li key={book.id} > <BookCard OnBookShelfUpdated={OnBookShelfUpdated} book={book} /> </li>)
                    }
                  </ol>
                </div>
              </div>

              <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {
                        readBooksList.map((book) => <li key={book.id} > <BookCard OnBookShelfUpdated={OnBookShelfUpdated} book={book} /> </li>)
                    }
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div className="open-search">
            <Link to="/search">Add a book</Link>
          </div>
        </div>
    )
}

BookShelf.propTypes = {
    currentReadingBooksList: PropTypes.array.isRequired,
    wantToReadBooksList: PropTypes.array.isRequired,
    readBooksList: PropTypes.array.isRequired,
    OnBookShelfUpdated: PropTypes.func.isRequired
}
export default BookShelf
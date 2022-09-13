import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import BookShelfComponent from "../../componants/book-shelf/BookShelfComponent";

const BookShelf = ({currentReadingBooksList, wantToReadBooksList, readBooksList, OnBookShelfUpdated}) => {

    return(
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    <BookShelfComponent shelfName="Currently Reading" BookShelfList={currentReadingBooksList} OnBookShelfUpdated={OnBookShelfUpdated}/>
                    <BookShelfComponent shelfName="Want to Read" BookShelfList={wantToReadBooksList} OnBookShelfUpdated={OnBookShelfUpdated}/>
                    <BookShelfComponent shelfName="Read" BookShelfList={readBooksList} OnBookShelfUpdated={OnBookShelfUpdated}/>
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
import BookCard from "../book/BookCard";
import * as PropTypes from "prop-types";


const BookShelfComponent = ({shelfName, BookShelfList, OnBookShelfUpdated}) => {
    return(
        <div className="bookshelf">
            <h2 className="bookshelf-title">{shelfName}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {
                        BookShelfList.map((book) =>
                            <li key={book.id} > <BookCard OnBookShelfUpdated={OnBookShelfUpdated} book={book} /> </li>
                        )
                    }
                </ol>
            </div>
        </div>
    )
}

BookShelfComponent.propTypes = {
    shelfName: PropTypes.string.isRequired,
    BookShelfList: PropTypes.array.isRequired,
    OnBookShelfUpdated: PropTypes.func.isRequired
}
export default BookShelfComponent
import {Link} from "react-router-dom";
import BookCard from "../../componants/book/BookCard";
import PropTypes from "prop-types";

const SearchPage = ({ApplySearch, SearchResult, SearchQuery, OnBookShelfUpdated}) => {

    return(
        <div className="search-books">
            <div className="search-books-bar">
            <Link to="/" className="close-search">Close</Link>
                <div className="search-books-input-wrapper">
                    <input
                        type="text"
                        placeholder="Search by title, author, or ISBN"
                        onChange={event => ApplySearch(event.target.value)}
                />
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    {
                        SearchQuery !== "" ?
                            SearchQuery !== "" && SearchResult.length === 0
                                ? <h5> <q> {SearchQuery} </q>  Not Found </h5>
                                : SearchResult.map((book) => <li key={book.id} > <BookCard OnBookShelfUpdated={OnBookShelfUpdated} book={book} /> </li>)
                            : ""
                    }
                </ol>
            </div>
        </div>
    )
};

SearchPage.propTypes = {
    ApplySearch: PropTypes.func.isRequired,
    SearchResult: PropTypes.array.isRequired,
    SearchQuery: PropTypes.string,
    OnBookShelfUpdated: PropTypes.func.isRequired
}

export default SearchPage
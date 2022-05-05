import {useState} from "react";
import PropTypes from "prop-types";

const BookCard = ({book, OnBookShelfUpdated}) =>{

    const [bookShelf, setBookShelf] = useState(book.shelf);

     /**
    * @description Function To Apply Change Shelf On Book By Get Selected Shelf
    * @param event - event object
    * @return {VoidFunction}
    */
    const handelSelection = (event) =>{
        const shelf = event.target.value;

        if(shelf !== book.shelf){
            OnBookShelfUpdated(book, shelf);
            setBookShelf(shelf);
        }
    };

    return(
          <div className="book">
              <div className="book-top">
                  <div
                      className="book-cover"
                      style={{width: 128, height: 193, backgroundImage: book.imageLinks ? `url("${book.imageLinks.smallThumbnail}")` : `url()`,}
                  }
                  />
                  <div className="book-shelf-changer">
                      <select value={book.shelf ? bookShelf : "none"} onChange={handelSelection}>
                          <option disabled>
                              Move to...
                          </option>
                          <option value="currentlyReading">
                            Currently Reading
                          </option>
                          <option value="wantToRead">Want to Read</option>
                          <option value="read">Read</option>
                          <option value="none">None</option>
                      </select>
                  </div>
              </div>
              <div className="book-title">{book.title}</div>
              <div className="book-authors">{book.authors}</div>
          </div>
    )
}

BookCard.propTypes ={
    book : PropTypes.object.isRequired,
    OnBookShelfUpdated: PropTypes.func.isRequired
}

export default BookCard
import "./css/App.css";
import {useEffect, useState} from "react";
import * as BooksAPI from "./utils/BooksAPI";
import BookShelf from "./pages/bookshelf/BookShelf";
import {Route, Routes} from "react-router-dom";
import SearchPage from "./pages/search/SearchPage";
import * as BooksAPi from "./utils/BooksAPI";

function App() {
    // shelf state section
    const [allBooks, setAllBooks] = useState([]);
    const [currentReadingBooksList, setCurrentReadingBooksList] = useState([]);
    const [wantToReadBooksList, setWantToReadBooksList] = useState([]);
    const [readBooksList, setReadBooksList] = useState([]);

    // search state section
    const [searchBooksLisResult, setSearchBooksLisResult] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");


    /**
    * @description Function To Update Section State With Passed Array Of Respond Data
    * @param {Array} response - Array Of Response Data
    * @return {VoidFunction}
    */
    const updateSectionState = (response) => {
        setAllBooks(response);
        setCurrentReadingBooksList(response.filter((book) => book.shelf === "currentlyReading"));
        setWantToReadBooksList(response.filter((book) => book.shelf === "wantToRead"));
        setReadBooksList(response.filter((book) => book.shelf === "read"));
    }

    /**
    * @description Async Function To Call The API To Get All The Books
    * @return {Promise<any>}
    */
    const getAllBooks = async () => {
        return await BooksAPI.getAll();
    };

    /**
    * @description Function To Update Book Data And Update Section State
    * @param {Object} book - Book To Update
    * @param {string} selectedShelf - New Shelf Name
    * @return {VoidFunction}
    */
    const handelShelfSelection = (book, selectedShelf) =>{
        /**
        * @description Async Function To Update Book Data By Calling The API
        * @param {Object} book - Book To Update
        * @param {string} selectedShelf - New Shelf Name
        * @return {Promise<any>}
        */
        const updateBookData = async (book, selectedShelf) =>{
            return await BooksAPi.update(book, selectedShelf);
        };

        updateBookData(book, selectedShelf).then(() => {
            getAllBooks().then((response => updateSectionState(response)));
        });
    };


    useEffect(() => {
        getAllBooks().then(response => updateSectionState(response));
    },[]);

    /**
    * @description Function To Apply Search Action And Change 'SearchQuery' State
    * @param {string} query - Query To Search
    * @return {VoidFunction}
    */
    const applySearchQuery = (query) => {
        setSearchQuery(query.trim());
        handleSearchAction(query.trim());
    }

    /**
    * @description Function To Apply Search Action And Change 'SearchQuery' State
    * @param {string} query - Query To Search
    * @return {VoidFunction}
    */
    const handleSearchAction =  (query) => {
        /**
        * @description Function To Apply Search Action And Change 'SearchQuery' State
        * @return {Promise<void>}
        */
        const getSearchResult = async () => {
            const response = await BooksAPi.search(query, 10);

            response && !response.error ? setSearchBooksLisResult(response.map((searchBook) => {
                allBooks.forEach((book) => searchBook.id === book.id ? searchBook.shelf = book.shelf : null)
                return searchBook;
            })) : setSearchBooksLisResult([]);
        };

        // if query is get empty change SearchBookListResult state to empty array
        if(query !== "") getSearchResult().then();
        else setSearchBooksLisResult([]);
    }


    return (
    <div className="app">
        <Routes>
            <Route
                exact
                path="/"
                element={<BookShelf
                    currentReadingBooksList={currentReadingBooksList}
                    readBooksList={readBooksList}
                    wantToReadBooksList={wantToReadBooksList}
                    OnBookShelfUpdated={handelShelfSelection}
                />
            }
            />
            <Route
                exact
                path="/search"
                element={<SearchPage
                    ApplySearch={applySearchQuery}
                    SearchResult={searchBooksLisResult}
                    SearchQuery={searchQuery}
                    OnBookShelfUpdated={handelShelfSelection}
                />}
            />
        </Routes>
    </div>
    );
}

export default App;

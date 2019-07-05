const addBook = (data) => dispatch => {
    dispatch({
        type: 'ADD_BOOK',
        payload: data
    })
}

const deleteBook = (data) => dispatch => {
    dispatch({
        type: 'DELETE_BOOK',
        payload: data
    })
}

const editBook = (data) => dispatch => {
    dispatch({
        type: 'EDIT_BOOK',
        payload: data
    })
}


export const addNewBook = (newBookData) => (dispatch,getstate) => {
    const state = getstate();
    const updatedBookList = state.bookListReducer.bookList.concat(newBookData);
    dispatch(addBook(updatedBookList));
}

export const deleteExistingBook = (selectedBook) => (dispatch,getstate) => {
    const state = getstate();
    const updatedBookList = state.bookListReducer.bookList.filter((book)=>{
        return book.bookId !== selectedBook.bookId;
    });
    dispatch(deleteBook(updatedBookList));
}

export const editExistingBook = (selectedBook) => (dispatch,getstate) => {
    const state = getstate();
    const updatedBookList = state.bookListReducer.bookList.map((book)=>{
        if(book.bookId === selectedBook.bookId){
            return book = selectedBook;
        }
        return book;
    });
    dispatch(editBook(updatedBookList));
}

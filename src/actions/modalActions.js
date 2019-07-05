const showModal = () => dispatch => {
    dispatch({
        type: 'OPEN_MODAL'
    })
}

const hideModal = () => dispatch => {
    dispatch({
        type: 'CLOSE_MODAL'
    })
}
const cuurentBookData = (data) => dispatch => {
    dispatch({
        type: 'SELECTED_BOOK',
        payload: data
    })
}

export const openModal = () => (dispatch) => {
    dispatch(showModal());
}

export const closeModal = () => (dispatch) => {
    dispatch(hideModal());
}

export const currentBook = (data) => (dispatch) => {
    dispatch(cuurentBookData(data));
}
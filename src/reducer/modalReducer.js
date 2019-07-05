
const initialState = {
  "status": false,
  "currentBook": {
    "title": "",
    "author": "",
    "desc": "",
    "bookId": ""
  },
  editMode:false
};
export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'OPEN_MODAL':
      state = {
        ...state,
        status: true
      };
      return state;
    case 'CLOSE_MODAL':
      state = {
        ...state,
        status: false
      };
      return state;
    case 'SELECTED_BOOK':
      state = {
        ...state,
        currentBook: action.payload.currentBook,
        editMode: action.payload.editMode
      };
      return state;
    default:
      return state
  }
}
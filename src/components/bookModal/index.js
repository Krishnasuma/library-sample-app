import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { openModal,closeModal,currentBook } from '../../actions/modalActions';
import { addNewBook,editExistingBook } from '../../actions/bookActions';
import BookModal from './bookModal';

const mapStateToProps = (state) => {    
    return{
        modalState: state.modalReducer.status,
        currentBook: state.modalReducer.currentBook,
        editMode: state.modalReducer.editMode
    };
};

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(
            {
                openModal,
                closeModal,
                currentBook,
                addNewBook,
                editExistingBook
            },
            dispatch
        ),
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(BookModal);
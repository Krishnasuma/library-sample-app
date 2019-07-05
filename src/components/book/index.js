import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteExistingBook, editExistingBook } from '../../actions/bookActions';
import {openModal,currentBook} from '../../actions/modalActions'
import BookCard from './book';

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(
            {  
                deleteExistingBook,
                editExistingBook,
                currentBook,
                openModal
            },
            dispatch
        ),
    };
};
export default connect(null,mapDispatchToProps)(BookCard);
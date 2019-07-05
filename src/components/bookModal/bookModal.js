import React from 'react';
import './bookModal.css';

class BookModal extends React.Component {
    closeModal = () => {
        this.props.actions.closeModal();
    }
    formSubmit = (event) => {
        event.preventDefault();
        const title = document.getElementById("bookTitle").value;
        const author = document.getElementById("authName").value;
        const desc = document.getElementById("desc").value;
        const bookId = Math.random();
        const data = {
            "title": title,
            "author": author,
            "desc": desc,
            "bookId": this.props.editMode?this.props.currentBook.bookId:"b" + bookId
        }
        if(this.props.editMode){
            this.props.actions.editExistingBook(data);
        }else{
            this.props.actions.addNewBook(data);
        } 
        
        this.props.actions.closeModal();
        document.getElementById("bookForm").reset();

    }
    render() {
        return (
            <div id="myModal" class={this.props.modalState ? 'modal modalOpen' : 'modalClose'}>
                <div class="modal-content">
                    <div class="modal-header">
                        <span class="close" onClick={this.closeModal}>&times;</span>
                        <h2>Book Details</h2>
                    </div>
                    <div class="modal-body">
                        <form onSubmit={this.formSubmit} id="bookForm">
                            <label for="bookTitle">Book Title</label>
                            <input type="text" id="bookTitle" defaultValue={this.props.currentBook.title} name="firstname" placeholder="Please enter book title.." required={true} />

                            <label for="authName">Author Name</label>
                            <input type="text" id="authName" name="lastname" defaultValue={this.props.currentBook.author} placeholder="Please enter author name" required={true} />

                            <label for="desc">Description</label>
                            <textarea id="desc" defaultValue={this.props.currentBook.desc} placeholder="Please enter description about book" rows="5" required={true}></textarea>

                            <input type="submit" value="Submit" />
                            <input type="reset" value="Cancel" onClick={this.closeModal} />
                        </form>
                    </div>
                </div>

            </div>
        );
    }
}

export default BookModal;


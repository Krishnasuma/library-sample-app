import React from 'react';
import './book.css';

class BookCard extends React.Component {
    editBook = (book) => {
        this.props.actions.currentBook({
            currentBook:book,
            editMode:true
        });
        this.props.actions.openModal();
    }
    deleteBook = (book) => {
        const confirmation = window.confirm("Are you sure you want to Delete ?");
        if (confirmation) {
            this.props.actions.deleteExistingBook(book);
        }
    }
    render() {
        return (
            <div className="row">
                {
                    this.props.bookList.map((data, index) => {
                        return (
                            <div className="column" key={index}>
                                <div className="card">
                                    <div className="actions">
                                        <a href="#" className="link" onClick={() => this.editBook(data)}>Edit Book</a>
                                        <a href="#" className="link" onClick={() => this.deleteBook(data)}>Delete Book</a>
                                    </div>
                                    <h3>{data.title}</h3>
                                    <p>{data.desc}</p>
                                    <p><b>Author:</b> {data.author}</p>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        );
    };
}

export default BookCard;

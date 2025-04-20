const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <img src={book.image} alt={book.title} />
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <small>{book.genre}</small>
      <div className="button-container">
        <a
          href={book.buyLink}
          target="_blank"
          rel="noopener noreferrer"
          className="buy-button"
        >
          🛒 Lo Quiero!
        </a>
      </div>
    </div>
  );
};

export default BookCard;
/*
import React from "react";
import "./BookCard.css";

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <img src={book.image} alt={book.title} className="book-image" />

      <h3 className="book-title">{book.title}</h3>
      <p className="book-genre">{book.genre}</p>

      <div className="button-container">
        <a
          href={book.buyLink}
          target="_blank"
          rel="noopener noreferrer"
          className="buy-button"
        >
          <img src="/icons/backpack.png" alt="Mochila" className="buy-icon" />
          ¡Lo quiero!
        </a>
      </div>
    </div>
  );
};

export default BookCard;

*/

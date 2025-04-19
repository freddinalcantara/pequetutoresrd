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
          🛒 Comprar
        </a>
      </div>
    </div>
  );
};

export default BookCard;

export default function BookCard({ book }) {
  return (
    <div className="book-card">
      <img src={book.img} alt={book.title} />

      <h3>
        {book.title} <span>({book.year})</span>
      </h3>

      <p>{book.author}</p>
      <p className="price">Price: {book.price}Rs</p>
    </div>
  );
}

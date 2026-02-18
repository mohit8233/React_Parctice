import BookCard from "./BookCard";

export default function NonFication({ books }) {
  return (
    <>
      <h2>Non-Fiction Books</h2>

      <div className="books-container">
        {books.map((book, index) => (
        <BookCard key={index} book={book} />


        ))}
      </div>
    </>
  );
}

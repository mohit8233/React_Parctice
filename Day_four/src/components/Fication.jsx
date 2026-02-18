import BookCard from "./BookCard";

export default function Fication({ books }) {
  return (
    <>
      <h2>Fictional Books</h2>

      <div className="books-container">
        {books.map((book, index) => (
         <BookCard key={index} book={book} />


        ))}
      </div>
    </>
  );
}

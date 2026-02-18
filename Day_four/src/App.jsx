import { useState, useEffect } from "react";
import Fication from "./components/Fication";
import NonFication from "./components/NonFication";
import "./App.css";

function App() {
  const [books, setBooks] = useState([]);
  const [isFiction, setIsFiction] = useState(true);

  useEffect(() => {
  fetch(`http://localhost:3000/${isFiction ? "fiction" : "nonfiction"}`)
    .then(res => res.json())
    .then(data => {
      console.log("Fetched Data:", data);
      setBooks(data);
    });
}, [isFiction]);


  return (
    <div className="main">
      <h1>Mini Book Store</h1>

      <button
        className="toggle-btn"
        onClick={() => setIsFiction(!isFiction)}
      >
        {isFiction ? "Show Non-Fiction Books" : "Show Fictional Books"}
      </button>

      {isFiction ? (
        <Fication books={books} />
      ) : (
        <NonFication books={books} />
      )}
    </div>
  );
}

export default App;

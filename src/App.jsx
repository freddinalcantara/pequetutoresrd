import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import BookGrid from "./components/BookGrid";
import books from "./data/books";
import "./App.css";

function App() {
  const [selectedGenre, setSelectedGenre] = useState(null);

  const filteredBooks = selectedGenre
    ? books.filter((book) => book.genre === selectedGenre)
    : books;

  return (
    <div className="app">
      <Sidebar onSelectGenre={setSelectedGenre} />
      <div className="main-content">
        <Navbar />
        <BookGrid books={filteredBooks} />
      </div>
    </div>
  );
}

export default App;

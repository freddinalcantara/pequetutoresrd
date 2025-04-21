import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import BookGrid from "./components/BookGrid";
import Contact from "./components/Contact";
import books from "./data/books";
import Footer from "./components/Footer";
import { AdSense } from "react-adsense";
import AdBanner from "./components/AdBanner";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PrivacyPolicy from "./components/PrivacyPolicy";
import "./App.css";

function App() {
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const filteredBooks = selectedGenre
    ? books.filter((book) => book.genre === selectedGenre)
    : books;

  return (
    <Router>
      <div className="app">
        <Sidebar onSelectGenre={setSelectedGenre} isOpen={sidebarOpen} />
        <div className="main-content">
          <button className="hamburger-button" onClick={toggleSidebar}>
            ☰
          </button>
          <Navbar />
          {/* <BookGrid books={filteredBooks} /> */}

          <Routes>
            <Route path="/" element={<BookGrid books={filteredBooks} />} />
            <Route path="/privacidad" element={<PrivacyPolicy />} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>

          <AdBanner />
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;

/*
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


*/

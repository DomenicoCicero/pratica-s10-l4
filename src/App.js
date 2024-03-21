import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import fantasy from "../src/books/fantasy.json";
import BookList from "./components/BookList";
import { useState } from "react";
import MyButtonGroup from "./components/MyButtonGroup";

function App() {
  const [selectedBooks, setSelectedBooks] = useState(fantasy);

  const changeGenre = data => {
    setSelectedBooks(data);
  };

  return (
    <div>
      <MyNav />
      <Welcome />
      <MyButtonGroup changeGenre={changeGenre} />
      <BookList arrayBooks={selectedBooks} />
      <MyFooter />
    </div>
  );
}

export default App;

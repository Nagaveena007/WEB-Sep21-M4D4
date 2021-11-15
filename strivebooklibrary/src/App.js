import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import horrorMovies from "./data/horror.json";

import BookList from "./Components/BookList";
import SingleBookCard from "./Components/SingleBook";
import JumbotronElement from "./Components/Jumbotron";
import Navigation from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Navigation brand="Strive-Books" />
      <JumbotronElement />
      {/*  <SingleBookCard book={horrorMovies[0]} /> */}
      <BookList books={horrorMovies} />
      <Footer />
    </div>
  );
}

export default App;

import "./App.css";
import { HashRouter, Routes, Route } from "react-router";
import AboutUs from "./components/CoachingOpportunities";
import OtherInfo from "./components/BookLesson";
import Home from "./components/Home";
import CoachingOpportunities from "./components/CoachingOpportunities";
import BookLesson from "./components/BookLesson";
import FavoriteProducts from "./components/FavoriteProducts";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/coaching-opportunities"
          element={<CoachingOpportunities />}
        ></Route>
        <Route path="/book-lesson" element={<BookLesson />}></Route>
        <Route path="/favorite-products" element={<FavoriteProducts />}></Route>
        <Route path="/about-me" element={<AboutMe />}></Route>
        <Route path="/contact-me" element={<ContactMe />}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;

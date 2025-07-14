import "./App.css";
import { HashRouter, Routes, Route } from "react-router";
import Home from "./components/homePage/Home";
import CoachingOpportunities from "./components/CoachingOpportunities";
import BookLesson from "./components/bookLesson/BookLesson";
import FavoriteProducts from "./components/FavoriteProducts";
import AboutMe from "./components/About/AboutMe";
import ContactMe from "./components/ContactMe";
import TopNavBar from "./components/pageGlobals/TopNavBar";
import BottomPane from "./components/pageGlobals/BottomPane";

function App() {
  return (
    <HashRouter>
      <TopNavBar />
      <Routes>
        <Route path="/#" element={<Home />}></Route>
        <Route
          path="/coaching-opportunities"
          element={<CoachingOpportunities />}
        ></Route>
        <Route path="/book-lesson" element={<BookLesson />}></Route>
        <Route path="/favorite-products" element={<FavoriteProducts />}></Route>
        <Route path="/about-me" element={<AboutMe />}></Route>
        <Route path="/contact-me" element={<ContactMe />}></Route>
        <Route path="*" element={<Home />}></Route>
      </Routes>
      <BottomPane />
    </HashRouter>
  );
}

export default App;

import "./App.css";
import { HashRouter, Routes, Route } from "react-router";
import Home from "./components/homePage/Home";
import CoachingOpportunities from "./components/coachingOpportunities/CoachingOpportunities";
import BookLesson from "./components/bookLesson/BookLesson";
import FavoriteProducts from "./components/favoriteProducts/FavoriteProducts";
import AboutPage from "./components/About/AboutPage";
import ContactMe from "./components/ContactMe";
import TopNavBar from "./components/pageGlobals/TopNavBar";
import BottomPane from "./components/pageGlobals/BottomPane";
import BookedLessonsPage from "./components/bookedLessons/BookedLessonsPages";

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
        <Route path="/booked-lessons" element={<BookedLessonsPage />}></Route>
        <Route path="/book-lesson" element={<BookLesson />}></Route>
        <Route path="/favorite-products" element={<FavoriteProducts />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/contact" element={<ContactMe />}></Route>
        <Route path="*" element={<Home />}></Route>
      </Routes>
      <BottomPane />
    </HashRouter>
  );
}

export default App;

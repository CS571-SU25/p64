import Image from "react-bootstrap/Image";
import CardsCarousel from "./CardsCarousel";
import AboutColin from "./AboutColin";
import { favoriteProducts } from "../FavoriteProducts";
import LessonTypesGrid from "../LessonTypesGrid";

export default function Home() {
  return (
    <div>
      <Image src="./colin-hitting.jpg" alt="Colin hitting a pickleball" fluid />
      <div style={{ margin: "1rem", textAlign: "center" }}>
        <h1 style={{ margin: "2rem", color: "#323439" }}>
          Coaching Opportunities
        </h1>
        <LessonTypesGrid showLongDescription={false} height={"300px"} />
      </div>
      <AboutColin />
      <CardsCarousel
        heading={"Favorite Products"}
        showLessonCard={false}
        items={favoriteProducts}
      />
    </div>
  );
}

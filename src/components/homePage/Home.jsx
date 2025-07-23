import Image from "react-bootstrap/Image";
import CardsCarousel from "./CardsCarousel";
import AboutColin from "./AboutColin";
import { favoriteProducts } from "../../consts/favoriteProducts";
import LessonTypesGrid from "./LessonTypesGrid";

export default function Home() {
  return (
    <div>
      <Image src="./colin-hitting.jpg" alt="Colin hitting a pickleball" fluid />
      <div style={{ margin: "1rem", textAlign: "center" }}>
        <h1 style={{ margin: "1rem" }}>Coaching Opportunities</h1>
        <h2 style={{ margin: "1rem" }}>
          Get In-Person or Online Coaching from Colin
        </h2>
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

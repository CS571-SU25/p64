import Image from "react-bootstrap/Image";
import CardsCarousel from "./CardsCarousel";
import AboutColin from "./AboutColin";
import { lessonTypes } from "../BookLesson";
import { favoriteProducts } from "../FavoriteProducts";

export default function Home() {
  return (
    <div>
      <Image src="./colin-hitting.jpg" alt="Colin hitting a pickleball" fluid />
      <CardsCarousel
        heading={"Coaching Opportunities"}
        showLessonCard={true}
        items={lessonTypes}
      />
      <AboutColin />
      <CardsCarousel
        heading={"Favorite Products"}
        showLessonCard={false}
        items={favoriteProducts}
      />
    </div>
  );
}

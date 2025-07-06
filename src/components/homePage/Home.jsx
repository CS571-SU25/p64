import Image from "react-bootstrap/Image";
import CardsCarousel from "./CardsCarousel";
import AboutColin from "./AboutColin";
import { favoriteProducts } from "../FavoriteProducts";
import LessonTypesGrid from "../LessonTypesGrid";

export default function Home() {
  return (
    <div>
      <Image src="./colin-hitting.jpg" alt="Colin hitting a pickleball" fluid />
      <LessonTypesGrid showLongDescription={false} height={"300px"} />
      <AboutColin />
      <CardsCarousel
        heading={"Favorite Products"}
        showLessonCard={false}
        items={favoriteProducts}
      />
    </div>
  );
}

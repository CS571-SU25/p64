import Image from "react-bootstrap/Image";
import CardsCarousel from "./CardsCarousel";
import AboutColin from "./AboutColin";

export default function Home() {
  return (
    <div>
      <Image
        src="./public/colin-hitting.jpg"
        alt="Colin hitting a pickleball"
        fluid
      />
      <CardsCarousel heading={"Coaching Opportunities"} showLessonCard={true} />
      <AboutColin />
    </div>
  );
}

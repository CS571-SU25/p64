import Image from "react-bootstrap/Image";
import CoachingCardsCarousel from "./CoachingCardsCarousel";
import AboutColin from "./AboutColin";

export default function Home() {
  return (
    <div>
      <Image
        src="./public/colin-hitting.jpg"
        alt="Colin hitting a pickleball"
        fluid
      />
      <CoachingCardsCarousel />
      <AboutColin />
    </div>
  );
}

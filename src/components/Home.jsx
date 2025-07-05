import Image from "react-bootstrap/Image";
import CoachingCardsCarousel from "./CoachingCardsCarousel";

export default function Home() {
  return (
    <div>
      <Image
        src="./public/colin-hitting.jpg"
        alt="Colin hitting a pickleball"
        fluid
      />
      <CoachingCardsCarousel />
    </div>
  );
}

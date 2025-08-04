import Image from "react-bootstrap/Image";
import PaddlesGrid from "./PaddlesGrid";
import AboutColin from "./AboutColin";
import LessonTypesGrid from "./LessonTypesGrid";
import AlertMessage from "../pageGlobals/AlertMessage";
import { useState } from "react";

export default function Home() {
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const showAlert = () => {
    window.scrollTo(0, 0);
    setShowSuccessAlert(() => true);
    setTimeout(() => setShowSuccessAlert(() => false), 5000);
  };

  return (
    <div>
      <AlertMessage
        showSuccessAlert={showSuccessAlert}
        setShowSuccessAlert={() => setShowSuccessAlert(() => false)}
        message={"Booking successful!"}
      />
      <Image src="./colin-hitting.jpg" alt="Colin hitting a pickleball" fluid />
      <section style={{ margin: "1rem", textAlign: "center" }}>
        <h1 style={{ margin: "1rem" }}>Coaching Opportunities</h1>
        <h2 style={{ margin: "1rem" }}>
          Get In-Person or Online Coaching from Colin
        </h2>
        <LessonTypesGrid
          showLongDescription={false}
          height={"300px"}
          showAlert={showAlert}
        />
      </section>
      <AboutColin />
      <PaddlesGrid />
    </div>
  );
}

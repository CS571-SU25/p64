import LessonCategories from "../LessonCategories";
import { lessonTypes } from "../../consts/lessonTypes";
import AlertMessage from "../pageGlobals/AlertMessage";
import { useState } from "react";

export default function CoachingOpportunities() {
  const inPersonLessons = lessonTypes.filter((lesson) => lesson.inPerson);
  const onlineLessons = lessonTypes.filter((lesson) => !lesson.inPerson);
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
        message={"Lesson was successfully booked!"}
      />
      <LessonCategories
        data={inPersonLessons}
        heading={"In-Person Lessons"}
        showAlert={showAlert}
      />
      <LessonCategories
        data={onlineLessons}
        heading={"Online Coaching"}
        showAlert={showAlert}
      />
    </div>
  );
}

import BookLessonForm from "./BookLessonForm";
import { Container, Form } from "react-bootstrap";
import { useState } from "react";
import { lessonTypes } from "../../consts/lessonTypes";
import AlertMessage from "../pageGlobals/AlertMessage";

export default function BookLesson() {
  const [lesson, setLesson] = useState({ id: 0 });
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const onFormSubmitSuccesss = () => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
    setShowSuccessAlert(() => true);
    setLesson({ id: 0 });
    setTimeout(() => setShowSuccessAlert(() => false), 5000);
  };

  const handeLessonSelection = (e) => {
    const intValue = Number(e.target.value);

    if (0 == intValue) {
      setLesson({ id: 0 });
      return;
    }
    const lesson = lessonTypes.find((l) => l.id === intValue);

    setLesson(lesson);
  };

  return (
    <div>
      <AlertMessage
        showSuccessAlert={showSuccessAlert}
        setShowSuccessAlert={() => setShowSuccessAlert(() => false)}
        message={"Lesson was successfully booked!"}
      />
      <Form.Group
        style={{ width: "60%", margin: "2rem auto", textAlign: "left" }}
      >
        <Form.Label htmlFor="lessonType">Lesson Type</Form.Label>
        <Form.Select
          id="lessonType"
          value={lesson?.id}
          onChange={handeLessonSelection}
        >
          <option value={0}>Select a lesson</option>
          {lessonTypes
            .filter((l) => l.id !== 4)
            .map((lesson) => {
              return (
                <option key={lesson.id} value={lesson.id}>
                  {lesson.title}
                </option>
              );
            })}
        </Form.Select>
      </Form.Group>
      <Container>
        {lesson.id === 0 ? (
          <div style={{ height: "80vh" }}>Please select a lesson type!</div>
        ) : (
          <BookLessonForm
            key={lesson.id}
            onFormSubmitSuccess={onFormSubmitSuccesss}
            {...lesson}
          />
        )}
      </Container>
    </div>
  );
}

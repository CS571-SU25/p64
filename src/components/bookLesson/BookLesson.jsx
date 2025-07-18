import IndividualLessonForm from "./IndividualLessonForm";
import { Container, Form } from "react-bootstrap";
import { useState } from "react";
import { lessonTypes } from "../../consts/lessonTypes";
import AlertMessage from "../pageGlobals/AlertMessage";

export default function BookLesson() {
  const [lesson, setLesson] = useState(null);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const onFormSubmitSuccesss = () => {
    setLesson(null);
    window.scrollTo({
      top: 0,
      left: 0,
    });
    setShowSuccessAlert(() => true);
    setTimeout(() => setShowSuccessAlert(() => false), 5000);
  };

  const handeLessonSelection = (value) => {
    setLesson(() => {
      const intValue = parseInt(value);
      if (0 === intValue) {
        return undefined;
      }
      const lesson = lessonTypes.find((l) => l.id === intValue);

      return lesson;
    });
  };

  return (
    <div>
      <AlertMessage
        showSuccessAlert={showSuccessAlert}
        setShowSuccessAlert={() => setShowSuccessAlert(() => false)}
        message={"Lesson was successfully booked!"}
      />
      <Form.Group
        controlId="lesson-type"
        style={{ width: "80%", margin: "2rem auto", textAlign: "left" }}
      >
        <Form.Label>Lesson Type</Form.Label>
        <Form.Select
          value={lesson}
          onChange={(e) => handeLessonSelection(e.target.value)}
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
        {!lesson ? (
          <div style={{ height: "100vh" }}>Please select a lesson type!</div>
        ) : (
          <IndividualLessonForm
            key={lesson.id}
            onFormSubmitSuccess={onFormSubmitSuccesss}
            {...lesson}
          />
        )}
      </Container>
    </div>
  );
}

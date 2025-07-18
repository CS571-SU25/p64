import IndividualLessonForm from "./IndividualLessonForm";
import { Container, Form, Alert } from "react-bootstrap";
import { useState } from "react";
import { lessonTypes } from "../../consts/lessonTypes";

export default function BookLesson() {
  const [lesson, setLesson] = useState(null);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const onFormSubmitSuccesss = () => {
    setLesson(null);
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
      {showSuccessAlert ? (
        <Alert
          variant="success"
          onClose={() => setShowSuccessAlert(false)}
          dismissible
          className="ms-auto"
          style={{ width: "60%", margin: "1rem" }}
        >
          Lesson successfully booked!
        </Alert>
      ) : (
        <></>
      )}
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

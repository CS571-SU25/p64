import IndividualLessonForm from "./IndividualLessonForm";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useLocation } from "react-router";

export const lessonTypes = [
  {
    id: 1,
    title: "Individual Private Lesson",
    price: "$65/hr",
    description:
      "Work directly with Colin in a personalized, one-on-one coaching environment designed to elevate every aspect of your game. Whether you're just getting started or looking to refine advanced techniques, Colin provides tailored instruction, immediate feedback, and proven strategies to help you reach your pickleball potential.",
    shortDescription:
      "Work directly with Colin in a personalized, one-on-one coaching environment.",
    inPerson: true,
  },
  {
    id: 2,
    title: "Three and Me",
    price: "$90/hr/group",
    description:
      "You and up to two others can book a private coaching session with Colin that blends personalized instruction with live gameplay. These small-group sessions allow for focused skill development, strategic guidance, and real-time feedback, all while playing in a competitive, game-like environment.",
    shortDescription:
      "You and up to two others can book a private coaching session.",
    inPerson: true,
  },
  {
    id: 3,
    title: "Online Film Review",
    price: "$50/30 minutes of footage",
    description:
      "Submit up to 30 minutes of game footage and identify which player you are. Colin will personally review your match, analyzing key moments and providing a detailed video breakdown with insights, strategy adjustments, and specific areas for improvement. It’s like having a private coaching session on your own schedule.",
    shortDescription:
      "Submit up to 30 minutes and get an in-depth review your match.",
    inPerson: false,
  },

  {
    id: 4,
    title: "Online Practice Guide",
    price: "$40",
    description:
      "This guide is a curated roadmap designed to help you reach the 4.0 level on your own schedule. Packed with targeted practice drills and intentional progressions, it empowers you to train effectively and independently. Whether you're working on fundamentals, refining strategy, or building consistency, this guide will elevate your training.",
    shortDescription:
      "This guide is a curated roadmap designed to help you reach the 4.0 level on your own schedule.",
    inPerson: false,
  },
];

export default function BookLesson() {
  const [lesson, setLesson] = useState(useLocation().state);

  //TODO: fix default selection

  function handeLessonSelection(value) {
    setLesson(() => {
      const intValue = parseInt(value);
      if (0 === intValue) {
        return undefined;
      }
      const lesson = lessonTypes.find((l) => l.id === intValue);

      return lesson;
    });
  }

  return (
    <div>
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
          <IndividualLessonForm key={lesson.id} {...lesson} />
        )}
      </Container>
    </div>
  );
}

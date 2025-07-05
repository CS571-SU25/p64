import LessonCard from "./LessonCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { lessonTypes } from "./BookLesson";

export default function CoachingOpportunities() {
  return (
    <div style={{ margin: "3rem" }}>
      <h1>Coaching Opportunities</h1>
      <Container>
        <Row>
          {lessonTypes.map((lesson) => {
            return (
              <Col style={{ margin: "1rem" }}>
                <LessonCard
                  key={lesson.title}
                  {...lesson}
                  showLongDescription={true}
                  height={"600px"}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

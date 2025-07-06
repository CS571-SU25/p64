import { lessonTypes } from "./BookLesson";
import LessonCard from "./LessonCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";

export default function LessonTypesGrid(props) {
  return (
    <Container>
      <Row>
        {lessonTypes.map((lesson) => {
          return (
            <Col>
              <LessonCard
                key={lesson.title}
                {...lesson}
                showLongDescription={props.showLongDescription}
                height={props.height}
                width={"300px"}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

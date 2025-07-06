import { lessonTypes } from "./BookLesson";
import LessonCard from "./LessonCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

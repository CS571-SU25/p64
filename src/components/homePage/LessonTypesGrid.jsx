import { lessonTypes } from "../../consts/lessonTypes";
import LessonCard from "../LessonCard";
import { Container, Col, Row } from "react-bootstrap";

export default function LessonTypesGrid(props) {
  return (
    <Container>
      <Row>
        {lessonTypes.map((lesson) => {
          return (
            <Col key={lesson.title} style={{ marginBottom: "1rem" }}>
              <LessonCard
                {...lesson}
                showLongDescription={props.showLongDescription}
                height={props.height}
                width={"300px"}
                showAlert={props.showAlert}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

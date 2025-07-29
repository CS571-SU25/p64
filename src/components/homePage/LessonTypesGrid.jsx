import { lessonTypes } from "../../consts/lessonTypes";
import LessonCard from "../LessonCard";
import { Container, Col, Row } from "react-bootstrap";

export default function LessonTypesGrid(props) {
  return (
    <Container style={{ padding: 0 }}>
      <Row>
        {lessonTypes.map((lesson) => {
          return (
            <Col
              sm={12}
              md={6}
              xl={3}
              key={lesson.title}
              style={{ marginBottom: "1rem" }}
            >
              <LessonCard
                {...lesson}
                showLongDescription={props.showLongDescription}
                height={props.height}
                width={"100%"}
                showAlert={props.showAlert}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

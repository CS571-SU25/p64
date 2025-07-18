import { Container, Col, Row, LessonCard } from "react-bootstrap";

export default function LessonCategories(props) {
  return (
    <Container style={{ backgroundColor: "#e68649", margin: "2rem auto" }}>
      <Row>
        <Col style={{ padding: "1rem" }}>
          <h1>{props.heading}</h1>
        </Col>
      </Row>
      <Row>
        {props.data.map((lesson) => {
          return (
            <Col style={{ marginBottom: "1rem" }} sm={12} lg={6}>
              <LessonCard
                {...lesson}
                showLongDescription={true}
                height={"100%"}
                width={"80%"}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import { coachingExperience } from "../../consts/coachingExperience";

export default function CoachingExperienceGrid() {
  return (
    <Container style={{ margin: "2rem auto" }}>
      <h2>Coaching Experience</h2>
      <Row>
        {coachingExperience.map((experience) => {
          return (
            <Col key={experience.id} sm={12} md={12} lg={6}>
              <Card
                style={{
                  textAlign: "center",
                  margin: "1rem auto",
                  height: "280px",
                }}
              >
                <Card.Title>{experience.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {experience.location}
                </Card.Subtitle>
                <Card.Text>
                  {experience.startDate}
                  {experience.endDate ? <> - {experience.endDate}</> : <></>}
                </Card.Text>
                <ListGroup className="list-group-flush">
                  {experience.tasks.map((task) => {
                    return <ListGroup.Item>{task}</ListGroup.Item>;
                  })}
                </ListGroup>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

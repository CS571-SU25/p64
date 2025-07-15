import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const coachingExperience = [
  {
    id: 1,
    startDate: "2025",
    endDate: "Current",
    location: "Lake Geneva",
    instructionType: "Tennis and Pickleball",
    title: "Instructor",
    tasks: ["this is a task", "this is a task", "this is a task"],
  },
  {
    id: 2,
    startDate: "2020",
    endDate: "2021",
    location: "Eau Claire",
    instructionType: "Tennis",
    title: "Tennis Instructor",
    tasks: ["this is a task", "this is a task", "this is a task"],
  },
  {
    id: 3,
    startDate: "2018",
    endDate: "2020",
    location: "Green Bay",
    instructionType: "Tennis",
    title: "Junior Tennis Instructor",
    tasks: ["this is a task", "this is a task", "this is a task"],
  },
];

export default function CoachingExperienceGrid() {
  return (
    <Container style={{ margin: "2rem auto" }}>
      <h2>Coaching Experience</h2>
      <Row>
        {coachingExperience.map((experience) => {
          return (
            <Col key={experience.id} sm={12} md={12} lg={4}>
              <Card
                style={{
                  textAlign: "center",
                  margin: "1rem auto",
                }}
              >
                <Card.Title>{experience.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {experience.location}
                </Card.Subtitle>
                <Card.Text>
                  {experience.startDate} - {experience.endDate}
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

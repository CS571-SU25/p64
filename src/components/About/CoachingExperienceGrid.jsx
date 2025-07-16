import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const coachingExperience = [
  {
    id: 1,
    startDate: "Current",
    endDate: "",
    location: "Lake Geneva Tennis & Pickleball",
    title: "Tennis & Pickleball Instructor",
    tasks: ["Conducts individual and group lessons", "Runs drill groups"],
  },
  {
    id: 2,
    startDate: "2024",
    endDate: "",
    location: "John & Fay Menard YMCA Tennis Center",
    title: "Tennis Instructor",
    tasks: [
      "Developed players’ skills in practice",
      "Coached various strategies during matchplay",
    ],
  },
  {
    id: 3,
    startDate: "2021 Boy’s Tennis Season",
    endDate: "",
    location: "Green Bay",
    title: "Director of Player Development",
    tasks: [
      "Developed players’ skills in practice",
      "Coached various strategies during matchplay",
    ],
  },
  {
    id: 4,
    startDate: "2021",
    endDate: "2022",
    location: "Green Bay Tennis Center",
    title: "Junior Tennis Instructor",
    tasks: [
      "Taught from ages 6-70",
      "Assisted in group lessons",
      "Taught Private Lessons",
    ],
  },
];

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

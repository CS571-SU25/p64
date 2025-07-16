import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const schoolExperiences = [
  {
    id: 1,
    startDate: "2017",
    endDate: "2018",
    location: "Ashwaubenon High School",
    details: [
      "First Team All Conference #1 Doubles Selection",
      "Second Place Sectional Finish at #1 Doubles",
      "Second Round Appearance in the WIAA Division 1 Doubles State Tournament",
    ],
    src: "./colin-ashwaubenon.jpg",
  },
  {
    id: 2,
    startDate: "2018",
    endDate: "2019",
    location: "Green Bay Southwest High School",
    details: [
      "#16 Ranked Doubles Team at the WIAA Division 1 Doubles State Tournament",
    ],
    src: "./uwec-tennis.jpeg",
  },
  {
    id: 3,
    startDate: "2021",
    endDate: "2023",
    location: "UW- Eau Claire",
    details: [
      "Three years of collegiate tennis experience playing singles and doubles",
    ],
    src: "./uwec-tennis.jpeg",
  },
];

export default function TennisBackground() {
  return (
    <Container style={{ margin: "2rem auto" }}>
      <h2>Tennis Background</h2>
      <Row>
        {schoolExperiences.map((experience) => {
          return (
            <Col key={experience.id} sm={12} md={12} lg={4}>
              <Card
                style={{
                  textAlign: "center",
                  margin: "1rem auto",
                  textAlign: "left",
                  backgroundColor: "#dbdbdb",
                  borderColor: "#dbdbdb",
                }}
              >
                <Card.Img
                  style={{
                    margin: "auto",
                    height: "350px",
                  }}
                  variant="top"
                  src={experience.src}
                />

                <Card.Title>{experience.location}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {experience.startDate} - {experience.endDate}
                </Card.Subtitle>
                <ul>
                  {experience.details.map((detail) => {
                    return <li>{detail}</li>;
                  })}
                </ul>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

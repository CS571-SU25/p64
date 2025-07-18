import { Container, Row, Col, Card } from "react-bootstrap";
import { schoolExperiences } from "../../consts/schoolExperiences";

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

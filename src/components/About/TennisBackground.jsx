import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const schoolExperiences = [
  {
    id: 1,
    startDate: "2017",
    endDate: "2019",
    location: "Ashawaubenon",
    description: `maximus nisi nisi dignissim eros. Nunc scelerisque, odio in aliquet
          gravida, nisi nibh convallis lacus, nec congue quam eros eget leo.
          Fusce quis auctor eros. Maecenas eu est non sem auctor fermentum quis
          a lorem. Proin accumsan ante ac justo congue posuere. Integer
          scelerisque vel ipsum quis pharetra.`,
    src: "./colin-ashwaubenon.jpg",
  },
  {
    id: 2,
    startDate: "2019",
    endDate: "2020",
    location: "West",
    description: `maximus nisi nisi dignissim eros. Nunc scelerisque, odio in aliquet
          gravida, nisi nibh convallis lacus, nec congue quam eros eget leo.
          Fusce quis auctor eros. Maecenas eu est non sem auctor fermentum quis
          a lorem. Proin accumsan ante ac justo congue posuere. Integer
          scelerisque vel ipsum quis pharetra.`,
    src: "./uwec-tennis.jpeg",
  },
  {
    id: 3,
    startDate: "2021",
    endDate: "2023",
    location: "UW- Eau Claire",
    description: `maximus nisi nisi dignissim eros. Nunc scelerisque, odio in aliquet
          gravida, nisi nibh convallis lacus, nec congue quam eros eget leo.
          Fusce quis auctor eros. Maecenas eu est non sem auctor fermentum quis
          a lorem. Proin accumsan ante ac justo congue posuere. Integer
          scelerisque vel ipsum quis pharetra.`,
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
                <Card.Text> {experience.description}</Card.Text>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

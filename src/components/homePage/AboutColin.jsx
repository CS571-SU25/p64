import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Stack from "react-bootstrap/Stack";

export default function AboutColin() {
  return (
    <Container style={{ margin: "0px", padding: "0px" }}>
      <Row style={{ width: "100%" }}>
        <Col>
          <img
            style={{ width: "100%" }}
            src="./about-colin.jpg"
            alt="Colin spiking a pickleball"
          />
        </Col>
        <Col
          style={{
            margin: "auto",
            fontSize: "20px",
            lineHeight: "40px",
            textAlign: "center",
          }}
        >
          Colin is a 5.0+ pickleball player who actively competes in PPA Pro
          Qualifiers, bringing high-level experience and competitive insight to
          his coaching. Before making the switch to pickleball, he played three
          years of NCAA Division III tennis at the University of Wisconsin–Eau
          Claire, where he developed a strong foundation in court strategy and
          athletic performance. Now based in Verona, Wisconsin, Colin is
          passionate about helping players elevate their game through
          personalized instruction, video analysis, and game-based training.
        </Col>
      </Row>
    </Container>
  );
}

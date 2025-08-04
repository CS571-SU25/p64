import { Image, Row, Col } from "react-bootstrap";

export default function AboutColin(props) {
  return (
    <Row style={{ backgroundColor: "#e68649", width: "100%", margin: "0" }}>
      <Col sm={12} md={12} lg={6} style={{ padding: "0" }}>
        <Image
          style={{ width: "100%" }}
          src="./about-colin.jpg"
          alt="Colin spiking a pickleball"
        />
      </Col>
      <Col
        sm={12}
        md={12}
        lg={6}
        style={{
          fontSize: "1.25rem",
          margin: "auto",
          padding: "2rem",
          lineHeight: "2rem",
        }}
      >
        {props.showHeading === true ? <h1>About Colin</h1> : <></>}
        Colin is a 5.0+ pickleball player who actively competes in PPA Pro
        Qualifiers, bringing high-level experience and competitive insights to
        his coaching. Before making the switch to pickleball, he played three
        years of NCAA Division III tennis at the University of Wisconsin–Eau
        Claire where he developed a strong foundation in court strategy and
        athletic performance. Now based in Verona, Wisconsin, Colin is
        passionate about helping players elevate their game through personalized
        instruction, video analysis, and game-based training.
      </Col>
    </Row>
  );
}

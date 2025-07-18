import { Image, Col, Row } from "react-bootstrap";

export default function CardTextBanner(props) {
  return (
    <Row style={{ margin: "2rem" }}>
      <Col sm={12} md={12} lg={4} xl={5}>
        <Image style={{ width: "100%" }} src={props.src} alt={props.alt} />
      </Col>
      <Col
        sm={12}
        md={12}
        lg={8}
        xl={6}
        style={{
          lineHeight: "2rem",
          fontSize: "1.1rem",
          textAlign: "left",
        }}
      >
        <h3 style={{ margin: "1rem 0" }}>{props.heading}</h3>
        <h4>{props.year}</h4>
        <div>{props.text}</div>
      </Col>
    </Row>
  );
}

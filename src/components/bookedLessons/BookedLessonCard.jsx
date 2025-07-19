import { Card, ListGroup, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";

export default function BookedLessonCard(props) {
  const [lessonName, setLessonName] = useState(null);

  const getName = () => {
    if (props.participants.length > 1) {
      return "Three and Me";
    }

    return "Individual Private Lesson";
  };

  useEffect(() => {
    setLessonName(getName);
  }, []);

  return (
    <Card style={{ height: "250px", margin: "auto" }}>
      <Card.Body>
        <Row>
          <Col>
            <Card.Title>{lessonName}</Card.Title>
            <Card.Subtitle>{props.date}</Card.Subtitle>
            <div>{props.time}</div>
            <Card.Text>Fake Location Here</Card.Text>
          </Col>
          <Col style={{ margin: "auto" }}>
            <h6>Participants</h6>
            <ListGroup className="list-group-flush">
              {props.participants.map((p, index) => {
                return <ListGroup.Item key={index}>{p}</ListGroup.Item>;
              })}
            </ListGroup>
          </Col>
        </Row>
      </Card.Body>
      <em>Booked by {props.name}</em>
    </Card>
  );
}

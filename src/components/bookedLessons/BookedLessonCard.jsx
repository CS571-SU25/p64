import { Card, ListGroup, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";

export default function BookedLessonCard(props) {
  const [lessonName, setLessonName] = useState(null);
  const [lessonLocation, setLessonLocation] = useState(null);

  const getName = () => {
    if (props.participants.length > 1) {
      return "Three and Me";
    }

    return "Individual Private Lesson";
  };

  const getLocation = () => {
    if (props.location === "1") {
      return "Garner Park";
    }

    return "Pickleball Pro Courts";
  };

  useEffect(() => {
    setLessonName(getName);
    setLessonLocation(getLocation);
  }, []);

  return (
    <Card style={{ margin: "1rem auto" }}>
      <Card.Title>{lessonName}</Card.Title>
      <Card.Subtitle>
        {props.date} at {props.time}
        <br></br>
        {lessonLocation}
      </Card.Subtitle>
      <hr />
      <Card.Body style={{ padding: 0 }}>
        <div style={{ height: "150px", margin: "auto" }}>
          {props.participants.length == 1 ? (
            <h5>Participant</h5>
          ) : (
            <h5>Participants</h5>
          )}
          <ListGroup className="list-group-flush">
            {props.participants.map((p, index) => {
              return <ListGroup.Item key={index}>{p}</ListGroup.Item>;
            })}
          </ListGroup>
        </div>
        <hr />
        <Card.Text>
          <em>Booked by {props.name}</em>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

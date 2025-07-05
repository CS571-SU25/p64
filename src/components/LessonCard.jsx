import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function LessonCard(props) {
  return (
    <Card style={{ width: "18rem", height: props.height, margin: "auto" }}>
      <Card.Title>{props.title}</Card.Title>
      <Card.Subtitle>{props.price}</Card.Subtitle>
      <Card.Body>
        {props.showLongDescription ? (
          <Card.Text>{props.description}</Card.Text>
        ) : (
          <Card.Text>{props.shortDescription}</Card.Text>
        )}

        <Button variant="primary">Book Lesson</Button>
      </Card.Body>
    </Card>
  );
}

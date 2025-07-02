import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function LessonCard(props) {
  return (
    <Card style={{ width: "18rem", height: "600px", margin: "auto" }}>
      <Card.Title>{props.title}</Card.Title>
      <Card.Subtitle>{props.price}</Card.Subtitle>
      <Card.Body>
        <Card.Text>{props.description}</Card.Text>
        <Button variant="primary">Book Lesson</Button>
      </Card.Body>
    </Card>
  );
}

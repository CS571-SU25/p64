import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function LessonCard(props) {
  return (
    <Card
      style={{
        width: "300px",
        height: props.height,
        margin: "auto",
        textAlign: "center",
      }}
    >
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

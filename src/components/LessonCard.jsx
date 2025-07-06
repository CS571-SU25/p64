import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function LessonCard(props) {
  return (
    <Card
      style={{
        width: props.width,
        height: props.height,
        textAlign: "center",
      }}
    >
      <Card.Title>{props.title}</Card.Title>
      <Card.Subtitle>{props.price}</Card.Subtitle>
      <Card.Body
        style={{
          alignContent: "center",
        }}
      >
        {props.showLongDescription ? (
          <Card.Text>{props.description}</Card.Text>
        ) : (
          <Card.Text>{props.shortDescription}</Card.Text>
        )}
      </Card.Body>
      {props.id === 1 || props.id === 2 ? (
        <Button variant="primary">Book Lesson</Button>
      ) : (
        <div></div>
      )}
      {props.id === 3 ? (
        <Button variant="primary">Submit Footage</Button>
      ) : (
        <div></div>
      )}
      {props.id === 4 ? (
        <Button variant="primary">Purchase PDF</Button>
      ) : (
        <div></div>
      )}
    </Card>
  );
}

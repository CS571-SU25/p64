import { Card, ListGroup } from "react-bootstrap";

export default function ExperienceCard(props) {
  return (
    <Card
      style={{
        textAlign: "center",
        margin: "1rem auto",
        width: "80%",
        height: props.height ?? "",
      }}
    >
      {props.src ? (
        <Card.Img
          variant="top"
          style={{
            width: "200px",
            height: "200px",
            margin: "auto",
            marginBottom: "1rem",
          }}
          src={props.src}
          alt={props.alt}
        />
      ) : (
        <></>
      )}
      <Card.Title>{props.heading}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">
        {props.subheading}
      </Card.Subtitle>
      {props.startDate ? (
        <Card.Text>
          {props.startDate}
          {props.endDate ? <> - {props.endDate}</> : <></>}
        </Card.Text>
      ) : (
        <></>
      )}
      <ListGroup className="list-group-flush">
        {props.tasks.map((task, index) => {
          return <ListGroup.Item key={index}>{task}</ListGroup.Item>;
        })}
      </ListGroup>
    </Card>
  );
}

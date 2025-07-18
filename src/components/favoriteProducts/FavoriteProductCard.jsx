import { Button, Card } from "react-bootstrap";

export default function FavoriteProductCard(props) {
  return (
    <Card
      style={{
        width: "18rem",
        height: "500px",
        textAlign: "center",
        margin: "auto",
      }}
    >
      <Card.Title>{props.favoriteTitle}</Card.Title>
      <Card.Subtitle>{props.name}</Card.Subtitle>
      <Card.Body>
        <Card.Img variant="top" src={props.img} alt={props.name} />
        <Card.Text>{props.description}</Card.Text>
      </Card.Body>
      <Button variant="primary" target="_blank" href={props.externalLink}>
        View Product
      </Button>
    </Card>
  );
}

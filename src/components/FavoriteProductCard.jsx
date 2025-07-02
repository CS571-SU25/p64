import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function FavoriteProductCard(props) {
  return (
    <Card style={{ width: "18rem", height: "500px", margin: "auto" }}>
      <Card.Title>{props.favoriteTitle}</Card.Title>
      <Card.Subtitle>{props.name}</Card.Subtitle>
      <Card.Body>
        <Card.Img variant="top" src={props.img} alt={props.name} />

        <Card.Text>{props.description}</Card.Text>
        <Button variant="primary">View Product</Button>
      </Card.Body>
    </Card>
  );
}

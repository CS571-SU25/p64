import FavoriteProductCard from "./FavoriteProductCard";
import { Container, Row, Col } from "react-bootstrap";
import { favoriteProducts } from "../../consts/favoriteProducts";

export default function FavoriteProducts() {
  return (
    <div>
      <h1 style={{ margin: "1rem" }}>Colin's Favorite Products</h1>
      <Container>
        <Row>
          {favoriteProducts.map((product) => {
            return (
              <Col style={{ margin: "1rem" }} key={product.name}>
                <FavoriteProductCard {...product} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

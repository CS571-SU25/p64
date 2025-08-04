import FavoriteProductCard from "../favoriteProducts/FavoriteProductCard";
import { Container, Col, Row } from "react-bootstrap";
import { favoriteProducts } from "../../consts/favoriteProducts";

export default function PaddlesGrid() {
  return (
    <section style={{ margin: 40 }}>
      <h1 style={{ textAlign: "center" }}>Must Try Paddles</h1>
      <h2 style={{ margin: "1rem" }}>
        Check Out Colin's Top Three Favorite Paddles
      </h2>
      <Container>
        <Row>
          {favoriteProducts
            .filter((i) => i.paddle)
            .map((item) => {
              return (
                <Col
                  sm={12}
                  md={6}
                  xl={3}
                  key={item.name}
                  style={{ margin: "1rem auto" }}
                >
                  <FavoriteProductCard {...item} />
                </Col>
              );
            })}
        </Row>
      </Container>
    </section>
  );
}

import FavoriteProductCard from "./FavoriteProductCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function FavoriteProducts() {
  const favoriteProducts = [
    {
      favoriteTitle: "Favorite Power Paddle",
      img: "./public/Selkirk-SLK-ERA-Power.png",
      name: "Selkirk SLK ERA Power",
      description: "Some description here",
    },
    {
      favoriteTitle: "Favorite All Court Paddle",
      img: "./public/J2K.png",
      name: "Honolulu J2k",
      description: "Some description here",
    },
    {
      favoriteTitle: "Favorite Control Paddle",
      img: "./public/11six24.png",
      name: "11six24 Pegasus JellyBean",
      description: "Some description here",
    },
    {
      favoriteTitle: "Favorite Grips",
      img: "./public/pro-track-overgrip.png",
      name: "Bodhi ProTack Overgrips",
      description: "Some description here",
    },
    {
      favoriteTitle: "Favorite Balls",
      img: "./public/franklin-x-40.png",
      name: "Franklin X-40",
      description: "Some description here",
    },
    {
      favoriteTitle: "Best Apparel",
      img: "./public/centerline.png",
      name: "Centerline Athletics",
      description: "Some description here",
    },
  ];

  return (
    <div style={{ margin: "3rem" }}>
      <h1>Favorite Products</h1>
      <Container>
        <Row>
          {favoriteProducts.map((product) => {
            return (
              <Col style={{ margin: "1rem" }}>
                <FavoriteProductCard key={product.name} {...product} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

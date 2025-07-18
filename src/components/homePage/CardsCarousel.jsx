import { useState } from "react";
import FavoriteProductCard from "../favoriteProducts/FavoriteProductCard";
import { Carousel, Container, Row, Col } from "react-bootstrap";

export default function CoachingCardsCarousel(props) {
  const [carouselIndex, setCarouselIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setCarouselIndex(selectedIndex);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{props.heading}</h1>
      <Carousel
        activeIndex={carouselIndex}
        onSelect={handleSelect}
        slide={false}
        indicators={false}
      >
        {props.items.map((itemsFor, outerIndex) => {
          if (outerIndex <= Math.ceil(props.items.length / 3) - 1) {
            return (
              <Carousel.Item key={`out-index-" + ${outerIndex % 3}`}>
                <Container>
                  <Row>
                    {props.items.map((item, innerIndex) => {
                      const maxIndex = carouselIndex + 2;
                      if (
                        innerIndex >= carouselIndex &&
                        innerIndex <= maxIndex
                      ) {
                        return (
                          <Col
                            style={{ margin: "1rem" }}
                            key={`inner-index-" + ${innerIndex}`}
                          >
                            {props.showLessonCard ? (
                              <LessonCard
                                key={item.title}
                                {...item}
                                showLongDescription={false}
                                height={"300px"}
                                width={"300px"}
                              />
                            ) : (
                              <FavoriteProductCard key={item.name} {...item} />
                            )}
                          </Col>
                        );
                      }
                    })}
                  </Row>
                </Container>
              </Carousel.Item>
            );
          }
        })}
      </Carousel>
    </div>
  );
}

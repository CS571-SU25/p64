import Carousel from "react-bootstrap/Carousel";
import LessonCard from "../LessonCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";

import { lessonTypes } from "../BookLesson";

export default function CoachingCardsCarousel(props) {
  const [carouselIndex, setCarouselIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setCarouselIndex(selectedIndex);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{props.heading}</h1>
      <Carousel
        data-bs-theme="dark"
        activeIndex={carouselIndex}
        onSelect={handleSelect}
        indicator={false}
        slide={false}
      >
        <Carousel.Item>
          {props.showLessonCard ? (
            <Container>
              <Row>
                {lessonTypes.map((lesson, index) => {
                  const maxIndex = carouselIndex + 2;
                  if (index >= carouselIndex && index <= maxIndex) {
                    return (
                      <Col style={{ margin: "1rem" }}>
                        <LessonCard
                          key={lesson.title}
                          {...lesson}
                          showLongDescription={false}
                          height={"300px"}
                        />
                      </Col>
                    );
                  }
                })}
              </Row>
            </Container>
          ) : (
            <div></div>
          )}
        </Carousel.Item>
        <Carousel.Item>
          {props.showLessonCard ? (
            <Container>
              <Row>
                {lessonTypes.map((lesson, index) => {
                  const maxIndex = carouselIndex + 2;
                  if (index >= carouselIndex && index <= maxIndex) {
                    return (
                      <Col style={{ margin: "1rem" }}>
                        <LessonCard
                          key={lesson.title}
                          {...lesson}
                          showLongDescription={false}
                          height={"300px"}
                        />
                      </Col>
                    );
                  }
                })}
              </Row>
            </Container>
          ) : (
            <div></div>
          )}
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

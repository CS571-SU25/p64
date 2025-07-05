import Carousel from "react-bootstrap/Carousel";
import LessonCard from "../LessonCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";

import { lessonTypes } from "../BookLesson";

export default function CoachingCardsCarousel() {
  const [carouselIndex, setCarouselIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setCarouselIndex(selectedIndex);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Available Lessons</h1>
      <Carousel
        data-bs-theme="dark"
        activeIndex={carouselIndex}
        onSelect={handleSelect}
        indicator={false}
        slide={false}
      >
        <Carousel.Item>
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
        </Carousel.Item>
        <Carousel.Item>
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
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

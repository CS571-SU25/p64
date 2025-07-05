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
        slide={false}
      >
        {lessonTypes.map((lessonHere, outerIndex) => {
          if (outerIndex <= lessonTypes.length % 3) {
            return (
              <Carousel.Item key={`out-index-" + ${outerIndex % 3}`}>
                {props.showLessonCard ? (
                  <Container>
                    <Row>
                      {lessonTypes.map((lesson, innerIndex) => {
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
            );
          }
        })}
      </Carousel>
    </div>
  );
}

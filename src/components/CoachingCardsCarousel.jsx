import Carousel from "react-bootstrap/Carousel";
import LessonCard from "./LessonCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";

export default function CoachingCardsCarousel() {
  const [carouselIndex, setCarouselIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setCarouselIndex(selectedIndex);
  };

  const testing = ["test1", "test2"];

  const lessonTypes = [
    {
      title: "Individual Private Lesson",
      price: "$65/hr",
      description:
        "Work directly with Colin in a personalized, one-on-one coaching environment designed to elevate every aspect of your game. Whether you're just getting started or looking to refine advanced techniques, Colin provides tailored instruction, immediate feedback, and proven strategies to help you reach your pickleball potential.",
      shortDescription:
        "Work directly with Colin in a personalized, one-on-one coaching environment.",
    },
    {
      title: "Online Film Review",
      price: "$50 per 30 minutes of footage",
      description:
        "Submit up to 30 minutes of game footage and identify which player you are. Colin will personally review your match, analyzing key moments and providing a detailed video breakdown with insights, strategy adjustments, and specific areas for improvement. It’s like having a private coaching session on your own schedule.",
      shortDescription:
        "Submit up to 30 minutes and get an in-depth review your match.",
    },
    {
      title: "Three and Me",
      price: "$90/hr- 30 per person",
      description:
        "You and up to two others can book a private coaching session with Colin that blends personalized instruction with live gameplay. These small-group sessions allow for focused skill development, strategic guidance, and real-time feedback, all while playing in a competitive, game-like environment.",
      shortDescription:
        "You and up to two others can book a private coaching session.",
    },
    {
      title: "Online Practice Guide",
      price: "$40",
      description:
        "This guide is a curated roadmap designed to help you reach the 4.0 level on your own schedule. Packed with targeted practice drills and intentional progressions, it empowers you to train effectively and independently. Whether you're working on fundamentals, refining strategy, or building consistency, this guide will elevate your training.",
      shortDescription:
        "This guide is a curated roadmap designed to help you reach the 4.0 level on your own schedule.",
    },
  ];

  return (
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
  );
}

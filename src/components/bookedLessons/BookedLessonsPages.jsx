import { useEffect, useState } from "react";
import { Container, Col, Row, Form } from "react-bootstrap";
import BookedLessonCard from "./BookedLessonCard";

export default function BookedLessonsPage(props) {
  const [bookedLessons, setBookedLessons] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    fetch(`https://cs571api.cs.wisc.edu/rest/su25/bucket/lessons`, {
      headers: {
        "X-CS571-ID": CS571.getBadgerId(),
      },
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json.results);
        const sortedLessonsByDate = Object.values(json.results)
          .filter((result) => result.location !== null)
          .sort((first, next) => new Date(first.date) - new Date(next.date));
        sortedLessonsByDate.forEach((l) => {
          const formattedDate = new Date(l.date);
          l.date = formattedDate.toLocaleString("en-US", {
            dateStyle: "medium",
            timeStyle: "short",
          });
        });
        setBookedLessons(sortedLessonsByDate);
      });
  }, []);

  return (
    <Container style={{ margin: "2rem auto" }}>
      <Form.Group>
        <Form.Label required htmlFor="name">
          Participant Name
        </Form.Label>
        <Form.Control required id="name" placeholder="Search by name" />
        <Form.Control.Feedback type="invalid">Required</Form.Control.Feedback>
      </Form.Group>
      {bookedLessons.length == 0 ? (
        <div>There are no lessons</div>
      ) : (
        <Row>
          {bookedLessons.map((lesson) => {
            return (
              <Col key={lesson.date} sm={12} md={6} lg={4}>
                <BookedLessonCard {...lesson} />
              </Col>
            );
          })}
        </Row>
      )}
    </Container>
  );
}

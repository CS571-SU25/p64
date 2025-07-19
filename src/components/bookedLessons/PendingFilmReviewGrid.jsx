import { Card, ListGroup, Row, Col, Container } from "react-bootstrap";
import { useState, useEffect } from "react";

export default function PendingFilmReviewGrid(props) {
  const [pendingReviews, setPendingReviews] = useState([]);

  useEffect(() => {
    setPendingReviews(() => {
      if (props.allLessons) {
        const sortedLessonsSubmittedAt = Object.values(props.allLessons)
          .filter((result) => result.location === null)
          .sort(
            (first, next) =>
              new Date(first.submittedAt) - new Date(next.submittedAt)
          );
        sortedLessonsSubmittedAt.forEach((l) => {
          const formattedDate = new Date(l.submittedAt);
          l.submittedAt = formattedDate.toLocaleString("en-US", {
            dateStyle: "medium",
            timeStyle: "short",
          });
        });

        return sortedLessonsSubmittedAt;
      }

      return [];
    });
  }, [props.allLessons]);

  return (
    <Container style={{ minHeight: "80vh" }}>
      {pendingReviews.length == 0 ? (
        <div>There are no film reviews currently pending.</div>
      ) : (
        <Row style={{ margin: "2rem" }}>
          {pendingReviews.map((review, index) => {
            return (
              <Col key={index} sm={12} md={6} lg={4}>
                <Card>
                  <Card.Body>
                    <Card.Title>Pending Review</Card.Title>
                    <Card.Subtitle>{review.participants[0]}</Card.Subtitle>
                    <Card.Text>Submitted on {review.submittedAt}</Card.Text>
                    <Card.Text>
                      <em>Submitted by {review.name}</em>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      )}
    </Container>
  );
}

import { Card, ListGroup, Row, Col, Container } from "react-bootstrap";
import { useState, useEffect } from "react";

export default function PendingFilmReviewGrid(props) {
  const [pendingReviews, setPendingReviews] = useState([]);

  useEffect(() => {
    setPendingReviews(() => {
      if (props.allLessons) {
        const reviews = Object.values(props.allLessons).filter(
          (result) => result.location === null
        );

        return reviews;
      }

      return [];
    });
  }, [props.allLessons]);

  return (
    <Container>
      {pendingReviews.length == 0 ? (
        <div>There are no film reviews currently pending.</div>
      ) : (
        <Row>
          {pendingReviews.map((review, index) => {
            return (
              <Col key={index} sm={12} md={6} lg={4}>
                <Card>
                  <Card.Body>
                    <Card.Title>Pending Review</Card.Title>
                    <Card.Subtitle>{review.participants[0]}</Card.Subtitle>
                    <em>Booked by {review.name}</em>
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

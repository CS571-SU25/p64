import { Card, Row, Col, Container, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

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
    <Container style={{ margin: "2rem auto" }}>
      <Row style={{ textAlign: "left", margin: "1rem auto" }}>
        <Col sm={12} md={6} style={{ margin: "1rem 0" }}>
          <Form.Group>
            <Form.Label required htmlFor="participantName">
              Participant Name
            </Form.Label>
            <Form.Control
              // value={participantName}
              // onChange={(e) => setParticipantName(e.target.value)}
              id="participantName"
              placeholder="Search by participant name"
            />
          </Form.Group>
        </Col>
        <Col sm={12} md={6} style={{ margin: "1rem 0" }}>
          <Form.Group>
            <Form.Label required htmlFor="bookedByName">
              Booked by Name
            </Form.Label>
            <Form.Control
              // value={bookedByName}
              // onChange={(e) => setBookedByName(e.target.value)}
              id="bookedByName"
              placeholder="Search by the person who booked the lesson"
            />
          </Form.Group>
        </Col>
        <Col sm={12} md={6} style={{ margin: "1rem 0" }}>
          <Row>
            <Form.Group>
              <Col sm={12}>
                <Form.Label htmlFor="submittedDate">Submitted Date</Form.Label>
              </Col>
              <Col sm={12}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    id="submittedDate"
                    label="Search by submitted date"
                    // value={dateValue}
                    // onChange={(newValue) => setDateValue(newValue)}
                  />
                </LocalizationProvider>
              </Col>
            </Form.Group>
          </Row>
        </Col>
      </Row>
      <hr />
      {pendingReviews.length == 0 ? (
        <div>There are no film reviews currently pending.</div>
      ) : (
        <Row style={{ margin: "2rem" }}>
          {pendingReviews.map((review, index) => {
            return (
              <Col key={index} sm={12} md={6} lg={4}>
                <Card style={{ margin: "1rem auto" }}>
                  <Card.Title>Pending Review</Card.Title>
                  <Card.Subtitle>
                    Participant: {review.participants[0]}
                  </Card.Subtitle>
                  <hr />
                  <Card.Body style={{ padding: 0, margin: 0 }}>
                    <em>
                      Submitted by {review.name} <br />
                      on {review.submittedAt}
                    </em>
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

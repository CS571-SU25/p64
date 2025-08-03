import { Card, Row, Col, Container, Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function PendingFilmReviewGrid(props) {
  const [pendingReviews, setPendingReviews] = useState([]);
  const [searchedPendingReview, setSearchedPendingReview] = useState([]);
  const [participantName, setParticipantName] = useState("");
  const [bookedByName, setBookedByName] = useState("");
  const [submittedDateValue, setSubmittedDateValue] = useState(null);

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

  useEffect(() => {
    setSearchedPendingReview(() => {
      let pendingReviewsToSearch = JSON.parse(JSON.stringify(pendingReviews));

      if (participantName.trim() !== "") {
        const resultsByParticipantName = pendingReviewsToSearch.filter(
          (lesson) =>
            lesson.participants.some((p) =>
              p.toLowerCase().includes(participantName.toLowerCase().trim())
            )
        );

        pendingReviewsToSearch = resultsByParticipantName;
      }

      if (bookedByName.trim() !== "") {
        const resultsByBookedBy = pendingReviewsToSearch.filter((lesson) =>
          lesson.name.toLowerCase().includes(bookedByName.toLowerCase().trim())
        );

        pendingReviewsToSearch = resultsByBookedBy;
      }

      if (submittedDateValue) {
        const formattedSearchDate = new Date(submittedDateValue.$d);
        const resultsByDate = pendingReviewsToSearch.filter((lesson) => {
          const lessonDate = new Date(lesson.submittedAt);
          return (
            lessonDate.getFullYear() === formattedSearchDate.getFullYear() &&
            lessonDate.getMonth() === formattedSearchDate.getMonth() &&
            lessonDate.getDate() === formattedSearchDate.getDate()
          );
        });

        pendingReviewsToSearch = resultsByDate;
      }

      return pendingReviewsToSearch;
    });
  }, [participantName, bookedByName, pendingReviews, submittedDateValue]);

  function clearSearch() {
    setParticipantName("");
    setBookedByName("");
    setSubmittedDateValue(null);
  }

  return (
    <Container style={{ margin: "2rem auto" }}>
      <Row style={{ textAlign: "left", margin: "1rem auto" }}>
        <Col sm={12} lg={6} style={{ margin: "1rem 0" }}>
          <Form.Group>
            <Form.Label required htmlFor="participantName">
              Participant Name
            </Form.Label>
            <Form.Control
              value={participantName}
              onChange={(e) => setParticipantName(e.target.value)}
              id="participantName"
              placeholder="Search by participant name"
            />
          </Form.Group>
        </Col>
        <Col sm={12} lg={6} style={{ margin: "1rem 0" }}>
          <Form.Group>
            <Form.Label required htmlFor="bookedByName">
              Booked by Name
            </Form.Label>
            <Form.Control
              value={bookedByName}
              onChange={(e) => setBookedByName(e.target.value)}
              id="bookedByName"
              placeholder="Search by the person who booked the lesson"
            />
          </Form.Group>
        </Col>
        <Col sm={12} lg={6} style={{ margin: "1rem 0" }}>
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
                    value={submittedDateValue}
                    onChange={(newValue) => setSubmittedDateValue(newValue)}
                  />
                </LocalizationProvider>
              </Col>
            </Form.Group>
          </Row>
        </Col>
      </Row>
      <Button variant="light" onClick={clearSearch}>
        Clear Search
      </Button>
      <hr />
      {searchedPendingReview.length == 0 ? (
        <div style={{ minHeight: "40vh", paddingTop: "3rem" }}>
          There are currently no films pending for review.
        </div>
      ) : (
        <Row style={{ minHeight: "40vh" }}>
          {searchedPendingReview.map((review, index) => {
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

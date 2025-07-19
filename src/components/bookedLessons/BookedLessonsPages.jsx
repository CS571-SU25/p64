import { useEffect, useState } from "react";
import { Container, Col, Row, Form } from "react-bootstrap";
import BookedLessonCard from "./BookedLessonCard";

export default function BookedLessonsPage(props) {
  const [bookedLessons, setBookedLessons] = useState([]);
  const [searchedBookedLessons, setSearchedBookedLessons] = useState([]);
  const [participantName, setParticipantName] = useState("");
  const [bookedByName, setBookedByName] = useState("");

  useEffect(() => {
    fetch(`https://cs571api.cs.wisc.edu/rest/su25/bucket/lessons`, {
      headers: {
        "X-CS571-ID": CS571.getBadgerId(),
      },
    })
      .then((res) => res.json())
      .then((json) => {
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

  useEffect(() => {
    setSearchedBookedLessons(() => {
      let bookedLessonsToSearch = JSON.parse(JSON.stringify(bookedLessons));

      if (participantName.trim() !== "") {
        const resultsByParticipantName = bookedLessonsToSearch.filter(
          (lesson) =>
            lesson.participants.some((p) =>
              p.toLowerCase().includes(participantName.toLowerCase().trim())
            )
        );

        bookedLessonsToSearch = resultsByParticipantName;
      }

      if (bookedByName.trim() !== "") {
        const resultsByBookedBy = bookedLessonsToSearch.filter((lesson) =>
          lesson.name.toLowerCase().includes(bookedByName.toLowerCase().trim())
        );

        bookedLessonsToSearch = resultsByBookedBy;
      }

      return bookedLessonsToSearch;
    });
  }, [participantName, bookedByName, bookedLessons]);

  return (
    <Container style={{ margin: "2rem auto" }}>
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
      <Form.Group>
        <Form.Label required htmlFor="bookedByName">
          Booked by Name
        </Form.Label>
        <Form.Control
          value={bookedByName}
          onChange={(e) => setBookedByName(e.target.value)}
          id="bookedByName"
          placeholder="Search by the person who booked the name"
        />
      </Form.Group>
      {searchedBookedLessons.length == 0 ? (
        <div>There are no lessons</div>
      ) : (
        <Row>
          {searchedBookedLessons.map((lesson) => {
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

import { useEffect, useState } from "react";
import { Container, Col, Row, Form } from "react-bootstrap";
import BookedLessonCard from "./BookedLessonCard";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function InPersonLessonsView(props) {
  const [bookedLessons, setBookedLessons] = useState([]);
  const [searchedBookedLessons, setSearchedBookedLessons] = useState([]);
  const [participantName, setParticipantName] = useState("");
  const [bookedByName, setBookedByName] = useState("");
  const [location, setLocation] = useState("0");
  const [dateValue, setDateValue] = useState(null);

  useEffect(() => {
    setBookedLessons(() => {
      if (props.allLessons) {
        const sortedLessonsByDate = Object.values(props.allLessons)
          .filter((result) => result.location !== null)
          .sort((first, next) => new Date(first.date) - new Date(next.date));
        sortedLessonsByDate.forEach((l) => {
          const formattedDate = new Date(l.date);
          l.date = formattedDate.toLocaleString("en-US", {
            dateStyle: "medium",
            timeStyle: "short",
          });
        });

        return sortedLessonsByDate;
      }

      return [];
    });
  }, [props.allLessons]);

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

      if (location !== "0") {
        const resultsByLocation = bookedLessonsToSearch.filter(
          (lesson) => lesson.location === location
        );

        bookedLessonsToSearch = resultsByLocation;
      }

      if (dateValue) {
        const formattedSearchDate = new Date(dateValue.$d);
        const resultsByDate = bookedLessonsToSearch.filter((lesson) => {
          const lessonDate = new Date(lesson.date);
          return (
            lessonDate.getFullYear() === formattedSearchDate.getFullYear() &&
            lessonDate.getMonth() === formattedSearchDate.getMonth() &&
            lessonDate.getDate() === formattedSearchDate.getDate()
          );
        });

        bookedLessonsToSearch = resultsByDate;
      }

      return bookedLessonsToSearch;
    });
  }, [participantName, bookedByName, bookedLessons, location, dateValue]);

  return (
    <Container style={{ margin: "2rem auto" }}>
      <Row style={{ textAlign: "left", margin: "1rem auto" }}>
        <Col sm={12} md={6} style={{ margin: "1rem 0" }}>
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
        <Col sm={12} md={6} style={{ margin: "1rem 0" }}>
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
        <Col sm={12} md={6} style={{ margin: "1rem 0" }}>
          <Form.Group>
            <Form.Label htmlFor="location">Location</Form.Label>
            <Form.Select
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            >
              <option value="0">Search by location</option>
              <option value="1">Garner Park- 333 S Rosa Rd</option>
              <option value="2">
                Pickleball Pro Courts- 2907 N Sherman Ave
              </option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col sm={12} md={6} style={{ margin: "1rem 0" }}>
          <Row>
            <Form.Group>
              <Col sm={12}>
                <Form.Label htmlFor="lessonDate">Lesson Date</Form.Label>
              </Col>
              <Col sm={12}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    id="lessonDate"
                    label="Search by date"
                    value={dateValue}
                    onChange={(newValue) => setDateValue(newValue)}
                  />
                </LocalizationProvider>
              </Col>
            </Form.Group>
          </Row>
        </Col>
      </Row>
      <hr />
      {searchedBookedLessons.length == 0 ? (
        <div style={{ minHeight: "40vh", paddingTop: "3rem" }}>
          There are currently no lessons.
        </div>
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

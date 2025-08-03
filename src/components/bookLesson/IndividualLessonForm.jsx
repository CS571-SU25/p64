import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import ContactInfoForm from "./ContactInfoForm";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { useRef } from "react";
import ParticipantsFormGroup from "../bookLesson/ParticipantsFormGroup";
import { isWeekend } from "../../consts/isWeekend";

export default function IndividualLessonForm(props) {
  const [formValidated, setFormValidated] = useState(false);
  const [dateValue, setDateValue] = useState(null);
  const [dateError, setDateError] = useState(false);
  const [bookedLessons, setBookedLessons] = useState([]);

  const location = useRef();
  const participant = useRef();
  const additionalNotes = useRef();
  const name = useRef();
  const email = useRef();
  const phoneNumber = useRef();

  const participant1 = useRef();
  const participant2 = useRef();
  const participant3 = useRef();

  const fileUpload = useRef();

  useEffect(() => {
    fetch(`https://cs571api.cs.wisc.edu/rest/su25/bucket/lessons`, {
      headers: {
        "X-CS571-ID": CS571.getBadgerId(),
      },
    })
      .then((res) => res.json())
      .then((json) => {
        const allBookedLessons = Object.values(json.results)
          .filter((result) => result.location !== null)
          .sort((first, next) => new Date(first.date) - new Date(next.date))
          .map((lesson) => new Date(lesson.date));
        setBookedLessons(() => allBookedLessons);
      });
  }, []);

  const updateDateValue = (e) => {
    setDateValue(e);
    if (!dateValue) {
      setDateError(true);
    } else {
      setDateError(false);
    }
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    if (!dateValue) {
      setDateError(true);
    }

    setFormValidated(true);

    if (form.checkValidity() === false || (!dateValue && props.id !== 3)) {
      return;
    }

    const inputAdditionalNotes = additionalNotes.current.value;
    const inputName = name.current.value;
    const inputEmail = email.current.value;
    const inputPhoneNumber = phoneNumber.current.value;

    let participants = [];
    if (props.id === 1 || props.id === 3) {
      const inputParticipant = participant.current.value;
      participants = [inputParticipant];
    }
    if (props.id === 2) {
      const inputParticipant1 = participant1.current.value;
      const inputParticipant2 = participant2.current.value;
      const inputParticipant3 = participant3.current.value;

      participants = [inputParticipant1, inputParticipant2, inputParticipant3];
    }

    fetch(`https://cs571api.cs.wisc.edu/rest/su25/bucket/lessons`, {
      method: "POST",
      headers: {
        "X-CS571-ID": CS571.getBadgerId(),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        location: location.current?.value ?? null,
        date: dateValue,
        participants: participants ?? null,
        notes: inputAdditionalNotes,
        name: inputName,
        email: inputEmail,
        phoneNumber: inputPhoneNumber,
        video: fileUpload.current?.value ?? null,
        submittedAt: new Date(),
      }),
    }).then((res) => {
      if (res.status === 200) {
        setFormValidated(false);
        additionalNotes.current.value = "";
        name.current.value = "";
        email.current.value = "";
        phoneNumber.current.value = "";
        if (props.id === 1 || props.id === 3) {
          participant.current.value = "";
        }
        if (props.id === 2) {
          participant1.current.value = "";
          participant2.current.value = "";
          participant3.current.value = "";
        }
        if (props.id === 1 || props.id == 2) {
          location.current.value = "";
        }

        setDateValue(null);
        props.onFormSubmitSuccess();
      }
    });
  };

  const isOutOfHours = (timeValue) => {
    const hour = timeValue.$H;
    console.log(timeValue);

    return hour < 8 || hour > 19;
  };

  const isSameDate = (date1, date2) =>
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate();

  const timeAlreadyBooked = (timeValue, clockType) => {
    const lessonsOnSameDate = bookedLessons.filter((blocked) => {
      const selectedDate = new Date(timeValue);
      return isSameDate(selectedDate, blocked);
    });

    if (lessonsOnSameDate.length === 0) return false;

    const hour = timeValue.$H;

    return lessonsOnSameDate.some((blocked) => {
      return blocked.getHours() === hour;
    });
  };

  const shouldDisableTime = (timeValue, clockType) => {
    return timeAlreadyBooked(timeValue, clockType) || isOutOfHours(timeValue);
  };

  return (
    <div style={{ margin: "2rem" }}>
      <h1>{props.title}</h1>
      <h2> {props.price}</h2>
      <div>{props.description}</div>
      <Form
        style={{ width: "60%", margin: "2rem auto", textAlign: "left" }}
        noValidate
        validated={formValidated}
        onSubmit={handleSubmit}
      >
        <div>
          <h2>Lesson Info</h2>
          {props.id === 3 ? (
            <Form.Group className="mb-3">
              <Form.Label htmlFor="Video File Upload">
                Default file input example
              </Form.Label>
              <Form.Control
                id="Video File Upload"
                required
                type="file"
                ref={fileUpload}
              />
            </Form.Group>
          ) : (
            <></>
          )}
          {props.id !== 3 ? (
            <>
              <Form.Group style={{ margin: "1rem 0" }}>
                <Form.Label htmlFor="location">Location</Form.Label>
                <Form.Select id="location" required ref={location}>
                  <option value="1">Garner Park- 333 S Rosa Rd</option>
                  <option value="2">
                    Pickleball Pro Courts- 2907 N Sherman Ave
                  </option>
                </Form.Select>
              </Form.Group>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                  required
                  disablePast
                  label="Select lesson date"
                  value={dateValue}
                  onChange={updateDateValue}
                  shouldDisableDate={isWeekend}
                  shouldDisableTime={shouldDisableTime}
                  views={["year", "month", "day", "hours"]}
                  slotProps={{
                    textField: {
                      required: true,
                      error: dateError,
                      helperText: dateError ? "This field is required" : "",
                    },
                  }}
                />
              </LocalizationProvider>
            </>
          ) : (
            <></>
          )}
          {props.id === 1 ? (
            <Form.Group style={{ margin: "1rem 0" }}>
              <Form.Label htmlFor="Participant">Participant</Form.Label>
              <Form.Control
                ref={participant}
                id="Participant"
                required
                type="name"
                placeholder="Enter name"
              />
            </Form.Group>
          ) : (
            <></>
          )}
          {props.id === 3 ? (
            <Form.Group style={{ margin: "1rem 0" }}>
              <Form.Label htmlFor="Person to Review">
                Person to Review
              </Form.Label>
              <Form.Control
                ref={participant}
                id="Person to Review"
                required
                type="name"
                placeholder="Enter name"
              />
            </Form.Group>
          ) : (
            <></>
          )}
          {props.id === 2 ? (
            <ParticipantsFormGroup
              participant1={participant1}
              participant2={participant2}
              participant3={participant3}
            />
          ) : (
            <></>
          )}
          <Form.Group style={{ margin: "1rem 0" }}>
            <Form.Label htmlFor="additional-notes">Additional Notes</Form.Label>
            <Form.Control
              ref={additionalNotes}
              rows={5}
              id="additional-notes"
              as="textarea"
              placeholder="Enter some notes about this lesson"
            />
          </Form.Group>
        </div>
        <div>
          <ContactInfoForm
            name={name}
            email={email}
            phoneNumber={phoneNumber}
          />
          <Button variant="primary" onClick={(e) => handleSubmit(e)}>
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
}

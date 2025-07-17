import Form from "react-bootstrap/Form";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import ContactInfoForm from "./ContactInfoForm";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

export default function IndividualLessonForm(props) {
  const [formValidated, setFormValidated] = useState(false);
  const [dateValue, setDateValue] = useState(null);
  const [dateError, setDateError] = useState(false);

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
              <Form.Label htmlFor="video-file-input">
                Default file input example
              </Form.Label>
              <Form.Control id="video-file-input" required type="file" />
            </Form.Group>
          ) : (
            <></>
          )}
          {props.id !== 3 ? (
            <>
              <Form.Group style={{ margin: "1rem 0" }}>
                <Form.Label htmlFor="location">Location</Form.Label>
                <Form.Select id="location" required>
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
                  onChange={(newDate) => setDateValue(newDate)}
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
                id="Participant"
                required
                type="name"
                placeholder="Enter name"
              />
            </Form.Group>
          ) : (
            <></>
          )}
          {props.id === 2 ? (
            <>
              {" "}
              <Form.Group style={{ margin: "1rem 0" }}>
                <Form.Label htmlFor="Participant 1">Participant 1</Form.Label>
                <Form.Control
                  id="Participant 1"
                  required
                  type="name"
                  placeholder="Enter name"
                />
              </Form.Group>
              <Form.Group style={{ margin: "1rem 0" }}>
                <Form.Label htmlFor="Participant 2">Participant 2</Form.Label>
                <Form.Control
                  id="Participant 2"
                  required
                  type="name"
                  placeholder="Enter name"
                />
                <Form.Control.Feedback type="invalid">
                  You must have at least 2 participants for this lesson.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group style={{ margin: "1rem 0" }}>
                <Form.Label htmlFor="Participant 3">Participant 3</Form.Label>
                <Form.Control
                  id="Participant 3"
                  type="name"
                  placeholder="Enter name"
                />
              </Form.Group>
            </>
          ) : (
            <></>
          )}
          <Form.Group style={{ margin: "1rem 0" }}>
            <Form.Label htmlFor="additional-notes">Additional Notes</Form.Label>
            <Form.Control
              rows={5}
              id="additional-notes"
              as="textarea"
              placeholder="Enter some notes about this lesson"
            />
          </Form.Group>
        </div>
        <div>
          <ContactInfoForm />
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
}

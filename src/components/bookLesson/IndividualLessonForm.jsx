import Form from "react-bootstrap/Form";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import ContactInfoForm from "./ContactInfoForm";

export default function IndividualLessonForm(props) {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div style={{ margin: "2rem" }}>
      <h1>{props.title}</h1>
      <h2> {props.price}</h2>
      <div>{props.description}</div>
      <Form
        style={{ width: "80%", margin: "2rem auto", textAlign: "left" }}
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
      >
        <div>
          <h2>Lesson Info</h2>
          <Form.Group controlId="name" style={{ margin: "1rem 0" }}>
            <Form.Label>Location</Form.Label>
            <Form.Select required>
              <option value="1">123 Some Address Drive</option>
              <option value="2">123 Some Address Drive</option>
              <option value="3">123 Some Address Drive</option>
            </Form.Select>
          </Form.Group>
          <Form.Group controlId="name" style={{ margin: "1rem 0" }}>
            <Form.Label>Participant 1</Form.Label>
            <Form.Control required type="name" placeholder="Enter name" />
          </Form.Group>
          <Form.Group controlId="name" style={{ margin: "1rem 0" }}>
            <Form.Label>Participant 2</Form.Label>
            <Form.Control required type="name" placeholder="Enter name" />
            <Form.Control.Feedback type="invalid">
              You must have at least 2 participants for this lesson.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="name" style={{ margin: "1rem 0" }}>
            <Form.Label>Participant 3</Form.Label>
            <Form.Control type="name" placeholder="Enter name" />
          </Form.Group>
          <Form.Group controlId="name" style={{ margin: "1rem 0" }}>
            <Form.Label>Additional Notes</Form.Label>
            <Form.Control
              type="name"
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

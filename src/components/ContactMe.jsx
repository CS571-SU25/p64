import Form from "react-bootstrap/Form";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import ContactInfoForm from "./bookLesson/ContactInfoForm";

export default function ContactMe() {
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
    <div
      style={{
        margin: "2rem",
      }}
    >
      <h1>Contact Me</h1>
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        style={{
          margin: "2rem auto",
          width: "50%",
          textAlign: "left",
        }}
      >
        <h2>How Can I Help?</h2>
        <Form.Group>
          <Form.Label required htmlFor="question">
            Question
          </Form.Label>
          <Form.Control
            required
            id="question"
            as="textarea"
            rows={5}
            placeholder="Please write your question here"
          />
          <Form.Control.Feedback type="invalid">Required</Form.Control.Feedback>
        </Form.Group>
        <ContactInfoForm />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

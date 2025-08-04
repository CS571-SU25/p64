import { useState } from "react";
import ContactInfoForm from "./bookLesson/ContactInfoForm";
import { useRef } from "react";
import { Alert, Button, Form } from "react-bootstrap";

export default function ContactMe() {
  const [validated, setValidated] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const question = useRef();
  const name = useRef();
  const email = useRef();
  const phoneNumber = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
      return;
    }

    const inputQuestion = question.current.value;
    const inputName = name.current.value;
    const inputEmail = email.current.value;
    const inputPhoneNumber = phoneNumber.current.value;

    window.scrollTo({
      top: 0,
      left: 0,
    });

    fetch(`https://cs571api.cs.wisc.edu/rest/su25/bucket/questions`, {
      method: "POST",
      headers: {
        "X-CS571-ID": CS571.getBadgerId(),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        question: inputQuestion,
        name: inputName,
        email: inputEmail,
        phoneNumber: inputPhoneNumber,
      }),
    }).then((res) => {
      if (res.status === 200) {
        setShowSuccessAlert(() => true);
        setTimeout(() => setShowSuccessAlert(() => false), 5000);
        setValidated(false);
        question.current.value = "";
        name.current.value = "";
        email.current.value = "";
        phoneNumber.current.value = "";
      }
    });
  };

  return (
    <div
      style={{
        margin: "2rem",
      }}
    >
      {showSuccessAlert ? (
        <Alert
          variant="success"
          onClose={() => setShowSuccessAlert(false)}
          dismissible
          className="ms-auto"
          style={{ width: "30%" }}
        >
          Question successfully submitted!
        </Alert>
      ) : (
        <></>
      )}
      <h1>Contact Me</h1>
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        style={{
          margin: "2rem auto",
          width: "70%",
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
            ref={question}
          />
          <Form.Control.Feedback type="invalid">Required</Form.Control.Feedback>
        </Form.Group>
        <ContactInfoForm
          name={name}
          email={email}
          phoneNumber={phoneNumber}
          useH2Heading={true}
        />
        <Button variant="primary" type="submit" onSubmit={handleSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import ContactInfoForm from "./bookLesson/ContactInfoForm";

export default function ContactMe() {
  return (
    <div
      style={{
        margin: "2rem",
        height: "80vh",
      }}
    >
      <h1>Contact Me</h1>
      <Form
        style={{
          margin: "2rem auto",
          width: "50%",
          textAlign: "left",
        }}
      >
        <h2>How Can I Help?</h2>
        <Form.Group>
          <Form.Label htmlFor="question">Question</Form.Label>
          <Col>
            <Form.Control
              id="question"
              as="textarea"
              rows={5}
              placeholder="Please write your question here"
            />
          </Col>
        </Form.Group>
        <ContactInfoForm />
        <Button variant="primary">Submit</Button>
      </Form>
    </div>
  );
}

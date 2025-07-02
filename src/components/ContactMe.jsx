import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

export default function ContactMe() {
  return (
    <Form style={{ width: "100%" }}>
      <Form.Group as={Row} controlId="email">
        <Form.Label column>Email</Form.Label>
        <Col>
          <Form.Control placeholder="name@email.com" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="description">
        <Form.Label column>Description</Form.Label>

        <Col>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Please write your question here"
          />
        </Col>
      </Form.Group>

      <Button variant="primary">Submit</Button>
    </Form>
  );
}

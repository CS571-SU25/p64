import Form from "react-bootstrap/Form";

import Button from "react-bootstrap/Button";

export default function IndividualLessonForm(props) {
  return (
    <Form>
      <h2>
        {props.title}: {props.price}
      </h2>
      <div>{props.description}</div>

      <Form.Group controlId="location">
        <Form.Label>Location</Form.Label>
        <Form.Select>
          <option value="1">123 Some Address Drive</option>
          <option value="2">123 Some Address Drive</option>
          <option value="3">123 Some Address Drive</option>
        </Form.Select>
      </Form.Group>

      <Form.Group controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control type="name" placeholder="Enter name" />
      </Form.Group>
      <Form.Group controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group controlId="phone-number">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="phone-number" placeholder="Enter phone number" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

import Form from "react-bootstrap/Form";

export default function ContactInfoForm() {
  return (
    <div>
      <h2>Your Contact Info</h2>
      <Form.Group controlId="name" style={{ margin: "1rem 0" }}>
        <Form.Label>Name</Form.Label>
        <Form.Control required type="name" placeholder="Enter name" />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="email" style={{ margin: "1rem 0" }}>
        <Form.Label>Email address</Form.Label>
        <Form.Control required type="email" placeholder="Enter email" />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="phone-number" style={{ margin: "1rem 0" }}>
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          required
          type="phone-number"
          placeholder="Enter phone number"
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>
    </div>
  );
}

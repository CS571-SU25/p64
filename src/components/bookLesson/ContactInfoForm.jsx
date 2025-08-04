import Form from "react-bootstrap/Form";

export default function ContactInfoForm(props) {
  return (
    <div style={{ marginTop: "1rem" }}>
      <h3>Your Contact Info</h3>
      <Form.Group style={{ margin: "1rem 0" }}>
        <Form.Label htmlFor="name">Name</Form.Label>
        <Form.Control
          required
          id="name"
          type="name"
          placeholder="Enter name"
          ref={props.name}
        />
        <Form.Control.Feedback type="invalid">Required</Form.Control.Feedback>
      </Form.Group>
      <Form.Group style={{ margin: "1rem 0" }}>
        <Form.Label htmlFor="email">Email address</Form.Label>
        <Form.Control
          required
          id="email"
          type="email"
          placeholder="Enter email"
          ref={props.email}
        />
        <Form.Control.Feedback type="invalid">
          Please enter a valid email
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group style={{ margin: "1rem 0" }}>
        <Form.Label htmlFor="phoneNumber">Phone Number</Form.Label>
        <Form.Control
          required
          id="phoneNumber"
          type="phone-number"
          placeholder="Enter phone number"
          ref={props.phoneNumber}
        />
        <Form.Control.Feedback type="invalid">Required</Form.Control.Feedback>
      </Form.Group>
    </div>
  );
}

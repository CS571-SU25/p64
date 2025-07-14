import Form from "react-bootstrap/Form";

export default function ContactInfoForm() {
  return (
    <div style={{ marginTop: "1rem" }}>
      <h2>Your Contact Info</h2>
      <Form.Group style={{ margin: "1rem 0" }}>
        <Form.Label htmlFor="name">Name</Form.Label>
        <Form.Control required id="name" type="name" placeholder="Enter name" />
      </Form.Group>
      <Form.Group style={{ margin: "1rem 0" }}>
        <Form.Label htmlFor="email">Email address</Form.Label>
        <Form.Control
          required
          id="email"
          type="email"
          placeholder="Enter email"
        />
      </Form.Group>
      <Form.Group style={{ margin: "1rem 0" }}>
        <Form.Label htmlFor="phoneNumber">Phone Number</Form.Label>
        <Form.Control
          required
          id="phoneNumber"
          type="phone-number"
          placeholder="Enter phone number"
        />
      </Form.Group>
    </div>
  );
}

import { Form } from "react-bootstrap";

export default function ParticipantsFormGroup(props) {
  return (
    <>
      <Form.Group style={{ margin: "1rem 0" }}>
        <Form.Label htmlFor="participant1">Participant 1</Form.Label>
        <Form.Control
          ref={props.participant1}
          id="participant1"
          required
          type="name"
          placeholder="Enter name"
        />
      </Form.Group>
      <Form.Group style={{ margin: "1rem 0" }}>
        <Form.Label htmlFor="participant2">Participant 2</Form.Label>
        <Form.Control
          ref={props.participant2}
          id="participant2"
          required
          type="name"
          placeholder="Enter name"
        />
        <Form.Control.Feedback type="invalid">
          You must have at least 2 participants for this lesson.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group style={{ margin: "1rem 0" }}>
        <Form.Label htmlFor="participant3">Participant 3</Form.Label>
        <Form.Control
          id="participant3"
          type="name"
          placeholder="Enter name"
          ref={props.participant3}
        />
      </Form.Group>
    </>
  );
}

import Modal from "react-bootstrap/Modal";
import IndividualLessonForm from "../bookLesson/IndividualLessonForm";

export default function FormModal(props) {
  return (
    <Modal
      style={{ textAlign: "center" }}
      show={props.show}
      onHide={props.onHide}
      size="lg"
    >
      <IndividualLessonForm {...props} />
    </Modal>
  );
}

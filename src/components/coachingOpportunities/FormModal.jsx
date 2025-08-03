import Modal from "react-bootstrap/Modal";
import BookLessonForm from "../bookLesson/BookLessonForm";

export default function FormModal(props) {
  return (
    <Modal
      style={{ textAlign: "center" }}
      show={props.show}
      onHide={props.onHide}
      size="lg"
    >
      <BookLessonForm
        {...props}
        onFormSubmitSuccess={props.onFormSubmitSuccess}
      />
    </Modal>
  );
}

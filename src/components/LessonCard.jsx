import { Button, Card } from "react-bootstrap";
import FormModal from "./coachingOpportunities/FormModal";
import { useState } from "react";

export default function LessonCard(props) {
  const [showFormModal, setShowFormModal] = useState(false);

  const handleFormModalClose = () => setShowFormModal(false);
  const handleFormModalShow = () => setShowFormModal(true);

  const onFormSubmitSuccess = () => {
    handleFormModalClose();
    props.showAlert();
  };

  return (
    <>
      <Card
        style={{
          width: props.width,
          height: props.height,
          textAlign: "center",
          margin: "auto",
        }}
      >
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle>{props.price}</Card.Subtitle>
        <Card.Body
          style={{
            alignContent: "center",
          }}
        >
          {props.showLongDescription ? (
            <Card.Text>{props.description}</Card.Text>
          ) : (
            <Card.Text>{props.shortDescription}</Card.Text>
          )}
        </Card.Body>
        {props.id === 1 || props.id === 2 ? (
          <Button variant="primary" onClick={handleFormModalShow}>
            Book Lesson
          </Button>
        ) : (
          <div></div>
        )}
        {props.id === 3 ? (
          <Button variant="primary" onClick={handleFormModalShow}>
            Submit Footage
          </Button>
        ) : (
          <div></div>
        )}
        {props.id === 4 ? (
          <a href="Guide.pdf" download="Online-Practice-Guide.pdf">
            <Button style={{ width: "100%" }} variant="primary">
              Get PDF
            </Button>
          </a>
        ) : (
          <div></div>
        )}
      </Card>
      <FormModal
        show={showFormModal}
        onHide={handleFormModalClose}
        onFormSubmitSuccess={onFormSubmitSuccess}
        {...props}
      />
    </>
  );
}

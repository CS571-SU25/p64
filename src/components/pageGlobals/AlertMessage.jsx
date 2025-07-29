import { Alert } from "react-bootstrap";

export default function AlertMessage(props) {
  return (
    <div>
      {props.showSuccessAlert ? (
        <Alert
          variant="success"
          onClose={props.setShowSuccessAlert}
          dismissible
          className="ms-auto"
          style={{
            width: "60%",
            margin: "1rem",
            position: "absolute",
            right: 0,
          }}
        >
          {props.message}
        </Alert>
      ) : (
        <></>
      )}
    </div>
  );
}

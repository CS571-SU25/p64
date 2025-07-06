import LessonTypesGrid from "./LessonTypesGrid";
import Stack from "react-bootstrap/Stack";

export default function CoachingOpportunities() {
  return (
    <div style={{ marginTop: "6rem" }}>
      <h2>Coaching Opportunities</h2>
      <Stack
        style={{ backgroundColor: "white", textAlign: "left", width: "100%" }}
        fluid
      >
        <h3>In Person Lessons</h3>
        <LessonTypesGrid showLongDescription={true} height={"600px"} />
      </Stack>
    </div>
  );
}

import LessonTypesGrid from "./LessonTypesGrid";

export default function CoachingOpportunities() {
  return (
    <div style={{ margin: "6rem", width: "100%" }}>
      <h2>Coaching Opportunities</h2>
      <LessonTypesGrid showLongDescription={true} height={"600px"} />
    </div>
  );
}

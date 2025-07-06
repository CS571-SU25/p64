import LessonTypesGrid from "./LessonTypesGrid";

export default function CoachingOpportunities() {
  return (
    <div style={{ margin: "3rem" }}>
      <h1>Coaching Opportunities</h1>
      <LessonTypesGrid showLongDescription={true} height={"600px"} />
    </div>
  );
}

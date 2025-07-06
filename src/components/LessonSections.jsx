import Stack from "react-bootstrap/Stack";
import { lessonTypes } from "../BookLesson";
import LessonCard from "../LessonCard";

export default function LessonSections() {
  return (
    <Stack style={{ backgroundColor: "purple" }}>
      <h2 style={{ textAlign: "left" }}>In-Person Lessons</h2>
      <Stack direction="horizontal">
        {lessonTypes.map((lesson) => {
          return (
            <div style={{ margin: "1rem" }}>
              <LessonCard
                key={lesson.title}
                {...lesson}
                showLongDescription={true}
                height={"400px"}
                width={"300px"}
              />
            </div>
          );
        })}
      </Stack>
    </Stack>
  );
}

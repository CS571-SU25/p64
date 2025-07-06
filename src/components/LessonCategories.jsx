import Stack from "react-bootstrap/Stack";
import { lessonTypes } from "./BookLesson";
import LessonCard from "./LessonCard";

export default function LessonCategories() {
  return (
    <Stack style={{ backgroundColor: "purple", margin: "2rem" }}>
      <h2 style={{ textAlign: "left" }}>In-Person Lessons</h2>
      <Stack direction="horizontal" className="mx-auto">
        {lessonTypes.map((lesson) => {
          return (
            <div style={{ margin: "1rem" }}>
              <LessonCard
                key={lesson.title}
                {...lesson}
                showLongDescription={true}
                height={"400px"}
                width={"500px"}
              />
            </div>
          );
        })}
      </Stack>
    </Stack>
  );
}

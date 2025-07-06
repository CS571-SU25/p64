import Stack from "react-bootstrap/Stack";
import LessonCard from "./LessonCard";

export default function LessonCategories(props) {
  return (
    <Stack style={{ backgroundColor: "#e68649", margin: "2rem" }}>
      <h2 style={{ padding: "1rem" }}>{props.heading}</h2>
      <Stack direction="horizontal" className="mx-auto">
        {props.data.map((lesson) => {
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

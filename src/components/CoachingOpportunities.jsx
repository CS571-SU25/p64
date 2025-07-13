import LessonCategories from "./LessonCategories";
import { lessonTypes } from "./BookLesson";

export default function CoachingOpportunities() {
  const inPersonLessons = lessonTypes.filter((lesson) => lesson.inPerson);
  const onlineLessons = lessonTypes.filter((lesson) => !lesson.inPerson);

  return (
    <div>
      <LessonCategories data={inPersonLessons} heading={"In-Person Lessons"} />
      <LessonCategories data={onlineLessons} heading={"Online Coaching"} />
    </div>
  );
}

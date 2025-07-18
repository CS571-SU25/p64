import AboutColin from "../homePage/AboutColin";
import CoachingExperienceGrid from "./CoachingExperienceGrid";
import GettingIntoPickleball from "./GettingIntoPickleball";
import TennisBackground from "./TennisBackground";

export default function AboutMe() {
  /* Text from: https://www.lipsum.com/feed/html */
  return (
    <div>
      <AboutColin />
      <CoachingExperienceGrid />
      <GettingIntoPickleball />
      <TennisBackground />
    </div>
  );
}

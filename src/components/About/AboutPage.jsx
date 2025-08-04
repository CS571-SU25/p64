import AboutColin from "../homePage/AboutColin";
import CoachingExperienceGrid from "./CoachingExperienceGrid";
import GettingIntoPickleball from "./GettingIntoPickleball";
import TennisBackground from "./TennisBackground";

export default function AboutPage() {
  return (
    <div>
      <AboutColin showHeading={true} />
      <CoachingExperienceGrid />
      <hr />
      <GettingIntoPickleball />
      <hr />
      <TennisBackground />
    </div>
  );
}

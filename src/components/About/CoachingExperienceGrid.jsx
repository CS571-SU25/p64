import { Container, Row, Col } from "react-bootstrap";
import { coachingExperience } from "../../consts/coachingExperience";
import ExperienceCard from "./ExperienceCard";

export default function CoachingExperienceGrid() {
  return (
    <Container style={{ margin: "2rem auto" }}>
      <h2>Coaching Experience</h2>
      <Row>
        {coachingExperience.map((experience) => {
          return (
            <Col key={experience.id} sm={12} md={12} lg={6}>
              <ExperienceCard
                heading={experience.title}
                height={"250px"}
                subtitle={experience.location}
                startDate={experience.startDate}
                endDate={experience.endDate}
                tasks={experience.tasks}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

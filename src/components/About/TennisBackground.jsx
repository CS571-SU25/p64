import { Container, Row, Col } from "react-bootstrap";
import { schoolExperiences } from "../../consts/schoolExperiences";
import ExperienceCard from "./ExperienceCard";

export default function TennisBackground() {
  return (
    <Container style={{ margin: "2rem auto" }}>
      <h2>Tennis Background</h2>
      <Row>
        {schoolExperiences.map((experience) => {
          return (
            <Col key={experience.id} sm={12} md={12} lg={6} xl={4}>
              <ExperienceCard
                src={experience.src}
                alt={experience.alt}
                heading={experience.location}
                height={"480px"}
                subtitle={`${experience.startDate} - ${experience.endDate}`}
                startDate={experience.startDate}
                endDate={experience.endDate}
                tasks={experience.details}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

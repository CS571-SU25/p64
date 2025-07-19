import { useState } from "react";
import InPersonLessonsView from "./InPersonLessonsView";
import { Tabs, Tab } from "react-bootstrap";

export default function BookedLessonsPage(props) {
  const [key, setKey] = useState("inPersonLessons");

  return (
    <Tabs
      style={{
        marginTop: "2rem",
      }}
      activeKey={key}
      onSelect={(k) => setKey(k)}
    >
      <Tab eventKey="inPersonLessons" title="In Person Lessons">
        <InPersonLessonsView />
      </Tab>
      <Tab eventKey="onlineVideoReview" title="Online Video Reviews">
        Online Video Lessons
      </Tab>
    </Tabs>
  );
}

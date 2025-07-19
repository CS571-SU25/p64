import { useState, useEffect } from "react";
import InPersonLessonsView from "./InPersonLessonsView";
import { Tabs, Tab } from "react-bootstrap";

export default function BookedLessonsPage(props) {
  const [allLessons, setAllLessons] = useState([]);
  const [key, setKey] = useState("inPersonLessons");

  useEffect(() => {
    fetch(`https://cs571api.cs.wisc.edu/rest/su25/bucket/lessons`, {
      headers: {
        "X-CS571-ID": CS571.getBadgerId(),
      },
    })
      .then((res) => res.json())
      .then((json) => {
        setAllLessons(() => json.results);
      });
  }, []);

  return (
    <Tabs
      style={{
        marginTop: "2rem",
      }}
      activeKey={key}
      onSelect={(k) => setKey(k)}
    >
      <Tab eventKey="inPersonLessons" title="In Person Lessons">
        <InPersonLessonsView allLessons={allLessons} />
      </Tab>
      <Tab eventKey="onlineVideoReview" title="Online Video Reviews">
        Online Video Lessons
      </Tab>
    </Tabs>
  );
}

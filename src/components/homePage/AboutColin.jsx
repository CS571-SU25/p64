import Image from "react-bootstrap/Image";
import Stack from "react-bootstrap/Stack";

export default function AboutColin() {
  return (
    <Stack
      direction="horizontal"
      style={{ backgroundColor: "#e68649", margin: "2rem 0px" }}
    >
      <Image
        style={{ width: "45%" }}
        src="./about-colin.jpg"
        alt="Colin spiking a pickleball"
      />

      <div
        style={{
          fontSize: "20px",
          lineHeight: "50px",
          textAlign: "center",
          width: "50%",
          margin: "auto",
        }}
      >
        Colin is a 5.0+ pickleball player who actively competes in PPA Pro
        Qualifiers, bringing high-level experience and competitive insight to
        his coaching. Before making the switch to pickleball, he played three
        years of NCAA Division III tennis at the University of Wisconsin–Eau
        Claire, where he developed a strong foundation in court strategy and
        athletic performance. Now based in Verona, Wisconsin, Colin is
        passionate about helping players elevate their game through personalized
        instruction, video analysis, and game-based training.
      </div>
    </Stack>
  );
}

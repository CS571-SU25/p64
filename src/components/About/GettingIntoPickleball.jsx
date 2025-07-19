import CardTextBanner from "./CardTextBanner";
import { pickleballJourneyData } from "../../consts/pickleballJourneyData";

export default function GettingIntoPickleball() {
  return (
    <div>
      <h2>Pickleball Journey</h2>
      {pickleballJourneyData.map((data) => (
        <CardTextBanner
          key={data.id}
          src={data.src}
          alt={data.alt}
          heading={data.heading}
          year={data.year}
          text={data.text}
        />
      ))}
    </div>
  );
}

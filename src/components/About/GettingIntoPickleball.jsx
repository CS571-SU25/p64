import CardTextBanner from "./CardTextBanner";

const journeyData = [
  {
    src: "./about-colin.jpg",
    alt: "Colin spiking a pickleball",
    heading: "UW-Eau Claire Pickleball Club",
    year: "2024",
    text: "Colin was first introduced to pickleball while he was completing his undergraduate degree at the University of Wisconsin-Eau Claire. At the university, he met friends who were members of the University of Wisconsin-Eau Claire Club Pickleball Team. After playing pickleball a few times with friends, Colin joined the club team. He had a great time attending the club practices, and since he grew up playing tennis, he developed strong pickleball skills very quickly. The next academic year after joining, Colin become a Co-President of the club. In this role, he led club practices and organized the team's tournament travel. He led the team to attending the Club Picklball National tournament for the very first time! This experience made Colin find pickleball really enjoyable and fun. He loved being apart of a team and leading an organization that he was passionate about. Ever since this experience, Colin has loved pickleball.",
  },
  {
    src: "./about-colin.jpg",
    alt: "Colin spiking a pickleball",
    heading: "Local and Tournament Play",
    year: "2025",
    text: "After graduating from the University of Wisconsin-Eau Claire, Colin wanted to continue strengthening his skills and meeting new people. Currently, he practices frequently with local pickleball players in Madison. He also plays frequently in men's and mixed doubles tournaments.",
  },
];

export default function GettingIntoPickleball() {
  return (
    <div>
      <h2>Pickleball Journey</h2>
      {journeyData.map((data) => (
        <CardTextBanner
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

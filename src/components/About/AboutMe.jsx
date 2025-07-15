import AboutColin from "../homePage/AboutColin";
import CoachingExperienceGrid from "./CoachingExperienceGrid";
import TennisBackground from "./TennisBackground";

export default function AboutMe() {
  /* Text from: https://www.lipsum.com/feed/html */
  return (
    <div>
      <AboutColin />
      <CoachingExperienceGrid />

      <div>
        <h2>Getting Into Pickleball</h2>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed
          lectus tristique, iaculis nunc id, volutpat nisi. Phasellus dui
          tortor, pulvinar non tempus ac, tempus nec dui. Suspendisse
          sollicitudin lobortis nisi. Nam maximus blandit ex. Sed eu lectus
          cursus, efficitur sapien ac, convallis quam. Duis ex mi, porttitor ac
          auctor eget, scelerisque vel tellus. Nam at ante id mi ultricies
          ornare. Curabitur ac tincidunt tortor. Mauris placerat, mi sit amet
          feugiat dignissim, lacus metus elementum neque, et varius orci massa a
          massa. Maecenas dapibus egestas vulputate. Quisque sit amet ipsum
          justo. Integer congue erat a eros eleifend, vitae hendrerit justo
          vehicula. Integer vel venenatis elit, in fringilla enim. Aenean
          malesuada elementum velit, ac tempus massa molestie non. Quisque
          faucibus, est et imperdiet varius, purus urna pulvinar leo, quis
          maximus nisi nisi dignissim eros. Nunc scelerisque, odio in aliquet
          gravida, nisi nibh convallis lacus, nec congue quam eros eget leo.
          Fusce quis auctor eros. Maecenas eu est non sem auctor fermentum quis
          a lorem. Proin accumsan ante ac justo congue posuere. Integer
          scelerisque vel ipsum quis pharetra.
        </div>
      </div>
      <TennisBackground />
    </div>
  );
}

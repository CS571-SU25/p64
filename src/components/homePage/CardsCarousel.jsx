import FavoriteProductCard from "../favoriteProducts/FavoriteProductCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CardsCarousel.css";

export default function CoachingCardsCarousel(props) {
  const PreviousArrow = ({ onClick }) => (
    <div onClick={onClick} className="slider-arrow previous">
      ◀
    </div>
  );

  const NextArrow = ({ onClick }) => (
    <div onClick={onClick} className="slider-arrow next">
      ▶
    </div>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PreviousArrow />,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div style={{ margin: 40 }}>
      <h1 style={{ textAlign: "center" }}>{props.heading}</h1>
      <Slider {...settings}>
        {props.items.map((item) => {
          return <FavoriteProductCard key={item.name} {...item} />;
        })}
      </Slider>
    </div>
  );
}

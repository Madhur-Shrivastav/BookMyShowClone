import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";

//const EntertainmentCard = (props) => {
//  return (
//    <div className="w-full h-30 px-2">
//      <img
//        src={props.src}
//        alt="Entertainment"
//        className="w-full h-full rounded-lg"
//      />
//    </div>
//  );
//};
const EntertainmentCardSlider = () => {
  const [BestOfEntertainmentMovies, setBestOfEntertainmentMovies] = useState(
    []
  );
  useEffect(() => {
    const getBestOfEntertainmentMovies = async () => {
      const BestOfEntertainmentMovies = await axios.get(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=2fe62dd28e45b5456a5173e763d0bb52"
      );
      console.log(BestOfEntertainmentMovies.data.results);
      setBestOfEntertainmentMovies(BestOfEntertainmentMovies.data.results);
    };
    getBestOfEntertainmentMovies();
  }, []);
  const settings = {
    infinite: true,
    autoplay: false,
    slidesToShow: 5,
    slidesToScroll: 4,
    dots: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Slider {...settings}>
        {BestOfEntertainmentMovies.map((movie) => (
          // <EntertainmentCard src={image} key={index} />
          <div className="w-full h-30 px-2">
            <img
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt="Entertainment"
              className="w-full h-full rounded-lg"
            />
          </div>
        ))}
      </Slider>
    </>
  );
};

export default EntertainmentCardSlider;

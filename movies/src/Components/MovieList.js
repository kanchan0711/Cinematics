import React from 'react'
import MovieCart from './MovieCart'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const MovieList = ({ title, movies }) => {
    // console.log(movies)
    if (!movies) return null;
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    return (
        <div>
            <h2 className="text-center mb-8 font-bold text-3xl ">{title}</h2>
            <div className='flex flex-wrap items-center justify-center '>
            {/* <Slider {...settings}> */}
                {movies?.map((movie) => (
                    <MovieCart key={movie.id} movie={movie}  />
                ))}
                {/* </Slider> */}
            </div>
         </div>
    )
}

export default MovieList

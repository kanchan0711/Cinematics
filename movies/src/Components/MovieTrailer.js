import React from "react";
import { useSelector } from "react-redux";

const MovieTrailer = ({ movieId }) => {
  // console.log(movieId)

  const TrailerVideo = useSelector((store) => store.movies?.movieTrailer);
 

  return (
    <div>
      <iframe
        className=" top-0 left-0 w-screen h-screen overflow-hidden z-0"
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/" + TrailerVideo?.key+"?&autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default MovieTrailer;

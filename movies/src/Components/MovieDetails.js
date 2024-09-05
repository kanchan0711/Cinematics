import React from "react";
import { useSelector } from "react-redux";
import { IMG_CDN_URL } from "../utils/Constant";
// import FontAwesomeIcon from 
// import ImageColorBg from "./ImageColorBg";

const MovieDetails = ({ title }) => {
  const details = useSelector((store) => store.movieDetails);
  console.log(details);
  const movieDetails = details[0];
  if (!details || details.length === 0) return;
  const {
    origin_country,
    original_language,
    original_title,
    overview,
    poster_path,
    vote_average,
    genres,
    release_date,
    spoken_languages
  } = movieDetails;
  console.log(
    origin_country,
    original_language,
    original_title,
    overview,
    poster_path,
    vote_average,
    genres,
    release_date,
    spoken_languages
  );

  const img_ur = IMG_CDN_URL + poster_path

  return(
    <div className="bg-[#032541] p-6 h-f ">

    <div className="flex justify-center items-center ">
   
        <img className="w-[300px] h-[450px] m-2 rounded-md"  src={img_ur} alt=" "/>
       
        <div className="m-4"> 
          <p className="text-[#f9d36e] text-5xl font-bold"> {original_title}</p>
          <p className="text-[#b0c6c3] opacity-50">{release_date}</p>
          <p>{`${origin_country}-${original_language}`}</p>
          <p className="text-white my-4">{overview}</p>
          <div  className="flex gap-3">
          {genres.map((genre) => (
            <div className=" flex text-lg text-[#8af2df] ">
            <span key={genre.id}>  {genre.name}. </span>
        
            </div>
            
          ))}
          
            
          </div>
          {spoken_languages.map((lang) => (
            <p key={lang.name}>Available Languages - {lang.english_name} </p>
          ))}
          <p className="text-[#f9d36e] my-4">Rating - {vote_average}</p>
          
          <button className="bg-[#0fb6de] px-12 py-3 rounded-md text-white font-bold my-2  ">Play Now</button>
          {/* <FontAwesomeIcon icon="fa-regular fa-circle-play" /> */}
          </div>
        
        </div>
        <div className="zany"></div>
    </div>
  )
};

export default MovieDetails;

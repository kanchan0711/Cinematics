import React from "react";
import { useSelector } from "react-redux";
import { IMG_CDN_URL } from "../utils/Constant";
import { Link } from "react-router-dom";
// import FontAwesomeIcon from 
// import ImageColorBg from "./ImageColorBg";

const MovieDetails = ({ title }) => {
  const details = useSelector((store) => store.movieDetails);
  
  const movieDetails = details.movieDetails;
  console.log(movieDetails);
  if (!movieDetails || movieDetails.length === 0) return;
  const {
    origin_country,
    original_language,
    original_title,
    overview,
    poster_path,
    vote_average,
    genres,
    release_date,
    spoken_languages,
    id
  } = movieDetails
  ;
  console.log(
    origin_country,
    original_language,
    original_title,
    overview,
    poster_path,
    vote_average,
    genres,
    release_date,
    spoken_languages,
    id
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
            <div key={genre.id} className=" flex text-lg text-[#8af2df] ">
            <span >  {genre.name}. </span>
        
            </div>
            
          ))}
          
            
          </div>
          {spoken_languages.map((lang) => (
            <p key={lang.name}>Available Languages - {lang.english_name} </p>
          ))}
          <p className="text-[#f9d36e] my-4">Rating - {vote_average}</p>
          <Link to={"/movie/trailer/" +id}>
          <button className="bg-[#0fb6de] px-12 py-3 rounded-md text-white font-bold my-2  ">Play Now</button>
          </Link>
          {/* <FontAwesomeIcon icon="fa-regular fa-circle-play" /> */}
          </div>
        
        </div>
        <div className="zany"></div>
    </div>
  )
};

export default MovieDetails;

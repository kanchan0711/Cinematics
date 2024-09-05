import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addgetGenreId,
  addgetGenreName,
  addgetMoviesLang,
  clearGenreMovieList,
} from "../utils/filterSlice";
import { SUPPORTED_LANGUAGES } from "../utils/Constant";

const Filter = ({ genres }) => {
  const dispatch = useDispatch();

  const handleGenreClick = (id, name) => {
    dispatch(addgetGenreId(id));
    dispatch(addgetGenreName(name));
    dispatch(clearGenreMovieList());
  
  };

 

  const handleLang = (language) => {
    console.log(language)
    dispatch(addgetMoviesLang(language))
  };

  // console.log(genres)

  return (
    <>
      <div className="bg-white items-center  rounded-2xl p-2  mb-6 pb-12">
        <div className=" flex justify-center m-4 mb-10">
          <h1 className="text-[#032541] font-bold text-3xl "> Language</h1>
        </div>
        {SUPPORTED_LANGUAGES.map((lang) => (
          <div key={lang.identifier} className="language-conta iner">
            <input
              type="radio"
              name="language"
              value={lang.identifier}
              className="rounded-full   m-2"
              onChange={() => {handleLang(lang.identifier)}}
            />
            <span className="text-xl text-[#032541] ">{lang.name}</span>
          </div>
        ))}
      </div>

      <div className="bg-white items-center  rounded-2xl p-3 pb-12">
        <div className=" flex justify-center m-4 mb-10">
          <h1 className="text-[#032541] font-bold text-3xl "> Genres</h1>
        </div>
        {genres.map((filter) => (
          <button
            key={filter.id}
            className="border text-sm border-[#0075f2] text-[#0075f2] px-4 py-1 rounded-full font-bold hover:bg-[#0075f2] hover:text-white mx-1 my-2"
            onClick={() => handleGenreClick(filter.id, filter.name)}
          >
            {filter.name}
          </button>
        ))}
      </div>
    </>
  );
};

export default Filter;

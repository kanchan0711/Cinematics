import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addsearchMovieName, showSearchMovies } from "../utils/searchSlice";
import { BG_IMG } from "../utils/Constant";

const SearchBar = () => {
    // Use state to track the input value
  const searchMovieRef = useRef(null);
  const dispatch = useDispatch();
 
  const handleSearch = () => {
    dispatch(addsearchMovieName(searchMovieRef.current.value)); 
    dispatch(showSearchMovies(true)) // Update the `query` state with the input value
  };

  return (
    <>
    <div className="h-full min-w-screen px-10 pb-8 pt-12 text-white  bg-no-repeat "
      style={{ backgroundImage: `url(${BG_IMG})`, backgroundSize: 'cover' }}>
      <div >
        <h1 className="text-[2.4rem] font-bold">Want to book movie ticket?</h1>
        <p className="text-gray-300 text-2xl">Book Your Ticket now...</p>
      </div>

      <div className="flex ">
        <form
          className="relative w-full grid grid-cols-12 rounded-md pt-16 pb-16"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            ref={searchMovieRef}
            className="relative bg-white col-span-10 w-full p-3 rounded-l-full hover:border-none"
            type="text"
            placeholder="What would you like to watch today"

          />

          <button
            className="font-bold text-lg relative transform -translate-x-1/2  bg-gradient-to-r from-[#8bcda3] via-[#57c3bc] to-[#01b3e4]  col-span-2 text-white  rounded-full"
            onClick={handleSearch}
          >
            Search
          </button>
        </form>
      </div>
      </div>
    </>
  );
};

export default SearchBar;

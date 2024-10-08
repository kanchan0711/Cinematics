export const API_key = process.env.REACT_APP_TMDB_API_KEY;

// export const BG_IMG = "https://png.pngtree.com/thumb_back/fh260/background/20191113/pngtree-blue-movie-film-texture-background-image_321897.jpg"

export const BG_IMG = "https://t4.ftcdn.net/jpg/02/71/50/69/360_F_271506927_WWFfd92jDIIDx6DgMflakU14o5jRPgBm.jpg"
export const API_OPTIONS = {
    method: "GET",
    headers: {
      accept: "application/json",
      //   Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzODkxM2VkM2I3MjY2NTVmNTI5Mzg0ZGJhZjIwNTQyYiIsIm5iZiI6MTcyMzU0NTIxMC42NTMwODEsInN1YiI6IjY2YmIxMGE1MzgyZmMzNGQ2NmFhZmZkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2y4XyXEsufn_eTp6J6jLJeb5gomHEWcGVk6xUHhal9U'
      Authorization:
        "Bearer "+ process.env.REACT_APP_TMDB_AUTH_KEY,
    },
  };


  export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

  export const SUPPORTED_CATEGORIES = [
    { identifier: "nowPlayingMovies", name: "Now Playing" },
    { identifier: "upComingMovies", name: "Up Coming" },
    { identifier: "popularMovies", name: "Popular" },
    { identifier: "topRatedMovies", name: "Top Rated" },
  ];

  export const SUPPORTED_LANGUAGES = [
    {identifier: "hi", name: "Hindi"},
    {identifier: "en", name: "English"},
    {identifier: "ko", name: "Korian"},
    {identifier: "tr", name: "Türkçe"},
    {identifier: "ru", name: "Russian"},
  ]


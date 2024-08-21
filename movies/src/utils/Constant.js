
export const BG_IMG = "https://png.pngtree.com/thumb_back/fh260/background/20191113/pngtree-blue-movie-film-texture-background-image_321897.jpg"

export const API_OPTIONS = {
    method: "GET",
    headers: {
      accept: "application/json",
      //   Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzODkxM2VkM2I3MjY2NTVmNTI5Mzg0ZGJhZjIwNTQyYiIsIm5iZiI6MTcyMzU0NTIxMC42NTMwODEsInN1YiI6IjY2YmIxMGE1MzgyZmMzNGQ2NmFhZmZkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2y4XyXEsufn_eTp6J6jLJeb5gomHEWcGVk6xUHhal9U'
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzODkxM2VkM2I3MjY2NTVmNTI5Mzg0ZGJhZjIwNTQyYiIsIm5iZiI6MTcyMzU0NjM4NS4xNjMyODMsInN1YiI6IjY2YmIxMGE1MzgyZmMzNGQ2NmFhZmZkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dd5qhDLd6u8dwEDUjXKADDNbRXExXktLo5hfqL-qkD4",
    },
  };


  export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

  export const SUPPORTED_CATAGORIES = [
    // { identifier: "now", name: "Movies" },
    { identifier: "nowPlaying", name: "Now Playing" },
    { identifier: "upComing", name: "Up Coming" },
    { identifier: "popular", name: "Popular" },
    { identifier: "topRated", name: "Top Rated" },
  ];
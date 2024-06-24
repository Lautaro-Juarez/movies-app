const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNDNiM2M5MmYyOGQ2MDYyZGFmZGRmZGY3Y2M5NjNkNiIsInN1YiI6IjY1ODU5NWMwOThmMWYxNTI2MzBhOWVjYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uyLR-_pcxykpIXRo38m4ucgna3N1Gr9VwxDaYtwMIKk",
  },
};

const getMoviesService = async () => {
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
      options
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Something was wrong gettin movies!!");
  }
};

const searchMoviesService = async (name) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${name}&include_adult=true&language=en-US&page=1`,
      options
    );
    const data = await response.json();
    console.log("hola");
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Something was wrong searching movies!!");
  }
};

const getMovieByIdService = async (id) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
      options
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Something was wrong gettin the movie!!");
  }
};

const getGenresService = async (genre) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genre}`,
      options
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Something was wrong gettin genres!!");
  }
};

const getAllGenresService = async () => {
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/genre/movie/list?language=en",
      options
    );
    const data = response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Something was wrong gettin genres!!");
  }
};

const getActors = async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/person/popular?language=en-US&page=1",
    options
  );
  const data = response.json();
  return data;
};

export {
  getMoviesService,
  searchMoviesService,
  getMovieByIdService,
  getGenresService,
  getAllGenresService,
  getActors,
};

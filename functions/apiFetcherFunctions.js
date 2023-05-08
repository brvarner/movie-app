const url = (endpoint) => `https://moviesdatabase.p.rapidapi.com/${endpoint}`;
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": ,
    "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
  },
};

export function getMovies() {}

export function getShows() {}

export function getActor() {}

export async function getActors() {
  try {
    const response = await fetch(url("actors"), options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

export function getSingleShow(name) {}

export function getSingleMovie(name) {}

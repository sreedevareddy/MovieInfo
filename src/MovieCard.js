import React, { useState, useEffect } from "react";

const API_URL = "http://www.omdbapi.com?apikey=8026c305";

const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
  const [movieData, setMovieData] = useState("");
  const [rating, setRating] = useState("");

  useEffect(() => {
    searchMovies(imdbID);
  }, []);

  const searchMovies = async (id) => {
    const response = await fetch(`${API_URL}&i=${id}`, { referrerPolicy: "unsafe_url"});
    const data = await response.json();

    setMovieData(data);
    setRating(movieData.Ratings[0]['Value']);
  };

  const logdata = () => {
    console.log(movieData);
  }


  return (
    <div onClick={logdata} className="movie" key={imdbID}>
      <div>
        <p>{Year}</p>
      </div>

      <div>
        <img
          src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"}
          alt={Title}
        />
      </div>

      <div>
        <span>{Type}</span>
        <h3>{Title}</h3>
        <h3>{rating}</h3>
      </div>
    </div>
  );
};

export default MovieCard;

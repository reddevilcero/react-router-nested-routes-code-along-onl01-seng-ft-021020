import React from "react";
import { Link } from "react-router-dom";

export default function MoviesList({ movies }) {
  return (
    <div>
      <ul></ul>
      {Object.keys(movies).map((movieID) => (
        <li key={movieID}>
          <Link to={`/movies/${movieID}`}>{movies[movieID].title}</Link>
        </li>
      ))}
    </div>
  );
}

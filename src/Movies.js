import React from "react";
import PropTypes from "prop-types";
import "./Movies.css";

Movies.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

function Movies(props) {
  return (
    <div className="movie">
      <img src={props.poster} alt={props.title} title={props.title} />
      <div className="movie-data">
        <h3>{props.title}</h3>
        <h5>{props.year}</h5>
        <p>{props.summary}</p>
        <ul className="genres">
          {props.genres.map((genre, index) => {
            return (
              <li className="genres-genre" key={index}>
                {genre}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Movies;

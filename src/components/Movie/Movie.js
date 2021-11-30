import React from 'react';
import './Movie.css';

const IMG_URL = 'https://image.tmdb.org/t/p/w500';

const Movie = ({ title, poster_path, overview, release_date }) => (
    <div className="col">
        <div className="card">
            <img className="card-img-top" src={IMG_URL + poster_path} alt={title}/>
            <div className="movie-info">
              <span>Release date: <strong>{release_date}</strong></span><br/>
              {overview}
            </div>
        </div>
        <h6 className="title">{title}</h6>
    </div>
);

export default Movie;
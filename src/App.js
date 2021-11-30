import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
import Movie from './components/Movie/Movie';

//API
const API_KEY = 'api_key=2f4d40f87bf767762775ade984fbf9a0';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies(API_URL)
  }, []);

  const getMovies = (API) => {
    fetch(API).then(res => res.json())
      .then(data => {
        //console.log(data);
        setMovies(data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <div className="App">
      <Header />
      <main className="gallery-block cards-gallery">
        <div className="container">
          <div id="main" className="row row-cols-2 row-cols-md-4 g-4">
            {movies.length > 0 && movies.map((movie) => (
              <Movie key={movie.id} {...movie} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;

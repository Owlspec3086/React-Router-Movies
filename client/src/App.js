import React, { useState, useEffect } from 'react';
import axios from 'axios';
//install react-router-dom then import it here BrowserRouter as Router, Route, Link
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import SavedList from './Movies/SavedList';
// import movie list and movie here
import MovieList from './Movies/MovieList';
import Movie from './Movies/MovieList';

const App = () => {
  const [savedList, setSavedList] = useState([]);
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovieList(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      {/* Wrapping in router & adding */}
      <Router>
      <SavedList list={savedList} />

      {/* Placing "extract" on route to make it go to the specific path
      then using the regular path to make it go to movie */}
      <Route extract path='/' component={MovieList} />
      <Route path='/movie/:id' component={Movie} />
      </Router>
    </div>
  );
};

export default App;

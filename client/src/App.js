import React, { useState } from 'react';

//install react-router-dom then import it here BrowserRouter as Router, Route, Link
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import SavedList from './Movies/SavedList';
// import movie list and movie here
import MovieList from './Movies/MovieList';
import Movie from './Movies/MovieList';

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = (movie) => {
    setSavedList([...savedList, movie]);
  };

  return (
    <Router>
      <div>
        {/* Wrapping in router & adding */}
        <SavedList list={savedList} />
        <Switch>
          {/* Placing "extract" on route to make it go to the specific path then using the regular path to make it go to movie */}
          <Route path='/' component={MovieList} />
          <Route path='/movie/:id' component={Movie} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

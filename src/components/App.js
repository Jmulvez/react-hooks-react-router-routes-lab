import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";
import { actors, directors, movies } from "../data";

function App() {
  const [page, setPage] = useState("/")
  return <div>
            <NavBar onChangePage={setPage}/>
              <Switch>
                <Route path="/Movies">
                  <Movies title={movies.title} time={movies.time} genres={movies.genres} />
                </Route>
                <Route path="/Directors">
                  <Directors name={directors.name} movies={directors.movies} />
                </Route>
                <Route path="/Actors">
                  <Actors name={actors.name} movies={actors.movies} />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
          </div>;
}

export default App;

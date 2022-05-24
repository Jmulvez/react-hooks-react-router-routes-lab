import React from "react";

function Movies({movies}) {
  const renderMovies = movies.map((movie) => {
    return <div>
            <h2>{movie.title}</h2>
            <p>{movie.time}</p>
            <ul>
              <li>
                {movie.genres}
              </li>
            </ul>
           </div>
  })
  return <div>
          <h1>
            Movies Page
          </h1>
          {renderMovies}
         </div>;
}

export default Movies;
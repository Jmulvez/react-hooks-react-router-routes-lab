import React from "react";

function Actors({ actors }) {
  const returnAllActors = actors.map((actor) => {
    return <div>
            <h1>
              {actor.name}
            </h1>
            <ul>
              <li>
                {actor.movies}
              </li>
            </ul>
           </div>
  })
  return <div>
          {returnAllActors}
         </div>;
}

export default Actors;
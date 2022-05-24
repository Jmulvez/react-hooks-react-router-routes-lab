import React from "react";

function Directors({ directors }) {
  const getAllDirectors = directors.map((director) => {
    return <div>
            <h2>
              {director.name}
            </h2>
            <ul>
              {director.movies}
            </ul>
           </div>
  })
  return <div>
          {getAllDirectors}
         </div>;
}

export default Directors;
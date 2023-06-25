import "./Film.css";

import React, { useState } from "react";

function Film(props) {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="style">
      <img src={props.imageUrl} alt={props.title} />
      <h2>{props.title}</h2>
      <p>{props.resume}</p>
      <button onClick={handleLike}>Like</button>
      <p>{likes} Likes</p>
      <p>Heures de scéances: {props.showtimes.join(" - ")}</p>
    </div>
  );
}

export default Film;

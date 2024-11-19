import React from "react";

export default function SeriesLists({data}) {
    // console.log(props);
    let {name, rating, description, genre, cast, watch_url, img_url} = data;
    
  return (
    <li
      className="text-white m-4 w-1/5 shadow-md drop-shadow-2xl">
      <div>
        <img src={img_url} width={500} />
      </div>
      <h2>Name: {name}</h2>
      <h3> Rating: <span className={rating >= 8.5 ? 'text-emerald-400' : 'text-red-400'}>{rating}</span> </h3>
      <p className="text-sm">Description: {description}</p>
      <p>Genre: {genre}</p>
      <p>Cast: {cast}</p>
      <a
        className={rating >=8.5 ? 'bg-emerald-800 p-2 inline-block hover:bg-slate-950' : 'bg-red-800 p-2 inline-block hover:bg-slate-950'}
        href={watch_url}
        target="_blank"
      >
        {" "}
        Watch Now
      </a>
    </li>
  );
}

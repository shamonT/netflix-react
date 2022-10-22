import React, { useEffect, useState } from "react";
import "./RowPost.css";
import axios from "../../components/axios";
import YouTube from "react-youtube";
import { imageUrl, API_KEY } from "../../constants/constants";
function RowPost(props) {
  const [movies, setMovies] = useState([]);
  const [urlId, setUrlId] = useState("");
  useEffect(() => {
    axios
      .get(props.url)
      .then((response) => {
        console.log(response.data);
        setMovies(response.data.results);
      })
      .catch((err) => {
        alert("network error");
      });
  }, []);
;
  const handleMovie = (id) => {
    console.log(id);
    axios
      .get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        console.log(response,'badbjasdsdnjsad');
        if (response.data.results.length !== 0) {
          console.log(response.data.results[0]);
          setUrlId(response.data.results[0]);
        } else {
          alert('No trailer found')
          console.log("No Trailer");
        }
      }).catch((err)=>{
        alert(err);
      });
  };
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj) => (
          <img
            onClick={() => handleMovie(obj.id)}
            className={props.isSmall ? "smallPoster" : "poster"}
            alt="poster"
            src={`${imageUrl + obj.backdrop_path}`}
          />
        ))}
      </div>
      {urlId && <YouTube opts={opts} videoId={urlId.key}  />}
    </div>
  );
}

export default RowPost;

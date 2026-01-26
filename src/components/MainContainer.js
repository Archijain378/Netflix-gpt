import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (movies === null) return;

  const mainMovie = movies[0];
  console.log("Main Movie in VideoTitle:", mainMovie);

  const title = mainMovie.title;
  console.log("Title in MainContainer:", title);

  const overView = mainMovie.overview;
  console.log("overView in MainContainer:", overView);

  return (
    <div>
      <VideoTitle title={title} overView={overView} />
      <VideoBackground movieId={mainMovie?.id} />
    </div>
  );
};

export default MainContainer;

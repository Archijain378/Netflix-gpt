import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import { useDispatch } from "react-redux";
import MainContainer from "./MainContainer";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <h1>Browse Page</h1>
    </div>
  );
};

export default Browse;

import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_URL } from "../utils/constants";

function GptSearch() {
  return (
    <div>
      <div className="absolute -z-10">
        <img className="opacity-80" src={BG_URL} alt="bg-img" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
}

export default GptSearch;

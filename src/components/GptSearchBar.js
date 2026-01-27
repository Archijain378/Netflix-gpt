import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

function GptSearchBar() {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="pl-11 bg-black justify-center p-4 w-1/2">
        <input
          className="border-2 border-black mr-8 h-10 w-3/4"
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button className="bg-red-700 px-4 py-2 rounded-md">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
}

export default GptSearchBar;

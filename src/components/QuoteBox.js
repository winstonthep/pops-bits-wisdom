import { useContext } from "react";
import { AppContext } from "../App";
import { FavoriteButton } from "./FavoriteButton";

export const QuoteBox = () => {
  const { currentQuote } = useContext(AppContext);

  return (
    <div className="h-4/5 w-full flex flex-row justify-center items-center gap-2">
      <div className="max-h-full sm:w-full md:w-3/5 drop-shadow-lg bg-white bg-opacity-90 rounded-md p-2 flex-row gap-2 justify-center items-center relative">
        <div>
          <i>{currentQuote.Quote}</i>
        </div>
        {currentQuote.Author?.length > 0 ? (
          <div> - {currentQuote.Author}</div>
        ) : (
          ""
        )}
      </div>
      <FavoriteButton />
    </div>
  );
};

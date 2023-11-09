import { addFavorite, removeFavorite, isFavorite } from "../utils/helpers";
import { useState, useEffect, useContext } from "react";
import { AppContext } from "../App";

export const FavoriteButton = () => {
  const [isFavorited, setIsFavorited] = useState(false);

  const { currentQuote } = useContext(AppContext);

  const handleClick = () => {
    if (isFavorited) {
      removeFavorite(currentQuote.id);
      setIsFavorited(false);
    } else {
      addFavorite(currentQuote.id);
      setIsFavorited(true);
    }
  };

  useEffect(() => {
    setIsFavorited(isFavorite(currentQuote.id));
  }, []);

  return (
    <button
      title={isFavorited ? "Remove from favorites" : "Add to favorites"}
      className={`h-[45px] w-[45px]  hover:bg-white hover:text-black text-[28px] bg-green-600 text-white flex-col items-center justify-center rounded-md ${isFavorited ? "bg-red-500": ""}`}
      onClick={handleClick}
    >
      {!isFavorited ? "+" : "-"}
    </button>
  );
};

// <div className="text-[30px] absolute right-[-30px] top-1/2 hover:cursor-pointer hover:text-green-600 flex-col justify-center items-center">&#x272A;</div>

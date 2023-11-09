import { useEffect, useState } from "react";
import { findFavorites } from "../utils/helpers";
import data from "../data/quotes.json";
export const FavoriteQuotes = () => {
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    setFavorites(findFavorites());
  }, []);

  console.log(favorites);
  console.log(data);
  return (
    <div className="flex-col justify-center items-center gap-3 ">
      {data.map((quote) => {
        if (favorites.includes(quote.id)) {
          console.log(quote.Quote);
          return <div className="border">{quote.Quote} </div>;
        }
      })}
    </div>
  );
};

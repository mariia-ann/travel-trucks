import { useEffect, useState } from "react";

export function useFavourites() {
  const [favourites, setFavourites] = useState(() => {
    try {
      const saved = localStorage.getItem("favourites");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  const toggleFavourite = (id) => {
    const idStr = String(id);
    setFavourites((prev) => {
      if (prev.includes(idStr)) {
        return prev.filter((savedId) => savedId !== idStr);
      } else {
        return [...prev, idStr];
      }
    });
  };

  const isFavourite = (id) => favourites.includes(String(id));

  return { favourites, toggleFavourite, isFavourite };
}

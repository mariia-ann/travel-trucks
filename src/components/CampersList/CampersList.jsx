import style from "./CampersList.module.css";
import CamperItem from "../CamperItem/CamperItem.jsx";
import { useFavourites } from "../../hooks/useFavourites.js";

const CampersList = ({ campers, total, onLoadMore }) => {
  const { favourites, toggleFavourite } = useFavourites();
  return (
    <div className={style.block}>
      <ul className={style.list}>
        {campers.map((camper) => (
          <li className={style.item} key={camper.id}>
            <CamperItem
              camper={camper}
              favourites={favourites}
              toggleFavourite={toggleFavourite}
            />
          </li>
        ))}
      </ul>
      {campers.length > 0 && campers.length < total && (
        <div className={style.btnBlock}>
          <button onClick={onLoadMore} className={style.loadMore}>
            Load more
          </button>
        </div>
      )}
    </div>
  );
};

export default CampersList;

import style from "./CampersList.module.css";
import CamperItem from "../CamperItem/CamperItem.jsx";

const CampersList = ({ campers, total, onLoadMore }) => {
  return (
    <div className={style.block}>
      <ul className={style.list}>
        {campers.map((camper) => (
          <li className={style.item} key={camper.id}>
            <CamperItem camper={camper} />
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

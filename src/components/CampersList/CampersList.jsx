import style from "./CampersList.module.css"
import CamperItem from "../CamperItem/CamperItem.jsx"

const CampersList = ({campers}) => {
  return (
    <ul className={style.list}>
      {campers.map((camper) => (
        <li className={style.item} key={camper.id}>
          <CamperItem camper={camper} />
        </li>
      ))}
    </ul>
  )
}

export default CampersList
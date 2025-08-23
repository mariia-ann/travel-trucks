import { camelToWords } from "../../utils/camelToWords.js";
import { normalizeUnits } from "../../utils/normalizeUnits.js";
import CamperEquipment from "../CamperEquipment/CamperEquipment.jsx";
import { EquipmentListMax } from "../CamperEquipment/EquipmentList.jsx";
import style from "./FeaturesContent.module.css";

const FeaturesContent = ({ camper }) => {
  return (
    <div className={style.featuresWrapper}>
      <div className={style.properties}>
        <CamperEquipment camper={camper} list={EquipmentListMax} />
      </div>
      <div className={style.vehicleBlock}>
        <h3>Vehicle details</h3>
        <div className={style.line}></div>
        <div>
          <ul className={style.detailList}>
            <li className={style.detailItem}>
              <p>Form</p>
              <p>{camelToWords(camper.form)}</p>
            </li>
            <li className={style.detailItem}>
              <p>Length</p>
              <p>{normalizeUnits(camper.length)}</p>
            </li>
            <li className={style.detailItem}>
              <p>Width</p>
              <p>{normalizeUnits(camper.width)}</p>
            </li>
            <li className={style.detailItem}>
              <p>Height</p>
              <p>{normalizeUnits(camper.height)}</p>
            </li>
            <li className={style.detailItem}>
              <p>Tank</p>
              <p>{normalizeUnits(camper.tank)}</p>
            </li>
            <li className={style.detailItem}>
              <p>Consumption</p>
              <p>{camper.consumption}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FeaturesContent;

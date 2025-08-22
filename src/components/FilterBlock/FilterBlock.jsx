import { useDispatch } from "react-redux";
import { useState } from "react";
import style from "./FilterBlock.module.css";
import { setFilters } from "../../redux/filters/slice.js";
import ButtonFilter from "../ButtonFilter/ButtonFilter.jsx";

import IconAC from "../../assets/icons/wind.svg?react";
import IconAutomatic from "../../assets/icons/diagram.svg?react";
import IconKitchen from "../../assets/icons/coffee.svg?react";
import IconTV from "../../assets/icons/tv.svg?react";
import IconBathroom from "../../assets/icons/shower.svg?react";
import IconVan from "../../assets/icons/grid-1x2.svg?react";
import IconFully from "../../assets/icons/grid-2x2.svg?react";
import IconAlcove from "../../assets/icons/grid-3x3.svg?react";
import IconLocation from "../../assets/icons/map.svg?react";

const vehicleTypes = [
  { key: "panelTruck", label: "Van", icon: <IconVan /> },
  { key: "fullyIntegrated", label: "Fully Integrated", icon: <IconFully /> },
  { key: "alcove", label: "Alcove", icon: <IconAlcove /> },
];

const equipmentFilters = [
  { key: "AC", label: "AC", icon: <IconAC /> },
  { key: "transmission", label: "Automatic", icon: <IconAutomatic /> },
  { key: "kitchen", label: "Kitchen", icon: <IconKitchen /> },
  { key: "TV", label: "TV", icon: <IconTV /> },
  { key: "bathroom", label: "Bathroom", icon: <IconBathroom /> },
];

const cities = [
  { key: "kyiv", label: "Ukraine, Kyiv" },
  { key: "poltava", label: "Ukraine, Poltava" },
  { key: "dnipro", label: "Ukraine, Dnipro" },
  { key: "odesa", label: "Ukraine, Odesa" },
  { key: "kharkiv", label: "Ukraine, Kharkiv" },
  { key: "sumy", label: "Ukraine, Sumy" },
  { key: "lviv", label: "Ukraine, Lviv" },
];

const FilterBlock = ({ filters }) => {
  const dispatch = useDispatch();
  const [localFilters, setLocalFilters] = useState(filters);

  const handleLocalChange = (newFilter) => {
    setLocalFilters({ ...localFilters, ...newFilter });
  };

  const handleSearch = () => {
    dispatch(setFilters(localFilters));
  };

  return (
    <div className={style.block}>
      <label htmlFor="location" className={style.label}>
        Location
        <div className={style.inputWrapper}>
          <IconLocation
            className={`${style.icon} ${
              localFilters.location ? style.activeIcon : ""
            }`}
          />
          <select
            id="location"
            value={localFilters.location || ""}
            onChange={(e) => handleLocalChange({ location: e.target.value })}
            className={`${style.inputLocation} ${
              !localFilters.location ? style.placeholder : ""
            }`}
          >
            <option value="">City</option>
            {cities.map((c) => (
              <option key={c.key} value={c.key}>
                {c.label}
              </option>
            ))}
          </select>
        </div>
      </label>
      <p className={style.subtitle}>Filters</p>
      <div className={style.vehicheBlock}>
        <h2 className={style.vehiche}>Vehicle equipment</h2>
        <div className={style.line}></div>
        <div className={style.wrapper}>
          {equipmentFilters.map((item) => (
            <ButtonFilter
              key={item.key}
              selected={localFilters[item.key]}
              onClick={() =>
                handleLocalChange({ [item.key]: !localFilters[item.key] })
              }
            >
              {item.icon}
              {item.label}
            </ButtonFilter>
          ))}
        </div>
      </div>
      <div className={style.vehicheBlock}>
        <h2 className={style.vehiche}>Vehicle type</h2>
        <div className={style.line}></div>
        <div className={style.wrapper}>
          {vehicleTypes.map((type) => {
            const isSelected = localFilters.form === type.key;
            return (
              <ButtonFilter
                key={type.key}
                selected={isSelected}
                onClick={() => {
                  const newForm = isSelected ? "" : type.key;
                  handleLocalChange({ form: newForm });
                }}
              >
                {type.icon}
                {type.label}
              </ButtonFilter>
            );
          })}
        </div>
      </div>
      <div>
        <button onClick={handleSearch} className={style.button}>
          Search
        </button>
      </div>
    </div>
  );
};

export default FilterBlock;

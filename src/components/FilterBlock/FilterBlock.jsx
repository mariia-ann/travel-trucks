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
        {/* Доробити логіку по інпуту Location + додати іконку */}
      <label htmlFor="location" className={style.label}>
        Location
        <input
          id="location"
          name="location"
          type="text"
          placeholder="City"
          className={style.input}
          value={localFilters.location}
          onChange={(e) => handleLocalChange({ location: e.target.value })}
        />
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
      <button onClick={handleSearch} className={style.button}>Search</button>
    </div>
  );
};

export default FilterBlock;

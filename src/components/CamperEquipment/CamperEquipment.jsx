import IconAC from "../../assets/icons/wind.svg?react";
import IconAutomatic from "../../assets/icons/diagram.svg?react";
import IconKitchen from "../../assets/icons/coffee.svg?react";
import IconTV from "../../assets/icons/tv.svg?react";
import IconBathroom from "../../assets/icons/shower.svg?react";
import IconPetrol from "../../assets/icons/petrol.svg?react";
import style from "./CamperEquipment.module.css"

const equipmentList = [
    { key: "transmission", label: "Automatic", value: "automatic", icon: <IconAutomatic width="20px" height="20px" /> },
    { key: "engine", label: "Petrol", value: "petrol", icon: <IconPetrol width="20px" height="20px" /> },
    { key: "kitchen", label: "Kitchen", value: "true", icon: <IconKitchen width="20px" height="20px" /> },
    { key: "AC", label: "AC", value: "true", icon: <IconAC width="20px" height="20px" /> },
    { key: "TV", label: "TV", value: "true", icon: <IconTV width="20px" height="20px" /> },
    { key: "bathroom", label: "Bathroom", value: "true", icon: <IconBathroom width="20px" height="20px" /> },
];

const CamperEquipment = ({ camper }) => {
  return (
    <>
      {equipmentList.map((item) => {
        const camperValue = camper[item.key];

        const shouldRender =
          (item.value === "true" && camperValue === true) ||
          camperValue === item.value;

        if (!shouldRender) return null;

        return (
          <p key={item.key} className={style.equipment}>
            {item.icon} {item.label}
          </p>
        );
      })}
    </>
  );
};

export default CamperEquipment;

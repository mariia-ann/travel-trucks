import style from "./CamperEquipment.module.css"

const CamperEquipment = ({ camper, list }) => {
  return (
    <>
      {list.map((item) => {
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

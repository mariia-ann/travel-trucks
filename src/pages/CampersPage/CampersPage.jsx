import { useDispatch, useSelector } from "react-redux";
import { selectCampers } from "../../redux/campers/selectors.js";
import { useEffect } from "react";
import { fetchCampers } from "../../redux/campers/operations.js";
import { selectFilters } from "../../redux/filters/selectors.js";
import Container from "../../components/Container/Container.jsx";
import FilterBlock from "../../components/FilterBlock/FilterBlock.jsx";
import CampersList from "../../components/CampersList/CampersList.jsx";

import style from "./CampersPage.module.css";

const CampersPage = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);

  const filters = useSelector(selectFilters);

  useEffect(() => {
    dispatch(fetchCampers(filters));
  }, [dispatch, filters]);

  console.log(campers);

  return (
    <section className={style.section}>
      <Container>
        <div className={style.block}>
          <FilterBlock filters={filters} />
          <CampersList campers={campers} />
        </div>
      </Container>
    </section>
  );
};

export default CampersPage;

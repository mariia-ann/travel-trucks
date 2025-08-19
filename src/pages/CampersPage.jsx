import { useDispatch, useSelector } from "react-redux";
import { selectCampers } from "../redux/campers/selectors.js";
import { useEffect } from "react";
import { fetchCampers } from "../redux/campers/operations.js";
import { selectFilters } from "../redux/filters/selectors.js";

const CampersPage = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);

  const filters = useSelector(selectFilters);

  useEffect(() => {
    dispatch(fetchCampers(filters));
  }, [dispatch, filters]);

  console.log(campers);

  return <div>CampersPage</div>;
};

export default CampersPage;

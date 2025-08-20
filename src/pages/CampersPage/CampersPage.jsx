import { useDispatch, useSelector } from "react-redux";
import {
  selectCampers,
  selectIsLoading,
  selectIsLoadingMore,
  selectPage,
  selectTotalCampers,
} from "../../redux/campers/selectors.js";
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
  const total = useSelector(selectTotalCampers);
  const page = useSelector(selectPage);

  const filters = useSelector(selectFilters);
  const isLoading = useSelector(selectIsLoading);
  const isLoadingMore = useSelector(selectIsLoadingMore);

  useEffect(() => {
    dispatch(fetchCampers({ page: 1, filters }));
  }, [dispatch, filters]);

  const handleLoadMore = () => {
    dispatch(fetchCampers({ page: page + 1, filters }));
  };

  return (
    <section className={style.section}>
      <Container>
        <div className={style.block}>
          <FilterBlock filters={filters} />
          {isLoading && campers.length === 0 ? (
            <p>Loading...</p>
          ) : campers.length === 0 ? (
            <p className={style.textSorry}>
              Unfortunately, there are no campers matching your search. <br />
              Please try different filters.
            </p>
          ) : (
            <div>
              <CampersList
                campers={campers}
                total={total}
                onLoadMore={handleLoadMore}
              />
              {isLoadingMore && <p>Loading more...</p>}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default CampersPage;

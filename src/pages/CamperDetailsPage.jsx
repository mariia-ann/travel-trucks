import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectCamper } from "../redux/campers/selectors.js";
import { useEffect } from "react";
import { fetchCamperById } from "../redux/campers/operations.js";
import CamperDetailComponent from "../components/CamperDetailComponent/CamperDetailComponent.jsx";

const CamperDetailsPage = () => {
  const { camperId } = useParams();
  const dispatch = useDispatch();

  const camper = useSelector(selectCamper);

  useEffect(() => {
    dispatch(fetchCamperById(camperId));
  }, [camperId, dispatch]);

  return <CamperDetailComponent camper={camper} />;
};

export default CamperDetailsPage;

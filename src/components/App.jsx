import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import AppBar from "./AppBar/AppBar.jsx";

const HomePage = lazy(() => import("../pages/HomePage.jsx"));
const CampersPage = lazy(() => import("../pages/CampersPage/CampersPage.jsx"));
const CamperDetailsPage = lazy(() => import("../pages/CamperDetailsPage.jsx"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage.jsx"));

const App = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CampersPage />} />
          <Route path="/catalog/:camperId" element={<CamperDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;

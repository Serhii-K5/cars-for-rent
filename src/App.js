import { Routes, Route, Navigate } from "react-router-dom";

import HomePage from "pages/HomePage/HomePage";
import CatalogCarsPage from "pages/CatalogCarsPage/CatalogCarsPage";
import FavoritesPage from "pages/FavoritesPage/FavoritesPage";
import Layout from "components/Layout/Layout";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="catalog" element={<CatalogCarsPage data={[]} />} />
        <Route path="favorites" element={<FavoritesPage />} />
      </Route>      
      <Route path="*" element={<Navigate to="/" replace />} />        
    </Routes>
  );
}

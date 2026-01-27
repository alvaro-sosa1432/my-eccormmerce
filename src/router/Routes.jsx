import { Route, Routes } from "react-router-dom";
import { MainLayout } from "../layout/MainLayout";
import { HomePage } from "../pages/HomePage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { ProductDetailPage } from "../pages/ProductDetailPage";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" Component={MainLayout}>
        <Route index Component={HomePage} />
        <Route path="/product/:id" Component={ProductDetailPage} />
      </Route>
      <Route path="*" Component={NotFoundPage} />
    </Routes>
  );
};

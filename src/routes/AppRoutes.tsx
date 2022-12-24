import { Route, Routes } from "react-router-dom";
import { Layout } from "../components/Layout";
import { Home } from "../pages/Home";
import { QuizDetail } from "../pages/QuizDetail";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/quiz/:category" element={<QuizDetail />} />
      </Route>
    </Routes>
  );
}

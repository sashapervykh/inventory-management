import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppLayout } from "../../shared/ui/AppLayout/AppLayout";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<div>HOME</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

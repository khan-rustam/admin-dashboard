import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";

{
  /* default Route */
}
const PageNotFound = lazy(() => import("../PageNotFound.tsx"));

{
  /* Pages */
}
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Customers = lazy(() => import("./pages/Customers"));
const Products = lazy(() => import("./pages/Products"));
const Transactions = lazy(() => import("./pages/Transactions"));

{
  /* charts */
}
const BarCharts = lazy(() => import("./pages/charts/BarCharts"));
const PieCharts = lazy(() => import("./pages/charts/PieCharts"));
const LineCharts = lazy(() => import("./pages/charts/LineCharts"));

{
  /* apps */
}
const Stopwatch = lazy(() => import("./pages/app/Stopwatch.tsx"));
const Coupon = lazy(() => import("./pages/app/Coupon.tsx"));
const Toss = lazy(() => import("./pages/app/Toss.tsx"));

{
  /* managements */
}
const NewProduct = lazy(() => import("./pages/managements/NewProduct"));
const ProductManagement = lazy(
  () => import("./pages/managements/ProductManagement")
);
const TransactionManagement = lazy(
  () => import("./pages/managements/TransactionManagement")
);

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          {/* default Route */}
          <Route path="*" element={<PageNotFound />} />

          {/* Pages */}
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/customers" element={<Customers />} />
          <Route path="/admin/products" element={<Products />} />
          <Route path="/admin/transactions" element={<Transactions />} />

          {/* charts */}
          <Route path="/admin/chart/bar" element={<BarCharts />} />
          <Route path="/admin/chart/pie" element={<PieCharts />} />
          <Route path="/admin/chart/line" element={<LineCharts />} />

          {/* apps */}
          <Route path="/admin/app/stopwatch" element={<Stopwatch />} />
          <Route path="/admin/app/coupon" element={<Coupon />} />
          <Route path="/admin/app/toss" element={<Toss />} />

          {/* managements */}

          <Route path="/admin/products/new" element={<NewProduct />} />
          <Route
            path="/admin/transaction/:id"
            element={<TransactionManagement />}
          />
          <Route path="/admin/products/:id" element={<ProductManagement />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;

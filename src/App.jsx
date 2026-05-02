import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AddProduct from "./pages/admin/AddProduct";
import ProductList from "./pages/admin/ProductList";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard/>
            </ProtectedRoute>
          }/>
          <Route path="/adminDashboard" element={
            <ProtectedRoute>
              <AdminDashboard/>
            </ProtectedRoute>
          }>
            <Route path="addProduct" element={<AddProduct/>}/>
            <Route path="product-list" element={<ProductList/>}/>
          </Route>
          <Route path="/products" element={
            <ProtectedRoute>
              <Products/>
            </ProtectedRoute>
          }/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

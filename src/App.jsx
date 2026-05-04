import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./pages/auth/Signup";
import Login from "./pages/auth/Login";
import ProtectedRoute from "./routes/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AddProduct from "./pages/admin/AddProduct";
import ProductList from "./pages/admin/ProductList";
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductDetail";
import Checkout from "./pages/Checkout";
import Orders from "./pages/admin/Orders";
import Layout from "./components/Layout";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Dashboard />} />
            <Route
              path="/products"
              element={
                <ProtectedRoute>
                  <Products />
                </ProtectedRoute>
              }
            />

            <Route path="/cart" element={<Cart />} />
            <Route path="product/:id" element={<ProductDetail />} />
            <Route path="/checkout" element={<Checkout />} />
          </Route>
          <Route
            path="/adminDashboard"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          >
            <Route path="addProduct" element={<AddProduct />} />
            <Route path="product-list" element={<ProductList />} />
            <Route path="orders" element={<Orders />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

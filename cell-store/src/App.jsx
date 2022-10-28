import { useDispatch, useSelector } from "react-redux";
import { json, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./page/Home/Home";
import {
  getAllProducts,
  getProductsPerPage,
} from "./redux/actions/productActions";
import Detail from "./components/cards-products/Detail";
import Favoritos from "./components/cards-products/Favoritos";
import ProductForm from "./pages/Form/ProductForm";
import InterForm from "./pages/Form/InterForm";
import CategoryForm from "./pages/Form/CategoryForm";
import About from "./pages/About/About";
import Auth from "./pages/login/Auth";
import Register from "./pages/register/Register";
import Profile from "./pages/Profile/Profile";
import Historia from "./pages/historia/Historia";
import { useEffect } from "react";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/footer/Footer";
import ConfirmEmail from "./pages/ConfirmEmail/ConfirmEmail";
import ConfirmedEmail from "./pages/ConfirmEmail/ConfirmedEmail";
import Cart from "./components/Cart/Cart";
import NotFound from "./components/NotFound/NotFound";
import { ProtectedRoute } from "./Protected/ProtectedRoute";
import ChangePassword_forgot from "./pages/PasswordRecover/ChangePassword_forgot";
import Sidebar from "./pages/Dashboard/Sidebar/Sidebar";
import AdminDashboard from "./pages/Dashboard/AdminDashboar";
import VentasTotales from "./pages/Dashboard/VentasTotales";
import UsersList from "./pages/Dashboard/Lists/UsersList/UsersList";
import ProductList from "./pages/Dashboard/Lists/ProductList/ProductList";
import OrdersList from "./pages/Dashboard/Lists/OrdersList/OrdersList";
import ReviewsList from "./pages/Dashboard/Lists/ReviewsList/ReviewsList";
import Settings from "./pages/Profile/Settings";
import Faq from "./components/Faqs/Faq";

/* import Detail from './components/cards-products/Detail' */
//,,,,,,
function App() {
  const user_redux = useSelector((state) => state.user.user);
  const user = JSON.parse(localStorage.getItem("user"));
  console.log("USER:", user);
  const dispatch = useDispatch();
  const page = useSelector((state) => state.product.page);
  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getProductsPerPage(page));
  }, [dispatch]);
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/about" element={<About />} />
        <Route path="/account/login" element={<Auth />} />
        <Route path="/confirm" element={<ConfirmEmail />} />
        <Route path="/faqs" element={<Faq />} />
        {/* */}
        <Route path="/confirm/:id" element={<ConfirmedEmail />} />
        {/* */}

        <Route path="/changePassword/:id" element={<ChangePassword_forgot />} />
        <Route path="/historia" element={<Historia />} />
        <Route
          path="/account/profile"
          element={
            <ProtectedRoute isAllowed={user} redirectTo={"/account/login"}>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/account/profile/:userId/usersettings"
          element={
            <ProtectedRoute isAllowed={user} redirectTo={"/account/login"}>
              <Settings />
            </ProtectedRoute>
          }
        />
        {/*autenticado */}
        <Route element={<ProtectedRoute isAllowed={user?.admin} />}>
          <Route path="/newproduct" element={<ProductForm />} />
          {/*autenticado y administrador*/}
          <Route path="/interForm/:id" element={<InterForm />} />
          {/*autenticado y administrador*/}
          <Route path="/categoryForm/:id" element={<CategoryForm />} />
          {/*autenticado y administrador*/}
          {/*autenticado y administrador*/}
          <Route path="/adminDashboard/sidebar" element={<Sidebar />} />
          {/*autenticado y administrador*/}
          <Route path="/admin/userslist" element={<UsersList />} />
          {/*autenticado y administrador*/}
          <Route path="/admin" element={<AdminDashboard />} />
          {/*autenticado y administrador*/}
          <Route path="/admin/ventastotales" element={<VentasTotales />} />
          {/*autenticado y administrador*/}
          <Route path="/admin/productlist" element={<ProductList />} />
          {/*autenticado y administrador*/}
          <Route path="/admin/ordersList" element={<OrdersList />} />
          {/*autenticado y administrador*/}
          <Route path="/admin/reviewslist" element={<ReviewsList />} />
          {/*autenticado y administrador*/}
        </Route>
        <Route path="/account/register" element={<Register />} />
        {/*sin logear*/}
      </Routes>
      <Footer />
    </>
  );
}
export default App;

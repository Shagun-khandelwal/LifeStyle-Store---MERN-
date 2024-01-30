import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar";
import Home from "./components/home";
import Products from "./components/products";
import About from "./components/about";
import LoginForm from "./components/loginform";
import Logout from "./components/logout";
import Cart from "./components/cart";
import Orders from "./components/orders";
import Error from "./components/common/error";
import Profile from "./components/profile";
import AddProduct from "./components/addproduct";
import "./App.css";
import RegisterForm from "./components/registerform";
import ProductInfo from "./components/productinfo";
import { getCurrentUser } from "./components/services/authservice";
import { ToastContainer } from "react-toastify";
import ProtectedRoutesLogin from "./components/common/protectedRoutesLogin";
import ProtectedRoutesLogout from "./components/common/protectedRoutesLogout";

class App extends Component {
  state = {};
  componentDidMount() {
    const user = getCurrentUser();
    this.setState({ user });
  }
  render() {
    const user = this.state.user;
    return (
      <React.Fragment>
        <ToastContainer />
        <NavBar user={user} />
        <Routes>
          <Route path="/">
            <Route path="/" element={<Home />} />
            <Route element={<ProtectedRoutesLogin />}>
              <Route path="/login" element={<LoginForm />} />
              <Route path="/register" element={<RegisterForm />} />
            </Route>
            <Route element={<ProtectedRoutesLogout />}>
              <Route path="/logout" element={<Logout />} />
              <Route path="/cart" element={<Cart user={user} />} />
              <Route path="/addproduct" element={<AddProduct />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/orders" element={<Orders />} />
            </Route>
            <Route path="/productinfo/:id" element={<ProductInfo />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </React.Fragment>
    );
  }
}

export default App;

import React from "react";
import { NavLink } from "react-router-dom";
const NavBar = ({user}) => {
  const title_style = { color: "whitesmoke", paddingRight: "20px" };
  return (
    <nav className="navbar navbar-dark navbar-expand bg-dark">
      <div className="container-fluid">
        <NavLink className="nav-link" aria-current="page" to="/">
          <h2 style={title_style}>LifeStyle Store</h2>
        </NavLink>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/products">
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/about">
                About
              </NavLink>
            </li>
            {!user &&
              <React.Fragment>
              <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/login">
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/register">
                Register
              </NavLink>
            </li>
            </React.Fragment>
            }
            {user && user.services.service==='Seller'
            &&
            <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to="/addproduct">
              Add-Product
            </NavLink>
          </li>
            }
            {user &&
              <React.Fragment>
                <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/cart">
                Cart
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/orders">
                Orders
              </NavLink>
            </li>
              <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/profile">
                {user.fullname}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/logout">
                Logout
              </NavLink>
            </li>
            </React.Fragment>
            }
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

import React from "react";
import { Link } from "react-router-dom";
const styles = {
  colors: {
    backgroundColor: "#90CAF9 "
  },
  img: {
    width: "65px",
  },
  search: {
    display: "block",
    margin: "auto"
  },
  child: {
    paddingLeft: "20%"
  }
};

export default () => (
  <div className="navbar navbar-expand-lg navbar-light" style={styles.colors}>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarTogglerDemo01"
      aria-controls="navbarTogglerDemo01"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <Link to="/instructor">
      <div>
        <img
          src="https://lh3.googleusercontent.com/ZmqnvDIzqxMj4NBjqevd7G-yyIixYtBnNSpEiThXoUjVnjKUORQgfuML-kW_SMQ5hWaMRHazEtRHalAvy23DvQ=s0"
          alt=""
          style={styles.img}
        />
      </div>
    </Link>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <form className="form-inline my-2 my-lg-0" style={styles.search}>
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-primary" type="submit">
          Search
        </button>
      </form>
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0" style={styles.child}>
        <li className="nav-item">
          <a className="nav-link" href="#">
            LogIn
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            SignIn
          </a>
        </li>
      </ul>
    </div>
  </div>
);

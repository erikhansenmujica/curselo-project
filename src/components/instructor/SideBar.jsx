import React from "react";

const styles = {
  wrapper: {
    display: "flex",
    width: "100%"
  },
  sidebar: {
    width: " 175px",
    position: " fixed",
    top: "0",
    left: "0",
    height: "100vh",
    zIndex: "999",
    background: "#90CAF9",
    color: "#fff",
    transition: "all 0.3s"
  },
  text: {
    margin: "10px"
  },
  img: {
    width: "95px"
  }
};

export default () => (
  <div className="wrapper" style={styles.wrapper}>
    <nav id="sidebar" style={styles.sidebar}>
      <div style={styles.text}>
        <div>
          <img
            src="https://lh3.googleusercontent.com/ZmqnvDIzqxMj4NBjqevd7G-yyIixYtBnNSpEiThXoUjVnjKUORQgfuML-kW_SMQ5hWaMRHazEtRHalAvy23DvQ=s0"
            alt=""
            style={styles.img}
          />
        </div>
        <ul className="list-unstyled components">
          <li className="active">
            <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false">
              Home
            </a>
          </li>
          <li>
            <a href="#"> About</a>
          </li>
          <li>
            <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false">
              Pages
            </a>
          </li>
        </ul>
      </div>
    </nav>

    <div id="content">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button type="button" id="sidebarCollapse" className="btn btn-info">
            <i className="fas fa-align-left" />
            <span>Toggle Sidebar</span>
          </button>
        </div>
      </nav>
    </div>
  </div>
);

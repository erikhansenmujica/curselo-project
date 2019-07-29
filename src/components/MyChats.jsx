import React from "react";
import { Link } from "react-router-dom";

const margin = {
  height: "100%",
  maxHeight: "100%",
  // marginTop: "-2%",
  // marginBottom: "5%",
  // marginRight: "1%",
  // marginLeft: "1%",
  backgroundImage:
    "url(" +
    "https://www.solidbackgrounds.com/images/2880x1800/2880x1800-pastel-blue-solid-color-background.jpg" +
    ")",
  backgroundSize: "container"
};

const chatBar = {
  position: "fixed",
  bottom: "0%",
  width: "90%",
  right: "0%"
};

const yourMsgStyle = {
  textAlign: "left",
  color: "grey",
  background: "yellow"
};

const myMsgStyle = {
  textAlign: "right",
  color: "green",
  background: "red",
  height: "70px",
  width: "50px"

  // display: "block"
};

export default ({
  handleChange,
  handleSubmit,
  inputValue,
  messages,
  currentUser,
  handleClick,
  returnToHome
}) => (
  <div style={margin}>
    <div
      style={{
        background: "#bdd2d9",
        opacity: "0.8"
      }}
      className="jumbotron jumbotron-fluid"
    >
      <div className="container">
        <h6 className="display-4">MIS CONVERSACIONES</h6>
      </div>
    </div>
    <div>
      <button onClick={returnToHome}>VOLVER A HOME</button>
    </div>
    <div>
      <ul
        style={{
          display: "grid",
          alignItems: "center",
          marginBottom: "2%"
        }}
      >
        {messages && messages.length > 0 ? (
          messages.map(msg =>
            msg.unreadMsjs ? (
              <div key={msg.id}
                style={{
                  display: "grid",
                  alignItems: "center",
                  justifyItems: "flex-start"
                }}
              >
                <Link to={`/chat/${msg.instructor}/${msg.student}`}>
                  <button
                    onClick={handleClick}
                    style={{
                      display: "inline-block",
                      padding: "10px 0px",
                      paddingLeft: "7px",
                      paddingRight: "7px",
                      background: "#1c555e",
                      marginTop: "15px",
                      borderRadius: "3px",
                      textAlign: "center",
                      border: "1px solid grey",
                      boxShadow: "1px 2px #a9b8cf",
                      color: "#798285"
                    }}
                  >
                    CONVERSACION CON {msg.with} : TIENES {msg.unreadNumber}{" "}
                    MENSAJES NO LEIDOS
                  </button>
                </Link>
              </div>
            ) : (
              <div
                style={{
                  display: "grid",
                  alignItems: "center",
                  justifyItems: "flex-start"
                }}
              >
                <Link to={`/chat/${msg.instructor}/${msg.student}`}>
                  <button
                    onClick={handleClick}
                    style={{
                      display: "inline-block",
                      padding: "10px 0px",
                      paddingLeft: "7px",
                      paddingRight: "7px",
                      background: "#1c555e",
                      marginTop: "15px",
                      borderRadius: "3px",
                      textAlign: "center",
                      border: "1px solid grey",
                      boxShadow: "1px 2px #a9b8cf",
                      color: "#798285"
                    }}
                  >
                    CONVERSATION WITH {msg.with}
                  </button>
                </Link>
              </div>
            )
          )
        ) : (
          <h1>AUN NO TIENES CONVERSACIONES</h1>
        )}
      </ul>

      {/* <form onSubmit={handleSubmit} style={chatBar}>
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Enter your message here"
          aria-label="Search"
          onChange={handleChange}
          value={inputValue}
        />
      </form> */}
      <div className="product-device shadow-sm d-none d-md-block" />
      <div className="product-device product-device-2 shadow-sm d-none d-md-block" />
    </div>
  </div>
);

import React from "react";
import { MDBListGroup, MDBListGroupItem, MDBContainer } from "mdbreact";

const style = {
  position: {
    width: "22rem"
  },
  position2: {
    display: "flex",
    justifyContent: "center"
  }
};
const ListGroupPage = props => {
  return (
    <div>
      <div className="card" >
        <div className="card-body">
          <h5 className="card-title">{props.curso.name}</h5>

          <p className="card-text">{props.curso.price}</p>
        </div>
      </div>
      <button
        className="btn btn-lg btn-primary"
        type="submit"
        onClick={props.handlePurchase}
      >
        Compra Curso
      </button>
    </div>
  );
};

export default ListGroupPage;

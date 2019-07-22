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
      <h1 style={style.position2}>Tu Compra</h1>
      <MDBContainer style={style.position2}>
        <MDBListGroup style={style.position}>
          <MDBListGroupItem hover>
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">{props.curso.name}</h5>
              
            </div>
            <p className="mb-1">
            {props.curso.price}
            </p>
           
            <button className="btn-outline-primary"type="submit" onClick={props.handlePurchase}>
              Compra Curso
            </button>
          </MDBListGroupItem>
        </MDBListGroup>
      </MDBContainer>
    </div>
  );
};

export default ListGroupPage;

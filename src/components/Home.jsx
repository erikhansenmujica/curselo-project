import React from "react";
import { Link } from "react-router-dom";
import Vimeo from 'vimeo';
let client = new Vimeo.Vimeo("{client_id}", "{client_secret}", "{access_token}");

client.request({
  method: 'GET',
  path: '/tutorial'
}, function (error, body, status_code, headers) {
  if (error) {
    console.log(error);
  }

  console.log(body);
})
const styles = {
  container:{
    display: 'flex',
    justifyContent: 'space-evenly', 
  },
  child:{
    margin:'auto',
    marginTop:"25%",
    paddingLeft:"20%"
  },
  child1:{
    margin:'auto',
    marginTop:"25%",
    paddingRight:"20%"
  }
};

export default () => (
  <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
    <div className="container" style={styles.container}>
    <div style={styles.child}>

      <Link to="/crear">
        <button  className="btn btn-lg btn-primary">
          Quiero enseñar!
        </button>
        </Link>
    </div>
    <div style={styles.child1}>
      <Link to="/cursos">
        <button
          className="btn btn-lg btn-primary"
        >
          Quiero aprender!
        </button>
      </Link>

    </div>
     
    </div>
  </div>
);

import React from "react";
import { Link } from "react-router-dom";
import SectionTopicContainer from "../../containers/instructor/Section&TopicContainer" 

const styles = {
  nav: {
    width:"80vw"
  },
  button: {
    display: "inline",
    marginLeft: "90%"
    // marginTop:"auto"
  }
};

export default props => (
  <div style={{  
    marginLeft:"10%",
    marginTop:"3%"}}>
    {props.curso && (
      <div >
        <div className="media">
          <div className="media-body">
            <h5 className="mt-0">Curso: {props.curso.name}</h5>
          </div>
        </div>
        <SectionTopicContainer curso={props.curso}/>
      </div>
    )}
  </div>
);

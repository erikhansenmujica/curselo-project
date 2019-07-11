import React from "react";
import {Link} from "react-router-dom";

export default (props) => (
    <div>
        
    {console.log(props, "SOY PROPS EN COMP TONTO")}
        <h1>
            {props.curso.length?  props.curso.titulo : <p>BUSCANDO</p>}
        </h1>


    </div>
)
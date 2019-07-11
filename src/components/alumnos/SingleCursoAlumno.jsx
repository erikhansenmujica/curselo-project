import React from "react";
import {Link} from "react-router-dom";

export default ({curso}) => (
    <div>
        {curso&&<h1>{curso.titulo}</h1>}
            

    </div>
)
import React from "react";
const style={
    container:{
        display:"flex",
        justifyContent:"space-evenly"
    },
    childs:{
        width: "18rem"
    }
}
export default ({ cursos }) =>
<div style={style.container}>  
   {cursos.length&& cursos.map((curso)=><div className="card" style={style.childs}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTUyfcgnFWzf2GBPS8kpRhpa01uVuyuN40ZxOWNz-WcMXvUBgtkg" className="card-img-top" alt="" />
        <div className="card-body">
            <h5 className="card-title">{curso.titulo}</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
    </div>)
    }
    </div>

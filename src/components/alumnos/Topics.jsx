import React from "react"
import {Link} from "react-router-dom"

export default ({topics, id, cursoId, history})=> 
    <div className="collapse" id={`a${id}`}>
<div className="card card-body">
{topics.length&&topics.map(topic=> 

  
  <button
  key={topic.id}
      className="btn btn-outline-dark"
      type="button" style={{color:"black", border:"none"}} 
      onClick={()=>history.push(`/alumnos/cursos/comprados/${cursoId}/section/${id}/topic/${topic.id}`)}
      >{topic.name}</button>
  )}
</div>
</div>
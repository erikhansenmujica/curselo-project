import React from "react"

export default ({topics, id})=> 
    <div className="collapse" id={`a${id}`}>
<div className="card card-body">
{topics.length&&topics.map(topic=> 

  <button
      className="btn btn-outline-dark"
      type="button" style={{color:"black", border:"none"}}>{topic.name}</button>
  )}
</div>
</div>
import React from "react";

export default props => (
  <div>
    {props.topics && props.topics[0] ? (
      props.topics.map(topic => (
        <li key={topic.id} className="list-group-item">
          Topic: {topic.name}
        <button type="button" className="btn btn-light" style={{float:"right", marginBottom:"1%"}}><i className="fas fa-pencil-alt"></i></button>
        </li>
      ))
    ) : (
      <div className="spinner-border spinner-border-sm text-info" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    )}
  </div>
);

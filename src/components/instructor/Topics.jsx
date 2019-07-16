import React from "react";

export default props => (
  <div>
    {props.topics && props.topics[0] ? (
      props.topics.map(topic => (
        <li key={topic.id} className="list-group-item">
          Tema: {topic.name}{" "}
        </li>
      ))
    ) : (
      <div class="spinner-border spinner-border-sm text-info" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    )}
  </div>
);

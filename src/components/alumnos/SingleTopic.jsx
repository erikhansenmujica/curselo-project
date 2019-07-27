import React from "react";
import SideBar from "../alumnos/SideBar";
import Vimeo from "@u-wave/react-vimeo";

const styles = {
  video: {
    objectFit: "cover"
  },
  text: {
    fontFamily: " Georgia,serif",
    fontSize: " 25px;",
    letterSpacing: " 1.3px",
    wordSpacing: " 3.4px",
    color: " #DCE5EE",
    fontWeight: " normal",
    textDecoration: " none solid rgb(68, 68, 68)",
    fontStyle: " italic",
    fontVariant: " normal",
    textTransform: " none"
  },
  textBox: {
    marginTop:"20%",
    height:"100%",
    width:"100%",
    backgroundColor:"#4D5B69"

  }
};

export default props => (
  <div>
    <SideBar cursoId={props.cursoId} history={props.history} />
    <div
      style={{ marginLeft: "330px", marginTop: "10px", overflowY: "scroll" }}
    >
      {props.topic.contentURL && props.topic.contentURL.includes("vimeo") ? (
        <Vimeo
          width="950"
          video={props.topic.contentURL.slice(
            14,
            props.topic.contentURL.length
          )}
          autoplay
          style={styles.video}
        />
      ) : props.topic.contentURL &&
        props.topic.contentURL.includes("firebase") ? (
        <a href={props.topic.contentURL} target="_blank">
          Open pdf
        </a>
      ) : (
        props.topic.content &&
        props.topic.content.length && (
          <div style={styles.textBox}>
            <p style={styles.text}>{props.topic.content}</p>
          </div>
        )
      )}
    </div>
  </div>
);

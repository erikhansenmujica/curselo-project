import React from "react";
import SideBar from "./SideBar";
const styles = {
  div: {
    marginLeft: "18%"
  },
  title: {
    textAlign: "center",
    fontSize: "46px"
  },
  subTitle: {
    textAlign: "center"
  },
  jumbotron: {
    backgroundImage:
    "url(" +
    "https://www.sfh.ie/sites/default/themes/go2_omega/images/bg-education-courses-workshops.jpg" +
    ")",
  }
};
export default props => (
  <div style={styles.div}>
    <div className="jumbotron" style={styles.jumbotron}>
      <div className="container">
        <h1 className="display-3" style={styles.title}>
          Welcome to your course!
        </h1>
        <p />
        <p />
      </div>
    </div>
    <br />
    <div class="card">
      <p class="display-3" style={styles.title}>News</p>
      <div class="card-body">
        You have access to videos, files and texts, which can help you during
        this learning. Also you can view this anytime that you want, if the
        course end you can do it again a lot of times
      </div>
    </div>
    <div class="card">
      <p class="display-3" style={styles.title}>Messages</p>
      <div class="card-body">
        You can talk with your teacher, by our chat. You can ask at anytime that
        you want if you don't understand something.
      </div>
    </div>
    <div class="card">
      <p class="display-3" style={styles.title}>Contact us</p>
      <div class="card-body">
        If you have more than 5 courses with the same teacher, you can open your
        account being like teacher free for 3 months. For more information
        contact us
      </div>
    </div>
    <hr />
    <SideBar cursoId={props.cursoId} history={props.history} />
  </div>
);

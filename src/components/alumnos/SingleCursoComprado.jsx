import React from "react";
import SideBar from "./SideBar";
const styles = {
  div: {
    marginLeft: "18%"
  },
  title: {
    textAlign: "center",
    fontSize: "52px",
    color: "white"
  },
  subTitle: {
    textAlign: "center",
    fontSize: "32px",
    marginTop: "1%"
  },
  jumbotron: {
    backgroundImage:
      "url(" +
      "https://images.unsplash.com/photo-1515261439133-0f6cfb098e04?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" +
      ")"
  },
  card: {
    marginTop: "-5%"
  },
  cardBody: {
    marginTop: "-2%",
    fontSize: "16px",
    textAlign: "center"
  }
};
export default props => (
  <div style={styles.div}>
    <div style={{
     float: "right", 
     marginRight: "10%"}}>
      <button onClick={()=>props.createChat(props.cursoId)} type="button" className="btn btn-outline-secondary btn-lg">Iniciar Chat con Instructor</button>
   </div>
    <div className="jumbotron" style={styles.jumbotron}>
      <div className="container">
        <h1 className="display-3" style={styles.title}>
          Welcome to your course!
        </h1>
      </div>
    </div>
    <div className="card" style={styles.card}>
      <div className="card-body" style={styles.cardBody}>
        <p className="display-3" style={styles.subTitle}>
          News
        </p>
        You have access to videos, files and texts, which can help you during
        this learning. Also you can view this anytime that you want, if the
        course end you can do it again a lot of times
      </div>
    </div>
    <div className="card">
      <div className="card-body" style={styles.cardBody}>
        <p className="display-3" style={styles.subTitle}>
          Messages
        </p>
        You can talk with your teacher, by our chat. You can ask at anytime that
        you want if you don't understand something.
      </div>
    </div>
    <div className="card">
      <div className="card-body" style={styles.cardBody}>
        <p className="display-3" style={styles.subTitle}>
          Contact us
        </p>
        If you have more than 5 courses with the same teacher, you can open your
        account being like teacher. Try to open free for one month, if you like
        you have an offer for 3 months. For more information contact us
      </div>
    </div>
    <SideBar cursoId={props.cursoId} history={props.history} />
  </div>
);

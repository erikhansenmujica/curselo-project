import React, { Component } from "react";
import { store, db, auth } from "../config/app";
import Chat from "../components/Chat";
import ChatSidebarContainer from "./ChatSidebarContainer";
import Axios from "axios";

export default class ChatContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      messages: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      message: e.target.value
    });
  }

  componentDidMount() {
    let courseId = this.props.match.params.courseId;
    let studentId = this.props.match.params.userId;
    let instructorId = this.props.match.params.instructorId;

    function compareMsj(a, b) {
      let aId = a.createdAt;
      let bId = b.createdAt;
      return aId - bId;
    }

    db.collection("mensajeria")
      .doc(`${studentId}-${instructorId}`)
      .collection("CHATS")
      .onSnapshot(querySnapshot => {
        let msgs = [];
        querySnapshot.forEach(doc => {
          msgs.push(doc.data());
        });
        msgs.sort(compareMsj);
        this.setState({
          messages: msgs
        });
      });
  }

  handleSubmit(e) {
    let courseId = this.props.match.params.courseId;
    let studentId = this.props.match.params.userId;
    let instructorId = this.props.match.params.instructorId;
    let msg = this.state.message;
    let chatId = instructorId + studentId;
    let chatters = [instructorId, studentId];
    //    console.log(chatId)

    e.preventDefault();
    Axios.get(
      `https://curselo-dev.appspot.com/_ah/api/lms/v2/getCourse?courseId=${courseId}`
    ).then(courseData => {
      db.collection("mensajeria")
        .doc(`${studentId}-${instructorId}`)
        .collection("CHATS")
        .add({
          from: `${studentId}`,
          to: `${instructorId}`,
          message: msg,
          createdAt: Date.now(),
          between: [`${studentId}`, `${instructorId}`],
          instructorName: `${courseData.data.speakerInfo}`
        })
        .then(() => {
          for (let i = 0; i < 2; i++) {
            let Carlos = db.collection("usuarios").doc(`${chatters[i]}`);

            Carlos.onSnapshot(carlos => {
              carlos.exists
                ? Carlos.update({
                    conversaciones: store.FieldValue.arrayUnion(`${chatId}`)
                  })
                : Carlos.set({
                    conversaciones: store.FieldValue.arrayUnion(`${chatId}`)
                  });
            });
          }
        })
        .then(() =>
          this.setState({
            message: ""
          })
        );
    });
  }

  render() {
    return (
      <div>
        <ChatSidebarContainer
          props={this.props}
          currentUser={auth.currentUser}
        />
        <div
          style={{
            marginLeft: "200px"
          }}
        >
          <Chat
            messages={this.state.messages}
            currentUser={auth.currentUser}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            inputValue={this.state.message}
          />
        </div>
      </div>
    );
  }
}

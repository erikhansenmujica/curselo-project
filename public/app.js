document.addEventListener("DOMContentLoaded", event => {
    const app = firebase.app();
  
    const db = firebase.firestore();
  
    // const myPost = db.collection("posts").doc("firstpost");
  
    console.log("YO SOY APP!!", app)
  
    // QUERY
  
    //   myPost.get().then(function(doc) {
    //     if (doc.exists) {
    //         const data = doc.data()
  
    //         document.write(data.title + `<br>`)
    //         document.write(data.views)
  
    //     } else {
    //         // doc.data() will be undefined in this case
    //         console.log("No such document!");
    //     }
    // }).catch(function(error) {
    //     console.log("Error getting document:", error);
    // });
  
    // --------------------------------------------------------
  
  //  REAL TIME
  
  // READ
  
  
    // myPost.onSnapshot(doc => {
    //     const data = doc.data()
  
    //         document.write(data.title + `<br>`)
    //         document.write(data.views +`<br>`)
    // })
  
  // WRITE
  // myPost.onSnapshot(doc => {
  //     const data = doc.data();
  //     document.querySelector('#title').innerHTML = data.title
  // })
  
  });
  
  function googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
  
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => {
        const user = result.user;
        document.write(`Hello ${user.displayName}`);
        console.log("YO SOY USER", user);
      })
      .catch(console.log);
  }
  
  
  function updatePost(e) {
      const db = firebase.firestore();
      const myPost = db.collection('posts').doc('firstpost');
      myPost.update({title : e.target.value})
  }
var firebaseConfig = {
      apiKey: "AIzaSyAkNof6BaQGq4eHIKIOcPmHc1l4-KhAhRw",
      authDomain: "kwitter-b22bb.firebaseapp.com",
      projectId: "kwitter-b22bb",
      storageBucket: "kwitter-b22bb.appspot.com",
      messagingSenderId: "62788786428",
      appId: "1:62788786428:web:97e4ff17b2dfee6fd69f79"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

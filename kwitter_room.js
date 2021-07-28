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

    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+user_name;
    
    function addRoom()
    {
      room_name= document.getElementById("room_name").value;
      
      firebase.database().ref("/").child(room_name).update({
            purpose:"Adding Roomname"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
    }
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name"+Room_names);
      row= "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log("name",name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}

  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
  import { getDatabase, 
    ref, 
    child, 
    get, 
    onValue } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCHsfHB_R93MtrIpY431wzgayfNBUgGa7I",
    authDomain: "http5214-f0b31.firebaseapp.com",
    projectId: "http5214-f0b31",
    storageBucket: "http5214-f0b31.appspot.com",
    messagingSenderId: "816930510223",
    appId: "1:816930510223:web:f7f40bbebdab86fc5ea7fa",
    measurementId: "G-N9CW4QWQRQ"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
  const db = getDatabase();

  const messages = ref(db, "/messages");

  onValue(messages, (snapshot) => {

    // console.log(snapshot);
    const ul = document.getElementById("messages");
    ul.replaceChildren();
    snapshot.forEach((childSnapshot) => {  

      const childKey = childSnapshot.key;
      const childData = childSnapshot.val();

      console.log(childKey);
      console.log(childData);

      const text = document.createTextNode(childData.message);
      const li = document.createElement("li");

      li.appendChild(text);
      ul.appendChild(li);

    });

  }, {

    onlyOnce: false

  })

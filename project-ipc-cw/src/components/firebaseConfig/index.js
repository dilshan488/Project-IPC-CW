import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

function StartFirebase(){
    const firebaseConfig = {
        apiKey: "AIzaSyAGbQsrPhHB6fBGYgzOcs_4JO7sSoUIHyo",
        authDomain: "fir-react-9d4a5.firebaseapp.com",
        databaseURL: "https://fir-react-9d4a5-default-rtdb.firebaseio.com",
        projectId: "fir-react-9d4a5",
        storageBucket: "fir-react-9d4a5.appspot.com",
        messagingSenderId: "112419214235",
        appId: "1:112419214235:web:86acadfad0b476baba873e"
      };
      const app = initializeApp(firebaseConfig);

      return getDatabase(app);
}

export default StartFirebase;
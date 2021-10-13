import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initfirebaseApp = () => initializeApp(firebaseConfig);
export default initfirebaseApp;
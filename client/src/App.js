import './App.css'
import Layout from "./Components/Layout"
import Login from "./Screens/Login/Login"
import MainContainer from './Containers/MainContainer';
import {Switch, Route, useHistory} from "react-router-dom"
import { useState, useEffect } from "react"

// auth sevices used to verify admin 
import {
  loginAdmin,
  signUpAdmin,
  removeToken,
} from "./Services/auth"

function App() {


  return (
    <div >
  
    </div>
  );
}

export default App;

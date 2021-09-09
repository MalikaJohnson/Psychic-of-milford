import './App.css'
import Layout from "./Components/Layout"
import Login from "./Screens/Login/Login"
import MainContainer from './Containers/MainContainer';
import {Switch, Route, useHistory} from "react-router-dom"
import { useState, useEffect } from "react"

// auth sevices used to verify admin 
import {
  loginAdmin,
  removeToken,
  verifyAdmin,
  signupAdmin
} from "./Services/auth"

function App() {
  const [currentAdmin, setCurrentAdmin] = useState(null)
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const adminData = await verifyAdmin();
      setCurrentAdmin(adminData);
    };
    handleVerify();
  }, []);

  const handleLogin = async (formData) => {
    const adminData = await loginAdmin(formData);
    setCurrentAdmin(adminData);
    history.push("/home");
  };

  // const handleSignUp = async (formData) => {
  //   const adminData = await signUpAdmin(formData);
  //   setCurrentAdmin(adminData);
  //   history.push("/home");
  // };


  const handleLogout = () => {
    setCurrentAdmin(null);
    localStorage.removeItem("authToken");
    removeToken();
  };

  return (
    <div >
      <Switch>
        <Route path='/login'>
          <Login handleLogin={handleLogin}/>
        </Route>
        <Layout currentAdmin={currentAdmin} handleLogout={handleLogout}>
        <Route exact path='/'>
          <MainContainer currentAdmin={currentAdmin}/>
        </Route>
        </Layout>
      </Switch>
    </div>
  );
}

export default App;

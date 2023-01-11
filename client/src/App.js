import './App.css';
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie"


import Login from "./components/Login"
import Home from './components/Home';

function App() {
  const [cookies, setCookie, removeCookie] = useCookies(['session']);
  const [view, setView] = useState("")
  const [logged, setLogged] = useState("")


  useEffect(() => {
    if (cookies.session) {
      setLogged(true)
    }
  })




  return (
    <div className="App">
      {!logged && <Login setLogged={setLogged} />}
      {view === "" && logged ? <Home /> : null}
    </div>
  );
}

export default App;

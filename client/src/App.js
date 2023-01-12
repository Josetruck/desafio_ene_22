import './App.css';
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie"

import ViewContext from './context/ViewContext';
import Login from "./components/Login"
import Home from './components/Home';
import NewUser from './components/forms/NewUser';

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
    <ViewContext.Provider value={{view, setView}}>
    <div className="App">
      {!logged && <Login setLogged={setLogged} />}
      {view === "" && logged ? <Home /> : null}
      {view === "nuevoUsuario" && logged ? <NewUser /> : null}
    </div>
    </ViewContext.Provider>
  );
}

export default App;

import './App.css';
import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar';
import { observer } from 'mobx-react-lite';
import { Context } from '.';
import { check } from './http/userAPI';
import { Spinner } from 'react-bootstrap';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
const App = observer(() => {
  const {user} = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
      check().then(data=>{
        user.setUser(data)
        user.setIsAuth(true)
      }).finally(()=> setLoading(false))

  }, [])

  if(loading){
    return <Spinner animation={'grow'}/>
  }

  return ( 
    <React.StrictMode>
        <BrowserRouter>
        <NavBar/>
        <AppRouter/>
    </BrowserRouter>
    </React.StrictMode>

  );
})

export default App;

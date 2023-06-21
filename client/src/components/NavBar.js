import React, {useContext} from 'react'
import { ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/utils';
import { Context } from '../index'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {Button} from 'react-bootstrap';
import {observer} from 'mobx-react-lite'
import { useNavigate,NavLink } from 'react-router-dom';

const NavBar = observer( ()=>{
    const {user} = useContext(Context)   
    const navigate = useNavigate(); 

    const logOut = () =>{
      user.setUser({})
      user.setIsAuth(false)
      localStorage.removeItem('token')
    }

    return (
        <Navbar bg="primary" expand="lg">
          <Container>
            <NavLink style={{color: "white", textDecoration: "none"}} to={SHOP_ROUTE}>BuyDevice</NavLink>
            {user.isAuth ? 
              <Nav className="ms-auto" style={{color: "white"}}>
                {user.user.role === "ADMIN" ? <Button variant={'outline-light'} onClick={()=> navigate(ADMIN_ROUTE)}>Админ панель</Button> : ""}
                <Button variant={'outline-light'} onClick={()=> navigate(BASKET_ROUTE)} className="ms-4">Корзина</Button>
                <Button variant={'outline-light'} onClick={()=> logOut()} className="ms-4">Выйти</Button>
              </Nav>
            :
              <Nav className="ms-auto" style={{color: "white"}}>
                <Button variant={'outline-light'} onClick={()=> navigate(LOGIN_ROUTE)} >Авторизация</Button>
              </Nav>
            }
          </Container>


      </Navbar>
    )
});

export default NavBar;

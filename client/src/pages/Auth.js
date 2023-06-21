import { observer } from 'mobx-react-lite';
import React, {useContext, useState} from 'react'
import { Container,Form, Card, Button,Row } from 'react-bootstrap'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { Context } from '..';
import { login, registration } from '../http/userAPI';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/utils'

const Auth = observer(() => {
  const {user} = useContext(Context);
  const location = useLocation();
  const navigate = useNavigate();
  const isLogin = location.pathname === LOGIN_ROUTE
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const click = async () =>{
    try {
      let data;
      if(isLogin){
        data = await login(email, password);
        console.log(data);
      } else {      
        data = await registration(email, password);
      }
      user.setUser(data);
      user.setIsAuth(true);
      navigate(SHOP_ROUTE);
    } catch (error) {
      alert(error.response.data.message)
    }

  }

  return (
    <Container
      className='d-flex justify-content-center align-items-center'
      style={{height: window.innerHeight - 54}}
    >
      <Card style={{width: 600}} className="p-5">
        <h2 className='m-auto'>{isLogin ?  'Авторизация' : 'Регистрация'}</h2>
        <Form className='d-flex flex-column'>
          <Form.Control
            className='mt-3'
            placeholder='Введите email...'
            value={email}
            onChange={e=>setEmail(e.target.value)}
          />
          <Form.Control
            className='mt-3'
            placeholder='Введите пароль...'
            value={password}
            onChange={e=>setPassword(e.target.value)}
            type='password'
          />
          <Row className='d-flex justify-content-between mt-3'>
            {isLogin ?  
              <div style={{width: "auto" }}>
                Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегестрируйтесь</NavLink>
              </div>
              :
              <div style={{width: "auto" }}>
                Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите</NavLink>
              </div>
            }
            <Button variant='outline-success' style={{width: "auto" }} onClick={()=> click()}>
              {isLogin ? "Войти" : "Регистрация" }
            </Button>
          </Row>
        </Form>


      </Card>

    </Container>
  )
})
export default Auth;
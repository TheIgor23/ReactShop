import React, { useContext, useEffect, useState } from 'react'
import { Button, Card, Col, Container,Form,Image, Row } from 'react-bootstrap'
import star from '../assets/BigStar.png'
import { useParams } from 'react-router-dom'
import { fetchOneDevice } from '../http/deviceAPI'
import { Context } from '..'
import { addDeviceBasket } from '../http/basketAPI'

export default function Device() {
  const {user} = useContext(Context);
  const [device, setDevice] = useState({info:[]})
  const {id} = useParams();
  const addDeviceToBasket = ()=>{
    addDeviceBasket(user.user.basketId, id);
  }
  useEffect(()=>{
    fetchOneDevice(id).then(data=>setDevice(data));
  }, [])
  return (
    <Container className='mt-3'>
      <Row>
        <Col md={4}>
          <Image width={300} height={300} src={device.img ? process.env.REACT_APP_API_URL + device.img : ''}/>
        </Col>
        <Col md={4}>
          <Form className='d-flex flex-column align-items-center'>
            <h2>{device.name}</h2>
            <div
              className='d-flex align-items-center justify-content-center'
              style={{background: `url(${star}) no-repeat center center`, width: 240, height: 240, backgroundSize: 'cover', fontSize:64}}
            >
              {device.rating}
            </div>
          </Form>
        </Col>
        <Col md={4}>
          <Card
            className='d-flex flex-column align-items-center justify-content-around '
            style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
          >
            <h3>От: {device.price} руб.</h3>
            <Button 
              variant={"outline-dark"}
              onClick={addDeviceToBasket}
            >
                Добавить в корзину
              </Button>
          </Card>
        </Col>
      </Row>
      <Row className='d-flex flex-column m-3'>
        <h1>Характеристики: </h1>
        {device.info.map((info, index) =>
            <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
              {info.title}: {info.description}
            </Row>
          )}
      </Row>
    </Container>
  )
}

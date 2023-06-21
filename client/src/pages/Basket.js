import React, { useContext, useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap';
import { Context } from '..'
import BasketItem from '../components/BasketItem';
import { fetchBasket } from '../http/basketAPI';
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBListGroup,
  MDBListGroupItem,
  MDBRipple,
  MDBRow,
  MDBTooltip,
  MDBTypography,
} from "mdb-react-ui-kit";

const Basket = () => {
  
    const {user} = useContext(Context);    
    const [devices, setDevices] = useState([])
    const device = [
      {
          id:1,
          img:"https://c.dns-shop.ru/thumb/st4/fit/320/250/bbad7825c89250f4371d7ece3c24007e/3a4090383434914b454f121fdc68ffe4e3450ead986076a319e125c89ef19a55.jpg",
          name: "Itel A25",
          price: 2221
      },
      {
          id:2,
          img:"https://c.dns-shop.ru/thumb/st4/fit/320/250/bbad7825c89250f4371d7ece3c24007e/3a4090383434914b454f121fdc68ffe4e3450ead986076a319e125c89ef19a55.jpg",
          name: "Itel A27",
          price: 10
      },
      {
        id:3,
        img:"https://c.dns-shop.ru/thumb/st4/fit/320/250/bbad7825c89250f4371d7ece3c24007e/3a4090383434914b454f121fdc68ffe4e3450ead986076a319e125c89ef19a55.jpg",
        name: "Itel A27",
        price: 10
      },
      {
        id:4,
        img:"https://c.dns-shop.ru/thumb/st4/fit/320/250/bbad7825c89250f4371d7ece3c24007e/3a4090383434914b454f121fdc68ffe4e3450ead986076a319e125c89ef19a55.jpg",
        name: "Itel A27",
        price: 10
      },
      {
        id:5,
        img:"https://c.dns-shop.ru/thumb/st4/fit/320/250/bbad7825c89250f4371d7ece3c24007e/3a4090383434914b454f121fdc68ffe4e3450ead986076a319e125c89ef19a55.jpg",
        name: "Itel A27",
        price: 10
    }

    ]
    useEffect(()=>{
        fetchBasket(user.user.basketId).then(data => setDevices(data.rows))
    },[])
    return (
      <section className="h-100 gradient-custom">
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center my-4">
          <MDBCol md="8">
            <MDBCard className="mb-4">
              <MDBCardHeader className="py-3">
                <MDBTypography tag="h5" className="mb-0">
                Корзина  
                </MDBTypography>
                
              </MDBCardHeader>
              <MDBCardBody>

                {devices.map(el=>
                  <BasketItem key={el.id} device={el}/>
                  
                )}
    
                
              </MDBCardBody>
            </MDBCard>
    
            <MDBCard className="mb-4">
              <MDBCardBody>
                <p>
                  <strong>Expected shipping delivery</strong>
                </p>
                <p className="mb-0">12.10.2020 - 14.10.2020</p>
              </MDBCardBody>
            </MDBCard>
    
            <MDBCard className="mb-4 mb-lg-0">
              <MDBCardBody>
                <p>
                  <strong>We accept</strong>
                </p>
                <MDBCardImage className="me-2" width="45px"
                  src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                  alt="Visa" />
                <MDBCardImage className="me-2" width="45px"
                  src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                  alt="American Express" />
                <MDBCardImage className="me-2" width="45px"
                  src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                  alt="Mastercard" />
                <MDBCardImage className="me-2" width="45px"
                  src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.png"
                  alt="PayPal acceptance mark" />
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="4">
            <MDBCard className="mb-4">
              <MDBCardHeader>
                <MDBTypography tag="h5" className="mb-0">
                  Summary
                </MDBTypography>
              </MDBCardHeader>
              <MDBCardBody>
                <MDBListGroup>
                  <MDBListGroupItem
                    className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                    Products
                    <span>$53.98</span>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center px-0">
                    Shipping
                    <span>Gratis</span>
                  </MDBListGroupItem>
                  <MDBListGroupItem
                    className="d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                    <div>
                      <strong>Total amount</strong>
                      <strong>
                        <p className="mb-0">(including VAT)</p>
                      </strong>
                    </div>
                    <span>
                      <strong>$53.98</strong>
                    </span>
                  </MDBListGroupItem>
                </MDBListGroup>
    
                <MDBBtn block size="lg">
                  Go to checkout
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
    )
}

export default Basket
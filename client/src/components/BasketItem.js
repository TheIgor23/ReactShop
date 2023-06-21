import React from 'react'
import { Card, Image } from 'react-bootstrap'
import {
  MDBBtn,
  MDBCol,
  MDBIcon,
  MDBInput,
  MDBRipple,
  MDBRow,
  MDBTooltip,
} from "mdb-react-ui-kit";
const BasketItem = ({device}) => {
    return (
      <div>
      <MDBRow>
      <MDBCol lg="3" md="12" className="mb-4 mb-lg-0">
        <MDBRipple rippleTag="div" rippleColor="light"
          className="bg-image rounded hover-zoom hover-overlay">
          <Image
            src={process.env.REACT_APP_API_URL + device.img}
            className="w-100" />
          <a href="#!">
            <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" , }}>
            </div>
          </a>
        </MDBRipple>
      </MDBCol>

      <MDBCol lg="5" md="6" className=" mb-4 mb-lg-0">
        <p>
          <strong>{device.name}</strong>
        </p>
        <p>Color: blue</p>
        <p>Size: M</p>

        <MDBTooltip wrapperProps={{ size: "sm" }} wrapperClass="me-1 mb-2"
          title="Remove item">
          <MDBIcon fas icon="trash" />
        </MDBTooltip>

        <MDBTooltip wrapperProps={{ size: "sm" , color: "danger" }} wrapperClass="me-1 mb-2"
          title="Move to the wish list">
          <MDBIcon fas icon="heart" />
        </MDBTooltip>
      </MDBCol>
      <MDBCol lg="4" md="6" className="mb-4 mb-lg-0">
        <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>
          <MDBBtn className="px-3 me-2">
            <MDBIcon fas icon="minus" />
          </MDBBtn>

          <MDBInput defaultValue={1} min={0} type="number" label="Quantity" />

          <MDBBtn className="px-3 ms-2">
            <MDBIcon fas icon="plus" />
          </MDBBtn>
        </div>

        <p className="text-start text-md-center">
          <strong>{device.price} руб.</strong>
        </p>
      </MDBCol>
      
    </MDBRow>
    
    <hr className="my-4" />
    </div>
    );
}

export default BasketItem
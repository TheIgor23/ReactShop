import React, {Repeat} from 'react'
import { Card, Col ,Image} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import star from '../assets/star_outline.png';
import { DEVICE_ROUTE } from '../utils/utils';
import {
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBIcon    
  } from "mdb-react-ui-kit";

const DeviceItem = ({device, type}) => {
    let stars = [""];
    
    for (let i = 0; i < device.rating; i++) {
      stars.push(<MDBIcon fas icon="star" />)
    }
    const navigate = useNavigate()

    return (
        <MDBCol md="12" lg="4" className="mb-4 mb-lg-0 mt-4">
          <MDBCard
            onClick={()=>navigate(DEVICE_ROUTE + `/${device.id}`)}
          
          >
            <div className="p-3 text-center" 
            style={{cursor:"pointer"}}>
            <MDBCardImage
              src={process.env.REACT_APP_API_URL + device.img}
              height={150}
              width={100}
              alt={device.name}
            />
            </div>
           
            <MDBCardBody>
              <div className="d-flex justify-content-between">
                <p className="small text-muted">

                    {type.name}

                </p>
                <p className="small text-danger">
                  <s>{device.price - 500} руб</s>
                </p>
              </div>

              <div className="d-flex justify-content-between mb-3">
                <h5 className="mb-0">{device.name}</h5>
                <h5 className="text-dark mb-0">{device.price} руб</h5>
              </div>

              <div className="d-flex justify-content-between mb-2">
                <p className="text-muted mb-0">
                  Осталось: <span className="fw-bold">6</span>
                </p>
                <div className="ms-auto text-warning">
                  {stars}
                </div>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
    )
}

export default DeviceItem
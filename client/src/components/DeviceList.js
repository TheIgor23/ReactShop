import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Row } from 'react-bootstrap';
import { Context } from '..'
import DeviceItem from './DeviceItem';
import {
    MDBContainer,
    MDBRow
  } from "mdb-react-ui-kit";
const DeviceList = observer(() =>{
    const {device} = useContext(Context);

    return (
    <MDBContainer fluid className="my-5">
      <MDBRow>
        {device.devices.map(el=>
                <DeviceItem 
                  key={el.id} 
                  device={el} 
                  type={ device.types.find(e=> {return e.id === el.typeId}) }
                  />
        )}
      </MDBRow>
    </MDBContainer>
       
    )
})

export default DeviceList
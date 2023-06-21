import { observer } from 'mobx-react-lite';
import { Context } from '..';
import React, { useContext } from 'react'
import { Row,Card } from 'react-bootstrap';

const BrandBar = observer(() =>{
    const {device} = useContext(Context);
    return (
        <Row className='d-flex'>
            {device.brands.map( brand =>
                <Card
                    key={brand.id}
                    className="p-3"
                    style={{width: "auto",cursor: 'pointer'}}
                    onClick={()=>device.setSelectedBrand(brand)}
                    border={brand.id === device.selectedBrand.id ? 'danger':'light'}
                >
                    {brand.name}
                </Card>
            )}
        </Row>
    )
})

export default BrandBar;
import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Context } from '..';
import BrandBar from '../components/BrandBar';
import DeviceList from '../components/DeviceList';
import TypeBar from '../components/TypeBar';
import Pages from '../components/Pages';
import { fetchBrands, fetchDevices, fetchType } from '../http/deviceAPI';

const Shop = observer(() => {
	const { device } = useContext(Context);

	useEffect(() => {
		fetchType().then((data) => device.setTypes(data));
		fetchBrands().then((data) => device.setBrands(data));
		fetchDevices(null, null, 1, 3).then((data) => {
			device.setDevices(data.rows);
			device.setTotalCount(data.count);
		});
	}, []);

	useEffect(() => {
		fetchDevices(device.selectedType.id, device.selectedBrand.id, device.page, 3).then(
			(data) => {
				device.setDevices(data.rows);
				device.setTotalCount(data.count);
			},
		);
	}, [device.page, device.selectedType, device.selectedBrand]);
	return (
		<Container>
			<BrandBar />
			<TypeBar />
			<DeviceList />
			<Pages />
		</Container>
	);
});

export default Shop;

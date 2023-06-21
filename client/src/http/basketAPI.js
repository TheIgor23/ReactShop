import { authHost, host } from ".";


export const fetchBasket = async(basketId) =>{
    const {data} = await host.get('api/basket', {params: {
        basketId
    }})
    return data
}

export const addDeviceBasket = async(basketId, deviceId)=>{
    const {data} = await authHost.post('api/basket', {basketId, deviceId})
    return data;
}

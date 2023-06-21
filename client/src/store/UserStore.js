import {makeAutoObservable} from 'mobx'

export default class UserStore{
    constructor(){
        this._isAuth = false;
        this._user = {};
        this._basketDevices = [];
        this._basketId = 0;
        makeAutoObservable(this);
    }

    setIsAuth(bool){
        this._isAuth = bool;
    }

    setUser(user){
        this._user = user;
    }

    setBasketDevices(basketDevices){
        this._basketDevices = basketDevices;
    }

    setBasketId(id){
        this._basketId = id
    }

    get isAuth(){
        return this._isAuth
    }

    get user(){
        return this._user
    }

    get basketDevices(){
        return this._basketDevices;
    }

    get basketId(){
        return this._basketId;
    }
}
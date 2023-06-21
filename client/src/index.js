import React, {createContext} from 'react';
import UserStore from './store/UserStore';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import DeviceStore from './store/DeviceStore';

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value={{
        user: new UserStore(),
        device: new DeviceStore()
    }}>
        <App />
    </Context.Provider>
);


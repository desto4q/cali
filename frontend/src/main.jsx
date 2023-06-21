import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AppContext } from './context/context.jsx'
import {Provider} from "react-redux"
import store from './redux/Store.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <>
    <Provider store={store}>
        <AppContext children={<App/>}/>
    </Provider>
    </>
)
// <React.StrictMode>
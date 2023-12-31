import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AppContext } from './context/context.jsx'
import {Provider} from "react-redux"
import store from './redux/Store.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const client = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <>
    
    <React.StrictMode>
        <QueryClientProvider client={client}>
            <Provider store={store}>
                <AppContext children={<App/>}/>
            </Provider>
        </QueryClientProvider>
    </React.StrictMode>
    </>
)
// <React.StrictMode>
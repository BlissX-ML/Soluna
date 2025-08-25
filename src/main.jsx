import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './components/HomePage/Caroudel-noSlick/store'

createRoot(document.getElementById('root')).render(< App />)

// <Provider store={store}>
//   <StrictMode>
// {/* </StrictMode>
//   </Provider> */}
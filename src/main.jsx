// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { MDXProvider } from '@mdx-js/react'
// import { Provider } from 'react-redux'
// import store from './components/HomePage/Caroudel-noSlick/store'

createRoot(document.getElementById('root')).render(
    <MDXProvider>
        <App />
    </MDXProvider>
)

// <Provider store={store}>
//   <StrictMode>
// {/* </StrictMode>
//   </Provider> */}
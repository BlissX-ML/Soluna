import { createRoot } from 'react-dom/client'
import { MDXProvider } from '@mdx-js/react'
import './index.css'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
    <MDXProvider>
        <App />
    </MDXProvider>
)


// import { Provider } from 'react-redux'
// import store from './components/HomePage/Caroudel-noSlick/store'

// <Provider store={store}>
//   <StrictMode>
// {/* </StrictMode>
//   </Provider> */}
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Nav from './pages/Nav.jsx'
import Homepage from './pages/Homepage.jsx'
import Recap from './pages/Recap.jsx'
import Footprint from './pages/Footprint.jsx'
import Projects from './pages/Projects.jsx'
import About from './pages/About.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Nav />,
    children: [
      { index: true, element: <Homepage /> },
      { path: 'recap', element: <Recap /> },
      { path: 'footprint', element: <Footprint /> },
      { path: 'projects', element: <Projects /> },
      { path: 'about', element: <About /> },
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App

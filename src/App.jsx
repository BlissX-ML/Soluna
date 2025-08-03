import './App.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Nav from './pages/Nav'
import Homepage from './pages/Homepage'
import Recap from './pages/Recap'
import Footprint from './pages/Footprint'
import Projects from './pages/Projects'
import About from './pages/About'

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

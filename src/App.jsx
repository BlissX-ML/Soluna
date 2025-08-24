import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Nav from './pages/Nav.jsx'
// import Homepage from './pages/Homepage.jsx'
import RecapContent from './components/Recap/DefaultContent.jsx'
import Footprint from './pages/Footprint.jsx'
import Projects from './pages/Projects.jsx'
import About from './pages/About.jsx'
import RecapDetailed from './pages/RecapDetailed'
import { lazy, Suspense } from 'react'
import Loading from './pages/Loading'
import RecapAside from './pages/RecapAside'

const Homepage = lazy(() => import('./pages/Homepage.jsx'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <Nav />,
    children: [
      { index: true, element: <Homepage /> },
      {
        path: 'recap',
        element: <RecapAside />,
        children: [
          { index: true, element: <RecapContent />, },
          { path: ':recapId', element: <RecapDetailed /> }

        ]
      },
      { path: 'footprint', element: <Footprint /> },
      { path: 'projects', element: <Projects /> },
      { path: 'about', element: <About /> },
    ]
  }
])

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  )
}

export default App

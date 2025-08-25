import './App.css'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import { lazy, Suspense } from 'react'

import Nav from './Pages/Nav'
import RecapContent from './components/Recap/DefaultContent.jsx'
import Footprint from './Pages/Footprint.jsx'
import Projects from './Pages/Projects.jsx'
import About from './Pages/About.jsx'
import RecapDetailed from './Pages/RecapDetailed'

import Loading from './Pages/Loading'
import RecapAside from './Pages/RecapAside'


const Homepage = lazy(() => import('./Pages/Homepage.jsx'))

const router = createHashRouter([
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

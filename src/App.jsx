import './App.css'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import { lazy, Suspense } from 'react'

import Nav from './pages/Nav.jsx'
import RecapSubNav from './components/Recap/Navigation/RecapSubNav.jsx'
import Footprint from './pages/Footprint.jsx'
import Projects from './pages/Projects.jsx'
import About from './pages/About.jsx'
import RecapContent from './pages/RecapContent.jsx'

import Loading from './pages/Loading.jsx'
import RecapAside from './pages/RecapAside.jsx'
import Introduction from './pages/Introduction'


const Homepage = lazy(() => import('./pages/Homepage.jsx'))

const router = createHashRouter([
  { path: '/', element: <Introduction /> },
  {
    element: <Nav />,
    children: [
      {
        path: '/home',
        element: <Homepage />
      },
      {
        path: '/recap',
        element: <RecapAside />,
        children: [
          { index: true, element: <RecapSubNav />, },
          { path: ':recapId', element: <RecapContent /> }
        ]
      },
      {
        path: '/footprint',
        element: <Footprint />
      },
      {
        path: '/projects',
        element: <Projects />
      },
      {
        path: '/about',
        element: <About />
      },
    ]
  },

])

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  )
}

export default App

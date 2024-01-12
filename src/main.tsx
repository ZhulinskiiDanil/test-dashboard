import '@/assets/globals.scss'
import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Pages
import Dashboard from '@/pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />
  },
  {
    path: '/product',
    element: <Dashboard />
  },
  {
    path: '/customers',
    element: <Dashboard />
  },
  {
    path: '/income',
    element: <Dashboard />
  },
  {
    path: '/promote',
    element: <Dashboard />
  },
  {
    path: '/help',
    element: <Dashboard />
  }
])

ReactDOM.createRoot(
  document.getElementById('root')!
).render(
  <RouterProvider router={router} />
)

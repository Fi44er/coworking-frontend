import React from 'react'
import './index.scss'
import ReactDOM from 'react-dom/client'

import { routeTree } from './routeTree.gen'

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

import { RouterProvider, createRouter } from '@tanstack/react-router'

const router = createRouter({ routeTree })

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

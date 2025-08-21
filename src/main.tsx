import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { QueryClient, QueryClientProvider } from 'react-query'

import { createRouter, RouterProvider } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen.ts'

// Create a new router instance
const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1, // retry 1 lần nếu lỗi
      refetchOnWindowFocus: false, // tránh load lại khi đổi tab
      staleTime: 1000 * 60, // cache 1 phút
    },
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
)

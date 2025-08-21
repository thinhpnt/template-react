import * as React from 'react'
import { ConfigProvider, theme } from "antd";
import { Link, Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import Header from '@/components/Header'
import { useUIStore } from '@/stores/ui.store';
import Sidebar from '@/components/Sidebar';

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  const { theme: mode } = useUIStore();

  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", mode);
  }, [mode]);

  return (
    <React.Fragment>
      <ConfigProvider
        theme={{
          algorithm: mode === 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm,
        }}
      >
        <div className='flex flex-col h-screen'>
          <Header />
          <div className='bg-header text-tx-primary flex h-full overflow-y-auto'>
            <Sidebar />
            <div className='bg-header text-tx-primary flex w-full h-full overflow-y-auto'>
              <Outlet />
            </div>
          </div>
        </div>
        <TanStackRouterDevtools />
      </ConfigProvider>
    </React.Fragment>
  )
}

import * as React from 'react'
import { ConfigProvider, theme } from "antd";
import { Outlet, createRootRoute } from '@tanstack/react-router'
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

  const lightTheme = {
    algorithm: theme.defaultAlgorithm,
    token: {
      // colorPrimary: "#1677ff",
      colorBgBase: "#ffffff",
      colorText: "#34495e",
    },
  };

  const darkTheme = {
    algorithm: theme.darkAlgorithm,
    token: {
      // colorPrimary: "#ff784e",
      colorBgBase: "#34495e",
      colorText: "#ffffff",
    },
    components: {
      Menu: {
        colorBgContainer: "#34495e",
        colorItemBgSelected: "#2c3e50",
        colorItemTextSelected: "#74a3d6",
        subMenuItemSelectedColor: "#74a3d6",
      }
    }
  };

  return (
    <React.Fragment>
      <ConfigProvider
        theme={mode === 'dark' ? darkTheme : lightTheme}
      >
        <div className='flex flex-col h-screen'>
          <Header />
          <div className='bg-base text-tx-primary flex flex-1 overflow-hidden'>
            <Sidebar />
            <div className='bg-base px-4 text-tx-primary flex w-full overflow-y-auto'>
              <Outlet />
            </div>
          </div>
        </div>
        <TanStackRouterDevtools />
      </ConfigProvider>
    </React.Fragment>
  )
}

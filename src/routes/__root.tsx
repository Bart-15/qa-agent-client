import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

import App from '@/App';

export const Route = createRootRoute({
  component: () => (
    <>
      <App />
      <hr />
      <div className="p-4">
        <Outlet />
      </div>
      <TanStackRouterDevtools />
    </>
  ),
});

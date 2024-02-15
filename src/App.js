import { Outlet, RouterProvider } from "react-router";
import Home from "./components/Home";
import { createBrowserRouter } from "react-router-dom";
import UserDetails from "./components/UserDetails";

function App() {
  return (
    <RouterProvider router={appRouter}>
      Hello
      <Outlet />
    </RouterProvider>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/userDetails/:id",
    element: <UserDetails />,
  },
]);

export default App;

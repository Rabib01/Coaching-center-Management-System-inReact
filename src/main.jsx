import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import HomePage from "./components/homePage.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProfilesPage from "./components/ProfilesPage.jsx";
import NotFoundPage from "./components/NotFoundPage.jsx";
import ProfilePage from "./components/ProfilePage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/profiles",
    element: <ProfilesPage />,
    children: [
      {
        path: "/profiles/:profileId",
        element: <ProfilePage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* <HomePage /> */}
    <RouterProvider router={router} />
  </StrictMode>,
);

{
  // Learning of react router was done from this video
  //  https://www.youtube.com/watch?v=oTIJunBa6MA
  /* <RouterProvider router={router} /> -> Deferred the entry point of our application to react router  */
  // router provider component is built using the comtext api of react
  // 1st - screate a root for the homepage
  //
  // {
  //   path: "/profiles",
  //   element: <ProfilesPage />,
  // },
  // for this if we put localhost/profiles we will get an error message -> So we want utr own page nnot found error over her e
  // 404 page
  // Have a button there to go back to the index or the root age is a good practise of UX
  // You don't use the a tag or the anchor tag directly, you use the link component
  // difference between a and links is that a tags does a whole refresh and js loadup before getting to the actual page
  // compared to llink component, it is not going to be doing the page refresh at all and is going to be doing the client side routing
  // whilew both of them are a tags when you inspect them in the dev toolff
  // t.b.c : 10:26
}

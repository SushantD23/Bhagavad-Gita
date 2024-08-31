import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App.jsx";
import "./index.css";
import AllChapters from "./Pages/AllChapter/AllChapters.jsx";
import Chapter from "./Pages/IndvChapter/Chapter.jsx";
import About from "./Pages/About/About.jsx";
import NotFound from "./Pages/NotFound/NotFound.jsx";
import Vod from "./Pages/Vod/Vod.jsx";
import Issue from "./Pages/Issue/Issue.jsx";


// Creating new QueryClient instances...
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <About />,
      },
      {
        path: "/chapters",
        element: <AllChapters />,
      },
      {
        path: "/chapter/:id",
        element: <Chapter />,
      },
      {
        path: "/verseoftheday",
        element: <Vod />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/issuefeed",
        element: <Issue />
      },
      {
        path: "*",
        element: <NotFound />
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </>
);

import { RouterProvider, createBrowserRouter } from "react-router-dom";

// import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ServicesPage from "./pages/Services";
import MediaPage from "./pages/Media";
import ContactPage from "./pages/Contact";
import IntakeFormPage from "./pages/IntakeForm";
// import ScrollToTop from "./ScrollToTop";
import LoginPage from "./pages/Login";

import { QueryClientProvider } from "@tanstack/react-query";
import { QueryClient } from "@tanstack/react-query";

// import LifeCoachingSignupPage from "./pages/signup/LifeCoachingSignup";
import YogaPage from "./pages/Yoga";
// import YogaSignupPage from "./pages/signup/YogaSignup";
import RootLayout from "./pages/Root";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    id: "root",
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "services", element: <ServicesPage /> },
      { path: "media", element: <MediaPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "login", element: <LoginPage /> },
      { path: "intake-form", element: <IntakeFormPage /> },

      {
        path: "yoga",
        element: <YogaPage />,
      },
    ],
  },
]);

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}>{/* <ScrollToTop /> */}</RouterProvider>
    </QueryClientProvider>
  );
}

export default App;

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Singup from "./pages/Singup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Profile from "./features/Profile/Profile";
import PageNotFound from "./pages/PageNotFound";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./ui/ProtectedRoute";
import AppLayout from "./ui/AppLayout";
import Test from "./pages/Test";
import Timeline from "./pages/Timeline";
import Comment from "./pages/Comment";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // stalTime: 60 * 100,
      stalTime: 0,
      retry: 1,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate replace to="home" />} />
            <Route path="home" element={<Home />} />
            <Route path="timeline" element={<Timeline />} />
            <Route path="Profile/:myname" element={<Profile />} />
            <Route path="comment/:id" element={<Comment />} />
            <Route path="Test/:MovieId" element={<Test />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
          <Route path="Login" element={<Login />} />

          {/* <Route path="Singup" element={<Singup />} /> */}
        </Routes>
      </BrowserRouter>

      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "var(--color-grey-0)",
            color: "var(--color-grey-700)",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
{
  /* <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "var(--color-grey-0)",
              color: "var(--color-grey-700)",
            },
          }}
        /> */
}

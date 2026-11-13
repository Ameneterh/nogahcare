import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage.jsx";
import AboutPage from "./Pages/AboutPage.jsx";
import ContactPage from "./Pages/ContactPage.jsx";
import LoginPage from "./Pages/LoginPage.jsx";
import RegistrationPage from "./Pages/RegistrationPage.jsx";
import PrivacyPolicy from "./Pages/PrivacyPolicy.jsx";
import TermsOfUse from "./Pages/TermsOfUse.jsx";
import ScrollToTop from "./Components/ScrollToTop.jsx";
import NotFoundPage from "./Pages/NotFoundPage.jsx";
import Spinner from "./Components/Spinner.jsx";
import { Navigate } from "react-router-dom";
import { useAuthStore } from "./store/authStore.js";
import { toast } from "react-hot-toast";
import { Toaster } from "react-hot-toast";

import { useEffect, useRef } from "react";

import { useLocation } from "react-router-dom";

// protected routes
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, user, justLoggedOut, setJustLoggedOut } =
    useAuthStore();

  useEffect(() => {
    if (!isAuthenticated && !justLoggedOut) {
      toast.error("You need to log in to access this page");
    }
  }, [isAuthenticated, justLoggedOut, setJustLoggedOut]);

  if (!isAuthenticated) {
    return <Navigate to="/user-login" replace />;
  }

  if (user?.status !== "active") {
    return <Navigate to="/verify-handler" replace />;
  }

  return children;
};

// redirect authenticated users to the home page
const RedirectAuthenticatedUser = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();

  if (isAuthenticated && user?.status === "active") {
    return <Navigate to="/user-dashboard?tab=dash" replace />;
  }

  return children;
};

function App() {
  const { isCheckingAuth, checkAuth, isAuthenticated, user } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isCheckingAuth) return <Spinner />;

  return (
    <div className="min-h-screen bg-gradient-to-tr bg-white flex relative overflow-hidden">
      {/* routes */}
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated && user?.status === "active" ? (
              <Navigate to="/user-dashboard?tab=dash" replace />
            ) : (
              <HomePage />
            )
          }
        />
        <Route
          path="/user-login"
          element={
            isAuthenticated && user?.status === "active" ? (
              <Navigate to="/user-dashboard?tab=dash" replace />
            ) : (
              <LoginPage />
            )
          }
        />
        <Route
          path="/register"
          element={
            isAuthenticated && user?.status === "active" ? (
              <Navigate to="/user-dashboard?tab=dash" replace />
            ) : (
              <RegistrationPage />
            )
          }
        />

        {/* protected routes */}
        {/* <Route
          path="/user-dashboard"
          element={
            <ProtectedRoute>
              <UserDashboard />
            </ProtectedRoute>
          }
        /> */}

        {/* unprotected routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Toaster />
    </div>
  );
}

export default App;

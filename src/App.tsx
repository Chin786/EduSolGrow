import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { ThemeProvider } from "./context/ThemeContext";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import UniversityDetails from "./pages/UniversityDetails";
import About from "./pages/About";
import AIChat from "./components/chat/AIChat";
import Contact from "./pages/Contact";
import Login from "./pages/auth/Login";
import Profile from "./components/profile/UserProfile";
import AdminDashboard from "./pages/users/Dashboard";
import UserManagement from "./pages/users/UserManagement";
import RoleManagement from "./pages/users/RoleManagement";
import NavigationManagement from "./pages/users/NavigationMangement";
import DocumentManagement from "./pages/users/DocumentManagement";
import ForgotPasswordForm from "./pages/auth/ForgotPasswordForm";
import RegistrationForm from "./components/common/RegistrationForm";
import UniversitySection from "./components/home/UniversitySection";
import UploadDocument from "./pages/documents/UploadDocument";
import PDFViewer from "./pages/pdf/PDFViewer";
import UniversitySlider from "./components/home/UniversitySlider";
const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <Provider store={store}>
      <ThemeProvider>
        <AuthProvider>
          <Router>
            <div className="min-h-screen flex flex-col">
              <Navbar
                toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
                isSidebarOpen={isSidebarOpen}
              />
              <div className="flex flex-1 pt-16">
                <Sidebar
                  isOpen={isSidebarOpen}
                  onClose={() => setIsSidebarOpen(false)}
                />
                <main
                  className={`flex-1 transition-all duration-300 ease-in-out ${
                    isSidebarOpen ? "ml-64" : "ml-0"
                  }`}
                >
                  <Routes>
                    {/* Public Routes */}
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    {/* Auth Routes */}
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<RegistrationForm />} />
                    <Route
                      path="/forgot-password"
                      element={<ForgotPasswordForm />}
                    />
                    {/* Protected Routes */}
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/chat" element={<AIChat />} />
                    <Route path="/university/" element={<UniversitySlider />} />
                    <Route
                      path="/university/:slug"
                      element={<UniversityDetails />}
                    />
                    <Route path="/upload" element={<UploadDocument />} />
                    <Route path="/pdfviewer" element={<PDFViewer />} />
                    {/* Admin Routes */}
                    <Route path="/admin" element={<AdminDashboard />} />
                    <Route path="/admin/users/*" element={<UserManagement />} />
                    <Route path="/admin/roles/*" element={<RoleManagement />} />
                    <Route
                      path="/admin/navigation/*"
                      element={<NavigationManagement />}
                    />
                    <Route
                      path="/admin/documents/*"
                      element={<DocumentManagement />}
                    />
                  </Routes>
                </main>
              </div>
              <Footer />
            </div>
          </Router>
        </AuthProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default App;

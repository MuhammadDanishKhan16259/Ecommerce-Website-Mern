import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
// import PagenotFound from "./pages/PagenotFound";
import Register from "./pages/Auth/Register";
import Pagenotfound from "./pages/Pagenotfound";
import Login from "./pages/Auth/Login";
import Dashboard from "./pages/user/Dashboard";
import PrivateRoute from "./components/Routes/Private";
// import PrivateRoute from "./components/Routes/Private";
// import PrivateRoute from "./components/Layout/Routes/Private";
// import { AuthProvider } from "./context/Auth.jsx";
function App() {
  return (
    // <AuthProvider>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="" element={<Dashboard />} />
        </Route>

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/*" element={<Pagenotfound />} />
      </Routes>
    </Router>
    // </AuthProvider>
  );
}

export default App;


import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom'

//pages
import HomePage from "./pages/Home";
import ContactPage from './pages/Contact';
import AboutPage from './pages/About';
import ReviewPage from './pages/Review';
import WorkPage from './pages/Work';
import LoginPage from "./pages/Login";
import "./styles/main.scss";


import { AuthProvider } from "./pages/AuthContext";
import ProtectedRoute from "./pages/ProtectedRoute";

function App() {
  return (
    <>

      <AuthProvider>
        <BrowserRouter>
        <Routes>

          {/* Login page */}
          <Route path="/" element={<LoginPage />} />

          {/* Home page ( access to User + Admin) */}
          <Route path="/home" element={<ProtectedRoute ><HomePage/></ProtectedRoute>}/>

          {/* access to admin only (other pages) */}
          <Route path="/work" element={<ProtectedRoute role="admin"><WorkPage /></ProtectedRoute>} />
          <Route path="/about" element={<ProtectedRoute role="admin"><AboutPage /></ProtectedRoute>} />
          <Route path="/review" element={<ProtectedRoute role="admin"><ReviewPage /></ProtectedRoute>} />
          <Route path="/review/:id" element={<ProtectedRoute role="admin"><ReviewPage /></ProtectedRoute>} />
          <Route path="/contact" element={<ProtectedRoute role="admin"><ContactPage /></ProtectedRoute>} />
    
        </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;

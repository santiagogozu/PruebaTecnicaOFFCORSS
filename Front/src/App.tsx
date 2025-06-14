import {ApolloProvider} from "@apollo/client";
import client from "./apollo";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./components/login/Login";
import Dashboard from "./pages/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductDetail from "./components/productDetail/ProductDetail";
import "tachyons/css/tachyons.min.css";
import {AuthProvider} from "./context/AuthContext";
import UserDetail from "./components/user/UserDetail";
import Navbar from "./components/common/Navbar";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Navbar />
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route path="/producto/:id" element={<ProductDetail />} />
            <Route path="/usuario" element={<UserDetail />} />
            {/* Redirige cualquier ruta no encontrada a /login */}
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
        </Router>
      </AuthProvider>
    </ApolloProvider>
  );
}

export default App;

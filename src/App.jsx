import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Form,
  Input,
  Button,
  Modal,
  Card,
  Typography,
  Layout,
  theme,
} from "antd";
import { LockOutlined } from "@ant-design/icons";
import Footer from "./components/footer/Footer";
import RSVPForm from "./components/RSVPForm";
import AdminDashboard from "./components/wedding/AdminDashboard";
import Entry from "./Entry";

const { Title, Text } = Typography;
const { Content } = Layout;

// Password configuration
const PASSWORD = "BKLove2026"; // Change this to your desired password
const PASSWORD_LOCALSTORAGE_KEY = "wedding_auth";

const ProtectedRoute = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const { token } = theme.useToken();

  useEffect(() => {
    const auth = localStorage.getItem(PASSWORD_LOCALSTORAGE_KEY);
    setAuthenticated(auth === PASSWORD);
    setLoading(false);
  }, []);

  if (loading) {
    return null; // or a loading spinner
  }

  return authenticated ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

const LoginPage = () => {
  const [form] = Form.useForm();
  const location = useLocation();
  const { token } = theme.useToken();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (values) => {
    if (values.password === PASSWORD) {
      localStorage.setItem(PASSWORD_LOCALSTORAGE_KEY, PASSWORD);
      window.location.href = from; // Full page reload to ensure state updates
    } else {
      Modal.error({
        title: "Incorrect Password",
        content: "The password you entered is incorrect. Please try again.",
      });
    }
  };

  return (
    <div
      style={{
        backgroundImage: "url('https://i.imgur.com/2EB0XUr.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        style={{
          width: 400,
          textAlign: "center",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          backdropFilter: "blur(5px)",
        }}
        bordered={false}
      >
        <div style={{ marginBottom: 24 }}>
          <LockOutlined style={{ fontSize: 48, color: token.colorPrimary }} />
          <Title level={3} style={{ marginTop: 16 }}>
            Enter the password to view
          </Title>
        </div>

        <Form form={form} layout="vertical" onFinish={handleLogin}>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please enter the password" }]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Wedding password"
              size="large"
            />
          </Form.Item>

          <Form.Item>
            <Button
              style={{ color: "#fff", background: "#333" }}
              htmlType="submit"
              block
              size="large"
            >
              Continue
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Entry />
              <Footer />
            </ProtectedRoute>
          }
        />

        <Route
          path="/rsvp"
          element={
            <ProtectedRoute>
              <RSVPForm />
              <Footer />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        {/* Redirect any unknown paths to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;

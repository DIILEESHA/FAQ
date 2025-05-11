import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from "./components/footer/Footer";
import RSVPForm from "./components/RSVPForm";
import AdminDashboard from "./components/wedding/AdminDashboard"
import Entry from "./Entry";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Entry />
            <Footer />
          </>
        } />
        <Route path="/rsvp" element={
          <>
            <RSVPForm />
            <Footer />
          </>
        } />


  <Route path="/admin" element={
          <>
            <AdminDashboard />
          </>
        } />
        
      </Routes>
    </Router>
  );
};

export default App;
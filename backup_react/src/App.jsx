import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Onboarding from './pages/Onboarding';
import Login from './pages/Login';
import CustomerHome from './pages/CustomerHome';
import SelectService from './pages/SelectService';
import SelectBarber from './pages/SelectBarber';
import BookingCalendar from './pages/BookingCalendar';
import BookingConfirmation from './pages/BookingConfirmation';
import BarberDashboard from './pages/BarberDashboard';
import AdminDashboard from './pages/AdminDashboard';

// Temporary Dev Navigation Page
const DevNav = () => (
  <div className="p-8 bg-background-light dark:bg-background-dark min-h-screen text-text-dark dark:text-text-light">
    <h1 className="text-2xl font-bold mb-6">Final Touch - Dev Navigation</h1>
    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-semibold border-b pb-2">Customer Flow</h2>
      <Link to="/" className="text-primary hover:underline">Onboarding (Entry)</Link>
      <Link to="/login" className="text-primary hover:underline">Login</Link>
      <Link to="/home" className="text-primary hover:underline">Customer Home</Link>
      <Link to="/select-service" className="text-primary hover:underline">Select Service</Link>
      <Link to="/select-barber" className="text-primary hover:underline">Select Barber</Link>
      <Link to="/booking" className="text-primary hover:underline">Booking Calendar</Link>
      <Link to="/confirmation" className="text-primary hover:underline">Confirmation</Link>

      <h2 className="text-xl font-semibold border-b pb-2 mt-4">Staff & Admin</h2>
      <Link to="/barber-dashboard" className="text-primary hover:underline">Barber Dashboard</Link>
      <Link to="/admin-dashboard" className="text-primary hover:underline">Admin Dashboard</Link>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="/dev" element={<DevNav />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<CustomerHome />} />
        <Route path="/select-service" element={<SelectService />} />
        <Route path="/select-barber" element={<SelectBarber />} />
        <Route path="/booking" element={<BookingCalendar />} />
        <Route path="/confirmation" element={<BookingConfirmation />} />
        <Route path="/barber-dashboard" element={<BarberDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;

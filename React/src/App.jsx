import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import AdminLogin from './Components/AdminLogin';
import AdminDashboard from './Components/AdminDashboard';
import ManageTableComponent from './Components/ManageTable/ManageTableComponent';
import ManageFeedbackComponent from './Components/Feedback/ManageFeedbackComponent';
import ManageReservationComponent from './Components/TableReservation/ManageReservationComponent';
import ManageBanquetHallComponent from './Components/BanquetHall/ManageBanquetHallComponent';
import ManageEventReservations from './Components/EventRegistration/ManageEventReservations';
import ManageItems from './Components/ManageItem/ManageItems';
import CustomerRegister from './Components/CustomerRegister';
import CustomerLogin from './Components/CustomerLogin';
import CustomerDashboard from './Components/CustomerDashboard';
import ManageMembers from './Components/ManageMember/ManageMembers';
import ManageCustomers from './Components/Customer/ManageCustomers';
import ManageStaff from './Components/Staff/ManageStaff';
import ManagePlaceOrders from './Components/PlaceOrder/ManagePlaceOrders';
import OrderDetailsComponent from './Components/PlaceOrder/OrderDetailsComponent';
import ManageOrdersComponent from './Components/ManageOrder/ManageOrdersComponent';
import ManageBlacklistComponent from './Components/Customer/ManageBlacklistComponent';

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isCustomer, setIsCustomer] = useState(false);
  const [isCustomerLoggedIn, setIsCustomerLoggedIn] = useState(false);
  const [customerDetails, setCustomerDetails] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleCustomerLogin = (details) => {
    setIsCustomerLoggedIn(true);
    setCustomerDetails(details);
  };

  return (
    <Router>
      <div className="App">
        {!isAdmin && !isCustomer && (
          <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
            <div style={{ border: '1px solid black', padding: '10px', cursor: 'pointer' }} onClick={() => setIsAdmin(true)}>
              Admin
            </div>
            <div style={{ border: '1px solid black', padding: '10px', cursor: 'pointer' }} onClick={() => setIsCustomer(true)}>
              Customer
            </div>
          </div>
        )}
        {isAdmin ? (
          <Routes>
            <Route path="/" element={<AdminDashboard />} />
            <Route path="/manage-table" element={<ManageTableComponent />} />
            <Route path="/table-reservation" element={<ManageReservationComponent />} />
            <Route path="/event-reservation" element={<ManageEventReservations />} />
            <Route path="/banquet-hall" element={<ManageBanquetHallComponent />} />
            <Route path="/manage-items" element={<ManageItems />} />
            <Route path="/feedback" element={<ManageFeedbackComponent view="admin" />} />
            <Route path="/manage-customers" element={<ManageCustomers />} />
            <Route path="/manage-members" element={<ManageMembers />} />
            <Route path="/manage-staff" element={<ManageStaff />} />
            <Route path="/blacklist-customer" element={<ManageBlacklistComponent />} />
            <Route path="/manage-orders" element={<ManageOrdersComponent />} />
          </Routes>
        ) : isCustomer ? (
          !isCustomerLoggedIn ? (
            selectedOption === 'register' ? (
              <CustomerRegister onRegister={handleCustomerLogin} />
            ) : selectedOption === 'login' ? (
              <CustomerLogin onLogin={handleCustomerLogin} />
            ) : (
              <div>
                <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                  <div style={{ border: '1px solid black', padding: '10px', cursor: 'pointer' }} onClick={() => setSelectedOption('register')}>
                    Register
                  </div>
                  <div style={{ border: '1px solid black', padding: '10px', cursor: 'pointer' }} onClick={() => setSelectedOption('login')}>
                    Login
                  </div>
                </div>
              </div>
            )
          ) : (
            <Routes>
              <Route path="/customer-dashboard" element={<CustomerDashboard customerDetails={customerDetails} setSelectedOption={setSelectedOption} customerID={customerDetails.customer_ID} />} />
              <Route path="/feedback" element={<ManageFeedbackComponent view="customer" />} />
              <Route path="/place-order" element={<ManagePlaceOrders CID={customerDetails.customer_ID} />} />
              <Route path="/view-order" element={<OrderDetailsComponent customerId={customerDetails.customer_ID} />} />
            </Routes>
          )
        ) : (
          <AdminLogin onLogin={setIsAdmin} />
        )}
      </div>
    </Router>
  );
}

export default App;

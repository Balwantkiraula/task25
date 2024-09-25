import React, { useState } from 'react';

const CustomerSelection = ({ customers, onCustomerSelect }) => {
  const [selectedCustomerId, setSelectedCustomerId] = useState('');

  const handleCustomerChange = (e) => {
    const customer = customers.find(cust => cust.id === e.target.value);
    setSelectedCustomerId(customer.id);
    onCustomerSelect(customer);
  };

  return (
    <div className="widget">
      <h3>Customer Selection</h3>
      <select onChange={handleCustomerChange} value={selectedCustomerId}>
        <option value="">Select Customer</option>
        {customers.map((customer) => (
          <option key={customer.id} value={customer.id}>
            {customer.companyName}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CustomerSelection;

import React, { useState, useEffect } from 'react';
import CustomerSelection from './CustomerSelection';
import BillingAddress from './BillingAddress';
import InvoiceDetails from './InvoiceDetails';
import ItemsEntry from './ItemsEntry';
import InvoiceSummary from './InvoiceSummary';
import './App.css';

const App = () => {
  const [customers, setCustomers] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [invoiceDate, setInvoiceDate] = useState('');
  const [stateOfSupply, setStateOfSupply] = useState('');
  const [items, setItems] = useState([]);
  const [invoiceNumber, setInvoiceNumber] = useState('');

  // Simulating an API call to fetch customers and invoice number
  useEffect(() => {
    setCustomers([
      { id: '1', companyName: 'Customer 1', address: { street: '123 Main St', city: 'City1', state: 'State1', zip: '12345', phone: '123-456-7890' } },
      { id: '2', companyName: 'Customer 2', address: { street: '456 Another St', city: 'City2', state: 'State2', zip: '67890', phone: '987-654-3210' } }
    ]);
    setInvoiceNumber('INV-001'); // You can generate this dynamically
  }, []);

  const handleCustomerSelect = (customer) => {
    setSelectedCustomer(customer);
  };

  const handleDateChange = (e) => {
    setInvoiceDate(e.target.value);
  };

  const handleStateChange = (e) => {
    setStateOfSupply(e.target.value);
  };

  const handleAddItem = (item) => {
    setItems([...items, item]);
  };

  return (
    <div className="container">
      <CustomerSelection customers={customers} onCustomerSelect={handleCustomerSelect} />
      {selectedCustomer && <BillingAddress address={selectedCustomer.address} />}
      <InvoiceDetails invoiceNumber={invoiceNumber} onDateChange={handleDateChange} onStateChange={handleStateChange} />
      <ItemsEntry onItemAdd={handleAddItem} />
      {items.length > 0 && <InvoiceSummary items={items} />}
    </div>
  );
};

export default App;

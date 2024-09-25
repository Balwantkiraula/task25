const InvoiceDetails = ({ invoiceNumber, onDateChange, onStateChange }) => {
    return (
      <div className="widget">
        <h3>Invoice Details</h3>
        <p>Invoice Number: {invoiceNumber}</p>
        <input type="date" onChange={onDateChange} />
        <select onChange={onStateChange}>
          <option value="">Select State of Supply</option>
          {/* Dynamically populate the list of states */}
          <option value="State1">State 1</option>
          <option value="State2">State 2</option>
        </select>
      </div>
    );
  };
  
  export default InvoiceDetails;
  
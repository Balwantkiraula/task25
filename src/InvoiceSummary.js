const InvoiceSummary = ({ items }) => {
    const totalBeforeTax = items.reduce((acc, item) => acc + item.totalBeforeTax, 0);
    const totalAfterTax = items.reduce((acc, item) => acc + item.totalAfterTax, 0);
    const roundOff = Math.round(totalAfterTax) - totalAfterTax;
  
    return (
      <div className="widget">
        <h3>Invoice Summary</h3>
        <p>Total Before Tax: {totalBeforeTax.toFixed(2)}</p>
        <p>Total After Tax: {totalAfterTax.toFixed(2)}</p>
        <p>Round-off Amount: {roundOff.toFixed(2)}</p>
        <p>Final Total: {(totalAfterTax + roundOff).toFixed(2)}</p>
      </div>
    );
  };
  
  export default InvoiceSummary;
  
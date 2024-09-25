const BillingAddress = ({ address }) => {
    return (
      <div className="widget">
        <h3>Billing Address</h3>
        {address ? (
          <>
            <p>{address.street}</p>
            <p>{address.city}, {address.state}, {address.zip}</p>
            <p>Phone: {address.phone}</p>
          </>
        ) : (
          <p>No address selected</p>
        )}
      </div>
    );
  };
  
  export default BillingAddress;
  
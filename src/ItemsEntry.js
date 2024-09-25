import { useState } from "react";
const ItemsEntry = ({ onItemAdd }) => {
    const [item, setItem] = useState({
      name: '',
      quantity: 1,
      price: 0,
      discount: 0,
      tax: 0
    });
  
    const handleChange = (e) => {
      setItem({ ...item, [e.target.name]: e.target.value });
    };
  
    const handleAddItem = () => {
      const totalBeforeTax = item.quantity * item.price - (item.discount / 100) * item.price;
      const totalAfterTax = totalBeforeTax + (item.tax / 100) * totalBeforeTax;
      onItemAdd({ ...item, totalBeforeTax, totalAfterTax });
      setItem({
        name: '',
        quantity: 1,
        price: 0,
        discount: 0,
        tax: 0
      });
    };
  
    return (
      <div className="widget">
        <h3>Item Entry</h3>
        <input
          type="text"
          name="name"
          placeholder="Item Name"
          value={item.name}
          onChange={handleChange}
        />
        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={item.quantity}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Unit Price"
          value={item.price}
          onChange={handleChange}
        />
        <input
          type="number"
          name="discount"
          placeholder="Discount %"
          value={item.discount}
          onChange={handleChange}
        />
        <input
          type="number"
          name="tax"
          placeholder="Tax %"
          value={item.tax}
          onChange={handleChange}
        />
        <button onClick={handleAddItem}>Add Item</button>
      </div>
    );
  };
  
  export default ItemsEntry;
  
// src/AddProductMapping.js
import React, { useState } from "react";
import axios from "axios";

const AddProductMapping = ({ onAdd }) => {
  const [supplierName, setSupplierName] = useState("");
  const [standardizedName, setStandardizedName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newMapping = { supplierName, standardizedName };

    // Send data to the backend
    axios.post("http://localhost:5000/api/mappings", newMapping)
      .then(response => {
        onAdd(response.data); // Update the parent component with the new data
      })
      .catch(error => {
        console.error("Error adding new mapping:", error);
      });
  };

  return (
    <div>
      <h2>Add New Mapping</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Supplier Name:</label>
          <input
            type="text"
            value={supplierName}
            onChange={(e) => setSupplierName(e.target.value)}
          />
        </div>
        <div>
          <label>Standardized Name:</label>
          <input
            type="text"
            value={standardizedName}
            onChange={(e) => setStandardizedName(e.target.value)}
          />
        </div>
        <button type="submit">Add Mapping</button>
      </form>
    </div>
  );
};

export default AddProductMapping;

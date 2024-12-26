import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductMappingList = () => {
  const [mappings, setMappings] = useState([]);

  useEffect(() => {
    // Fetch product mappings from the backend
    axios.get("http://localhost:5000/api/mappings")
      .then(response => {
        setMappings(response.data);  // Store fetched mappings in state
      })
      .catch(error => {
        console.error("Error fetching product mappings:", error);
      });
  }, []);

  return (
    <div>
      <h1>Product Mappings</h1>
      <ul>
        {mappings.map(mapping => (
          <li key={mapping._id}>
            <strong>{mapping.supplierName}</strong> - {mapping.standardizedName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductMappingList;

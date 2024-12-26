import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [supplierName, setSupplierName] = useState("");
  const [standardizedName, setStandardizedName] = useState("");
  const [mappings, setMappings] = useState([]);

  const fetchMappings = async () => {
    const res = await axios.get("http://localhost:5000/getMappings");
    setMappings(res.data);
  };

  const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


  const handleMatch = async () => {
    const res = await axios.post("http://localhost:5000/matchProduct", { supplierName });
    alert(res.data.standardizedName || res.data.message);
  };

  const handleAddMapping = async () => {
    await axios.post("http://localhost:5000/addMapping", { supplierName, standardizedName });
    fetchMappings();
  };

  useEffect(() => {
    fetchMappings();
  }, []);

  return (
    <div>
      <h1>Product Matching System</h1>
      <div>
        <input
          type="text"
          placeholder="Supplier Name"
          value={supplierName}
          onChange={(e) => setSupplierName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Standardized Name"
          value={standardizedName}
          onChange={(e) => setStandardizedName(e.target.value)}
        />
        <button onClick={handleAddMapping}>Add Mapping</button>
        <button onClick={handleMatch}>Match Product</button>
      </div>
      <h2>Existing Mappings</h2>
      <ul>
        {mappings.map((mapping, index) => (
          <li key={index}>{mapping.supplierName} → {mapping.standardizedName}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

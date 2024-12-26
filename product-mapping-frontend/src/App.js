import React from "react";
import ProductMappingList from "./ProductMappingList"; // Adjust the path if needed
import AddProductMapping from "./AddProductMapping";  // Adjust the path if needed

function App() {
  return (
    <div>
      <h1>Product Mapping System</h1>
      <AddProductMapping />
      <ProductMappingList />
    </div>
  );
}

export default App;

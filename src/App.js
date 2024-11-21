import './App.css';
import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          Enter your name:
          <input
            type="text"
            name="name" // Add the name attribute
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Enter your email:
          <input
            type="email" // You can use type="email" for better validation
            name="email" // Add the name attribute
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button> {/* Add a submit button */}
      </form>
    </div>
  );
}

export default App;

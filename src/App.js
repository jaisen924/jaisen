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
  
    // Google Form URL and entry IDs
    const googleFormURL = "https://docs.google.com/forms/d/1QGx1JKbKR0jvKmzvRlRWQf5SxvRRMY9Vf6avI4FIMdQ/prefill";
  
    // Map your React form fields to Google Form entry IDs
    const formDataToGoogleForm = {
      "entry.2005620554": formData.name,   // Replace with the entry ID for 'Your Name'
      "entry.1045781291": formData.email, // Replace with the entry ID for 'Email Address'
      "entry.1065046570": formData.message // Replace with the entry ID for 'Write Message'
    };
  
    // Convert data to URL-encoded string
    const body = new URLSearchParams(formDataToGoogleForm);
  
    // Submit data to Google Form
    fetch(googleFormURL, {
      method: "POST",
      body,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then((response) => {
        if (response.ok) {
          alert("Form submitted successfully!");
          // Optionally, reset the form
        } else {
          alert("Failed to submit the form.");
        }
      })
      .catch((error) => {
        console.error("Error submitting the form:", error);
        alert("An error occurred. Please try again.");
      });
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

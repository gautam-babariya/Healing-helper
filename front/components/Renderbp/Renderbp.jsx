import React, { useState } from 'react';
import './Renderbp.css'; // Import the CSS file

function Renderbp() {
    const [bloodPressure, setBloodPressure] = useState('');

  const handleChange = (event) => {
    setBloodPressure(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Blood Pressure Submitted:', bloodPressure);
  };
  return (
    <div className="container">
    <h1>Blood Pressure</h1>
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="Enter Your Blood Pressure"
        value={bloodPressure}
        onChange={handleChange}
        id="bloodpressure"
        name="bloodpressure"
      />
      <br />
      <br />
      <input type="submit" value="Submit" />
    </form>
  </div>

  )
}

export default Renderbp

import React, { useState } from 'react'
import './Rendertemp.css'

function Rendertemp() {
  const [temperature, setTemperature] = useState('');

  const handleChange = (event) => {
    setTemperature(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Body Temperature Submitted:', temperature);
  };
  return (
    <div className="container">
      <h1>Body Temperature</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Enter Your Body Temperature"
          value={temperature}
          onChange={handleChange}
          id="bmi"
          name="bmi"
        />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default Rendertemp

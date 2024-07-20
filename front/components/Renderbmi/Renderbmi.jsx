import React, { useState } from 'react'
import './Renderbmi.css'

function Renderbmi() {
    const [bmi, setBmi] = useState('');

  const handleChange = (event) => {
    setBmi(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('BMI Submitted:', bmi);
  };
  return (
    <div className="container">
      <h1>BMI</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Enter Your BMI"
          value={bmi}
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

export default Renderbmi

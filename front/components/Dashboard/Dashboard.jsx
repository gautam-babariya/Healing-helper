import React, { useEffect, useRef, useState } from 'react';
import './Dashboard.css'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';
import { Link, useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  useEffect(() => {
    // Check if scripts are already added
    const existingScript1 = document.querySelector('script[src="https://cdn.botpress.cloud/webchat/v1/inject.js"]');
    const existingScript2 = document.querySelector('script[src="https://mediafiles.botpress.cloud/2e5805d7-7443-4870-a7b1-8d85dd758e03/webchat/config.js"]');

    if (!existingScript1) {
      const botpressScript1 = document.createElement('script');
      botpressScript1.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js';
      botpressScript1.async = true;
      document.body.appendChild(botpressScript1);
    }

    if (!existingScript2) {
      const botpressScript2 = document.createElement('script');
      botpressScript2.src = 'https://mediafiles.botpress.cloud/2e5805d7-7443-4870-a7b1-8d85dd758e03/webchat/config.js';
      botpressScript2.defer = true;
      document.body.appendChild(botpressScript2);
    }

    // Cleanup scripts when component unmounts
    return () => {
      if (existingScript1) document.body.removeChild(existingScript1);
      if (existingScript2) document.body.removeChild(existingScript2);
    };
  }, []);

  useEffect(() => {
    axios.get('http://localhost:5500/userdata')
      .then(res => {
        const userdata = res.data.find(product => product._id === objectIdTofind);
        setUserdata(userdata);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  const [Userdata, setUserdata] = useState([]);
  const { id } = useParams();
  const objectIdTofind = id;

  const [countbp, setCountbp] = useState(0);
  const [countbmi, setCountbmi] = useState(0);
  const [counttemp, setCounttemp] = useState(0);

  const bt = Userdata.BodyTemperature;
  const bp = Userdata.BloodPressure;
  const weight = Userdata.Weight;
  const height = Userdata.Height;
  const sleeptime = Userdata.SleepTime;
  var bmi = ((weight) / (height * height)) * 10000
  const bmiorg = Math.round(bmi)
  useEffect(() => {
    if (countbmi < bmiorg) {
      const interval = setInterval(() => {
        setCountbmi(prevCount => prevCount + 1);
      }, 20); // Adjust interval timing as needed for animation speed

      // Clear interval on component unmount or when count reaches 100
      return () => clearInterval(interval);
    }
  }, [countbmi, bmiorg]);
  useEffect(() => {
    if (countbp < bmiorg) {
      const interval = setInterval(() => {
        setCountbp(prevCount => prevCount + 1);
      }, 20); // Adjust interval timing as needed for animation speed

      // Clear interval on component unmount or when count reaches 100
      return () => clearInterval(interval);
    }
  }, [countbp, bp]);
  useEffect(() => {
    if (counttemp < bmiorg) {
      const interval = setInterval(() => {
        setCounttemp(prevCount => prevCount + 1);
      }, 20); // Adjust interval timing as needed for animation speed

      // Clear interval on component unmount or when count reaches 100
      return () => clearInterval(interval);
    }
  }, [counttemp, bt]);


  // Calculate color based on count (0 to 100)
  const calculateColorbp = () => {
    const hue = 120 - (countbp / 100) * 120; // Hue ranges from 0 (red) to 120 (green)
    return `hsl(${hue}, 100%, 50%,50%)`; // Use HSL color format
  };
  const calculateColorbmi = () => {
    const hue = 120 - (countbmi / 100) * 120; // Hue ranges from 0 (red) to 120 (green)
    return `hsl(${hue}, 100%, 50%,50%)`; // Use HSL color format
  };
  const calculateColortemp = () => {
    const hue = 120 - (counttemp / 100) * 120; // Hue ranges from 0 (red) to 120 (green)
    return `hsl(${hue}, 100%, 50%,50%)`; // Use HSL color format
  };

  const getBackgroundColor = () => {
    if (bp > 90 && bp < 120) {
      return `hsl(100, 100%, 50%,50%)`;
    } else {
      return `hsl(0, 100%, 50%,50%)`;

    }
  };
  const getBackgroundColorbmi = () => {
    if (bmi > 18.4 && bmi < 25) {
      return `hsl(100, 100%, 50%,50%)`;
    } else {
      return `hsl(0, 100%, 50%,50%)`;
    }
  };
  const getBackgroundColorbt = () => {
    if (bt >= 97 && bt <= 99) {
      return `hsl(100, 100%, 50%,50%)`;
    } else {
      return `hsl(0, 100%, 50%,50%)`;

    }
  };
  const getBackgroundColorsleep = () => {
    if (sleeptime <= 7) {
      return `hsl(0, 100%, 50%,50%)`;
    } else {
      return `hsl(100, 100%, 50%,50%)`;

    }
  };
  const rendersymptoms = (e) => {
    e.preventDefault();
    navigate('/rendersymptoms');
  }
  const renderbp = (e) => {
    e.preventDefault();
    navigate('/renderbp');
  }
  const rendertemp = (e) => {
    e.preventDefault();
    navigate('/rendertemp');
  }
  const renderbmi = (e) => {
    e.preventDefault();
    navigate('/renderbmi');
  }

  return (
    <>
      <Navbar />
      <div className="dashboard">
        <div className="symptoms-list" >Symptoms List
          <li class="point-item">{Userdata.symptoms}</li>
        </div>
        <div className="userdata">Patient Overview
          <li class="point-item infouser">name: {Userdata.username}</li>
          <li class="point-item infouser">age: {Userdata.age}</li>
          <li class="point-item infouser">bloodgroup: {Userdata.bloodgroup}</li>
          <li class="point-item infouser">gender: {Userdata.gender}</li>
        </div>
        <div className="blood-pressure"  style={{ backgroundColor: getBackgroundColor() }}>Blood Pressure
          {bp < 91 && bp > 0 && (
            <div>
              <h1 class="userstatus">Low Blood Pressure (Hypotension)</h1>
            </div>
          )}
          {bp < 121 && bp > 90 && (
            <div>
              <h1 class="userstatus">Normal Blood Pressure</h1>
            </div>
          )}
          {bp < 130 && bp > 120 && (
            <div>
              <h1 class="userstatus">Elevated Blood Pressure</h1>
            </div>
          )}
          {bp < 140 && bp > 129 && (
            <div>
              <h1 class="userstatus">High Blood Pressure (Hypertension) Stage 1</h1>
            </div>
          )}
          {bp < 181 && bp > 139 && (
            <div>
              <h1 class="userstatus">High Blood Pressure (Hypertension) Stage 2</h1>
            </div>
          )}
          {bp > 180 && (
            <div>
              <h1 class="userstatus">Hypertensive Crisis (Emergency care needed)</h1>
            </div>
          )}
          <div className='divsleeptime'>
            <li className=' point-item'>Your Current Blood Pressure is : {Userdata.BloodPressure}</li>
          </div>
        </div>
        <div className="temperature" style={{ backgroundColor: getBackgroundColorbmi() }}>BMI
          {bmi <= 18.6 && (
            <div>
              <h1 class="userstatus">Underweight</h1>
            </div>
          )}
          {bmi > 18.6 && bmi <= 24.9 && (
            <div>
              <h1 class="userstatus">Normal weight:</h1>
            </div>
          )}
          {bmi > 24.9 && bmi <= 30 && (
            <div>
              <h1 class="userstatus">Overweight</h1>
            </div>
          )}
          {bmi > 30 && bmi <= 35 && (
            <div>
              <h1 class="userstatus">Obesity Class 1 (Moderate)</h1>
            </div>
          )}
          {bmi > 35 && bmi <= 40 && (
            <div>
              <h1 class="userstatus">Obesity Class 2 (Severe)</h1>
            </div>
          )}
          {bmi > 40 && (
            <div>
              <h1 class="userstatus">Obesity Class 3 (Very Severe or Morbid Obesity)</h1>
            </div>
          )}
          <div className='divsleeptime'>
            <li className=' point-item'>Your Current BMI is : {bmiorg} </li>
          </div>
        </div>
        <div className="sleep-time" >Any Medicine/Current Take
          <li class="point-item">{Userdata.AnyMedicineCurrentTake}</li>
        </div>
        <div className="weight"  style={{ backgroundColor: getBackgroundColorbt() }}>Body Temperature
          {bt < 95 && (
            <div>
              <h1 class="userstatus">Low Body Temperature (Hypothermia)</h1>
            </div>
          )}
          {bt > 94 && bt < 100 && (
            <div>
              <h1 class="userstatus">Normal Body Temperature</h1>
            </div>
          )}
          {bt > 99 && (
            <div>
              <h1 class="userstatus">Elevated Body Temperature (Fever)</h1>
            </div>
          )}
          <div className='divsleeptime'>
            <li className=' point-item'>Your Current Body Temperature is: {bt}</li>
          </div>
        </div>
        <div className="height" style={{ backgroundColor: getBackgroundColorsleep() }}>Sleep Time(per day)
          <div className='divsleeptime'>
            <li className=' point-item'>{Userdata.SleepTime} hour</li>
          </div>
        </div>
        <div id="chatbot-container"></div>
      </div>

    </>
  )
}

export default Dashboard

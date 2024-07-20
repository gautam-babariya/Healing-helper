import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from './accets/logo.jpg'
import user from './accets/user.png'
import { useParams } from 'react-router-dom';


function Navbar() {
  return (
    <div>
       <nav class="navbar navbar-expand-lg bg-body-tertiary header_class">
                <div class="container-fluid">
                    <div className='divofbrand_class'>
                        <img className='navlogo_class' src={logo}></img>
                        <div className='header_div_class'>
                        <h1 className="brandname_class" href="/">Healing Helper</h1>
                        </div>
                    </div>
                    <button class="navbar-toggler buttonline_class" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon threeline_class"></span>
                    </button>
                   
                </div>
            </nav>
    </div>
  )
}

export default Navbar

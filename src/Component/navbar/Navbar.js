import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../../node_modules/bootstrap/dist/js/bootstrap.min.js'
import loanlogos from '../../accetss/abstract-mortgage-home-roof-with-bars-forming-arrow-9723ld.png'

const Navbar = () => {
  return (
    <>
      <div className='n1'>
        <div className='n2'>
          <nav class="navbar navbar-expand-lg navbar-light bg-light ">
            <div class="container-fluid">
              <a class="navbar-brand" href="/">
                <img src={loanlogos} alt='' height='50' width='200' />
              </a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse nav justify-content-end" id="navbarSupportedContent" >
                <ul class="navbar-nav me-auto mb-2 mb-lg-0  " style={{ paddingLeft: "600px", fontSize: "19px", fontFamily: "serif" }} >
                  <li class="nav-item">
                    <a class="nav-link active nn1" aria-current="page" href="/company">Company </a>

                  </li>

                  <li class="nav-item">
                    <a class="nav-link active nn1" aria-current="page" href="/solnav2">Solutions</a>
                  </li>

                  <li class="nav-item">
                    <a class="nav-link active nn1" aria-current="page" href="/">Services</a>
                  </li>

                  <li class="nav-item">
                    <a class="nav-link active nn1" aria-current="page" href="/">Hire Devlopers</a>
                  </li>&ensp;

                  <ul class="nav justify-content-end  logn"   >
                    <li className="  logn" style={{ color: "white " }}  >
                      <a className="nav-link active btn btn-outline-secondary  logn" aria-current="page" href="/login" style={{ color: "white" }}>Log IN</a>
                    </li>
                  </ul>
                </ul>


              </div>
            </div>
          </nav>
        </div>

        <div className='n3'>
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
              <a class="navbar-brand" href="/"></a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/solnav2">Solutions</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/">Pricing</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link disabled">Disabled</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Navbar
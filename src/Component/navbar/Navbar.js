import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../../node_modules/bootstrap/dist/js/bootstrap.min.js'
import loanlogos from '../../accetss/abstract-mortgage-home-roof-with-bars-forming-arrow-9723ld.png'
import '../CSS MODULE/navcss.css'

const Navbar = () => {
  return (
    <>
      <header>
        {/* <!-- Add this to your public/index.html in the head section --> */}
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet"/>
          <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"></script>
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js"></script>

      </header>
      <div className=''>
        {/* Navigation Bar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light " style={{maxWidth:''}}>
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img src={loanlogos} alt='' height='50' width='200' />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0" style={{ fontSize: "19px", fontFamily: "serif" }}>
                <li className="nav-item">
                  <a className="nav-link active nn1" aria-current="page" href="/company">Company</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active nn1" aria-current="page" href="/solnav2">Solutions</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active nn1" aria-current="page" href="/">Services</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active nn1" aria-current="page" href="/">Hire Developers</a>
                </li> &ensp;&ensp;&ensp;&ensp;&ensp;
                <li className="nav-item">
                  <a className="nav-link active btn btn-outline-secondary logn" aria-current="page" href="/login" style={{ color: "white" }}>Log IN</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Secondary Navigation Bar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/solnav2">Solutions</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/pricing">Pricing</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Navbar
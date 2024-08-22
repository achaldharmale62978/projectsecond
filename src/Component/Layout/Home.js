import React from 'react'
import Navbar from '../navbar/Navbar'
import '../CSS MODULE/layoutcss/homecss.css'
import img1 from '../../accetss/home/ourservice-img012.webp'
import img2 from '../../accetss/home/download.jpg'
import img1_1 from '../../accetss/home/images.jpg'
// import hi1 from '../../assetss/home/achal dd.png'
// import hi2 from '../../assetss/home/3.png'
import img3 from '../../accetss/home/BL26_Think_rupee_notes coines.webp'
import img4 from '../../accetss/home/P2P-loan-ending-app-development.webp'
import img5 from '../../accetss/home/bank-loan-app-development-loan c1.webp'
import img6 from '../../accetss/home/credit-union-loan-app-loan c 2.webp'
import img7 from '../../accetss/home/scalable-and-robust-architecture-loan c3.webp'
import img8 from '../../accetss/home/cost-efficient-solutions-loan c4.webp'
import img9 from '../../accetss/home/custom-loan-lending-app-development-loan c5.webp'

import box1_1 from '../../accetss/home/account-management-loan box1.webp'
import box1_2 from '../../accetss/home/loan-application-form-loan box2.webp'
import box1_3 from '../../accetss/home/payment-log-loan box3.webp'
import box1_4 from '../../accetss/home/personalized-alerts-loan box3.webp'

import box2_1 from '../../accetss/home/seamless-customer-onboarding-loan box2-1.webp'
import box2_2 from '../../accetss/home/secure-authentication-loan box2-2.webp'
import box2_3 from '../../accetss/home/credit-score-loan box2-3.webp'
import box2_4 from '../../accetss/home/loan-repayment-loan box-2-4.webp'
import box2_5 from '../../accetss/home/chatbots-loan box 2-5.webp'
import box2_6 from '../../accetss/home/automating-or-scheduling-payments-loan box 2-6.webp'

import box3_1 from '../../accetss/home/multi-factor-authentication-loan 3-1.webp'
import box3_2 from '../../accetss/home/real-time-alerts-loan 3-2.webp'
import box3_3 from '../../accetss/home/TLS-RSA-SSL-loan 3-3.webp'
import box3_4 from '../../accetss/home/biometrics-loan 3-4.webp'

import box4_1 from '../../accetss/home/tech-stack-loan 4-1.webp'
import box4_2 from '../../accetss/home/app-platform-loan 4-2.webp'
import box4_3 from '../../accetss/home/testing-process-loan 4-3.webp'
import box4_4 from '../../accetss/home/app-hosting-loan 4-4.webp'
import box4_5 from '../../accetss/home/type-of-app-loan 4-5.webp'
import box4_6 from '../../accetss/home/design-features-loan 4-6.webp'

import { RiCheckDoubleLine } from "react-icons/ri";

import card2_1 from '../../accetss/home/service-img01 cca.webp'

import cc1 from '../../accetss/home/cc huge-market-potential-loan .webp'
import cc2 from '../../accetss/home/cc growing-customer-base-loan.webp'
import cc3 from '../../accetss/home/cc profitable-opportunity-loan.webp'
import cc4 from '../../accetss/home/cc trending-niche-loan.webp'
import cc5 from '../../accetss/home/cc future-ready-loan.webp'

import logolast from '../../accetss/abstract-mortgage-home-roof-with-bars-forming-arrow-9723ld.png'
import { NavLink } from 'react-router-dom'


const Home = () => {
  return (
    <>
      <div className=''>
        <Navbar />
        {/* Transforming Possibilities */}
        <div className='head1 text-center my-5' >

          {/* main part */}
          <h1 className='fontfamily col-12 col-md-9 mx-auto' style={{ padding: "60px", fontSize: '45px' }} >Transforming Possibilities: Our Services Offerings</h1>
          <h4 className='fontfamily col-12  col-md-9 mx-auto' style={{ fontSize: '25px' }}><span>At Nimble AppGenie we have a team of experts whether <br /> it's mobile app development to </span>
            <span>web design, our expertise spans across various domains. </span><br />
            Experience the difference of working with a trusted technology partner.<br /> Explore the range of services & let Nimble AppGenie be your catalyst
            for <br /> success  in the digital era.</h4>


          <NavLink to='/consultant'>
            <button type='submit' className='btn btn-outline-light col-12 col-md-3 my-2 my-md-0' style={{ fontSize: '20px', color: 'black' }}>Talk to Consultant</button>
          </NavLink>
          <NavLink to='/quote'>
            <button type='submit' className='btn btn-outline-dark btn btn-outline-dark col-12 col-md-3 my-2 my-md-0' style={{ fontSize: '20px' }}>Get a Quote</button>
          </NavLink>

        </div>

        {/* our services */}
        <div>
          <div className="text-center my-4">
            <h3 className="fontfamily col-12"><marquee style={{ backgroundColor: 'gray' }}>OUR SERVICES</marquee></h3>
          </div>

          <div className="text-center fontfamily">
            <h2 style={{ fontWeight: 'bold' }}>What Services We’re Providing</h2><br />
            <h4>We help brands and start-ups to build a range of mobile apps, websites, and software development services that improve brand visibility and business reputation.</h4>
          </div>

          <div className="row">
            <div className="col-12 col-md-4 my-3">
              <div className="card" style={{ width: "100%", padding: '10px' }}>
                <img src={img1} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title me-0">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <br />&ensp;&ensp;&ensp;
                  <a href="/" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4 my-3">
              <div className="card" style={{ width: "100%", padding: '10px' }}>
                <img src={img2} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="/" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4 my-3">
              <div className="card" style={{ width: "100%", padding: '10px' }}>
                <img src={img1_1} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <br />&ensp;&ensp;&ensp;
                  <a href="/" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* trusted companies */}
        <div className="text-center my-5">
          <h4>Trusted By Top Companies</h4><br />
          <div className="d-flex justify-content-center flex-wrap">
            <div className="m-3"><img src='https://www.nimbleappgenie.com/homeimages/home-slider-icon08.png' alt="Company Logo" className="img-fluid" /></div>
            <div className="m-3"><img src='https://www.nimbleappgenie.com/homeimages/home-slider-icon08.png' alt="Company Logo" className="img-fluid" /></div>
            <div className="m-3"><img src='https://www.nimbleappgenie.com/homeimages/home-slider-icon08.png' alt="Company Logo" className="img-fluid" /></div>
          </div>

        </div>

        {/* Impactful Loan money image */}
        <div className="row my-5 bg-light">
          <div className="col-12 col-md-6 my-3">
            <img src={img3} alt="Impactful Loan" className="img-fluid" />
          </div>
          <div className="col-12 col-md-6 my-3">
            <h2>Impactful Loan Lending App Development Solutions</h2><br />
            <h5>Loan lending is one of the most popular niches in the industry right now. There are various popular apps that have earned millions in this industry. There are many people who want to enter the industry and generate record-breaking revenue. If you are one of these, you will need ground-breaking loan lending app development services.</h5><br />
            <h5>Who is better for this than Nimble AppGenie the globally renowned loan lending mobile app development? You can hire loan lending app developers who have years’ worth of experience when it comes to loan lending app solutions. So, as a leading lending app software development company, we can deliver the loan lending solutions that you are looking for.</h5>
          </div>
        </div><br /><br />

        <div>
          {/* Customer Centric */}
          <div className='hh6' style={{ backgroundColor: 'lightgray' }}>
            <div className="text-center" style={{ paddingTop: '20px' }}>
              <i><h3 className='hh2 fontfamily'><marquee behavior="alternate" direction="left" scrollamount="2" scrolldelay="20">Loan Lending App</marquee></h3></i>
            </div>

            <h1 className="text-center">Customer Centric Loan Lending App Development Solutions</h1>

            <div className="text-center" style={{ fontFamily: 'serif', fontSize: '20px', padding: "30px" }}>
              Statista reports that the transactional value of the marketplace for lending to the consumer segment will reach $24,914.6 million by 2024.
              Indeed, the demand is here. But how are you planning to secure your slice of this billion-dollar pie? The answer is, Nimble AppGenie.
              We offer amazing loan lending mobile app development services. These are, as mentioned below:
            </div>

            <div className='container'>
              <div className='row py-4'>
                <div className='col-md-6 mb-4'>
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">P2P Loan Lending App Development &ensp;
                        <img src={img4} style={{ backgroundColor: 'rgb(8, 13, 54)', padding: '5px' }} />
                      </h5>
                      <p className="card-text">
                        P2P lenders are the real disruptors in the fintech industry.
                        If you’re one of the companies that bring investors and borrowers together,
                        Nimble AppGenie, a leading P2P lending platform development company,
                        is the right choice for your P2P lending software development.
                      </p>
                    </div>
                  </div>
                </div>

                <div className='col-md-6 mb-4'>
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Bank Loan App Development &ensp;
                        <img src={img5} style={{ backgroundColor: 'rgb(8, 13, 54)', padding: '5px' }} />
                      </h5>
                      <p className="card-text">
                        In this tech-savvy world, it is necessary for banks to provide a mobile lending app,
                        as most loans are long-term arrangements, and are therefore harder to manually monitor.
                        As loans are the main product for many banks,
                        various loan features have been added to some mobile banking apps.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='row py-4'>
                <div className='col-md-6 mb-4'>
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Credit Union Loan App &ensp;
                        <img src={img6} style={{ backgroundColor: 'rgb(8, 13, 54)', padding: '5px' }} />
                      </h5>
                      <p className="card-text">
                        Loan lending apps for credit unions are very similar to bank lending apps.
                        Credit union lending apps also require forums and in-app chat features to allow union members to connect.
                        We understand the right set of features that a credit union loan app will need.
                        That’s why we filled our loan app development solutions with the right features.
                      </p>
                    </div>
                  </div>
                </div>

                <div className='col-md-6 mb-4'>
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Scalable and Robust Architecture &ensp;
                        <img src={img7} style={{ backgroundColor: 'rgb(8, 13, 54)', padding: '5px' }} />
                      </h5>
                      <p className="card-text">
                        We’re among the best loan app developers in the USA.
                        As security is among the foremost concerns for FinTech businesses,
                        it is compulsory to build solutions that are end-to-end encrypted and follow the highest security standards.
                        As your user base grows, your lending software development solution will have to accommodate all of these users,
                        which requires the app to be developed with high scalability constantly in consideration.
                        Worry not, we’ll do this for you.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='row py-4'>
                <div className='col-md-6 mb-4'>
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Cost-Efficient Solutions &ensp;
                        <img src={img8} style={{ backgroundColor: 'rgb(8, 13, 54)', padding: '5px' }} />
                      </h5>
                      <p className="card-text">
                        Unlike many other software development companies,
                        we aim to craft solutions that are powered by top-notch technologies.
                        The technology doesn’t have to be expensive to suit your lending app,
                        but it has to be safe enough to ensure compliance.
                        We make sure that the solutions are built with the least possible effort
                        (cost) while keeping the standards high so that the app drives faster ROI.
                      </p>
                    </div>
                  </div>
                </div>

                <div className='col-md-6 mb-4'>
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Custom Loan Lending App Development &ensp;
                        <img src={img9} style={{ backgroundColor: 'rgb(8, 13, 54)', padding: '5px' }} />
                      </h5>
                      <p className="card-text">
                        As a leading money lending app development agency,
                        one of our most renowned services is for custom loan lending app development.
                        Our team of dedicated mobile app developers has the required experience and technical
                        know-how needed to deliver market-leading money-lending software solutions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          {/* Achieve Digital Transformation */}
          <div className='fontfamily hh7 mt-5'>

            <h4 className='text-center'>Achieve Digital Transformation With Innovative Tech</h4>

            <div className='fontfamily ttt text-center' style={{ padding: '0 15px' }}>
              Being a significant part of the FinTech revolution, loan lending app development is enabled
              by several technologies. However, the use of innovative technologies such as AI & ML,
              Blockchain, and Big Data is paving the way for a new future of lending, where the borrower
              can request and directly receive the loan amount through mobile devices.
              So, let’s look at these technologies, leading lending software development to new heights:
            </div>

            <div className='container mt-4' >
              <div className='row'>
                <div className='col-md-6 mb-4 '>
                  <div className="card h-100" style={{ boxShadow: '2px 2px 3px 3px' }}>
                    <div className="card-body">
                      <div style={{ border: 'solid', boxSizing: 'border-box' }}>
                        <h5 className="card-title" style={{ padding: '10px' }}> <b>Open Banking</b> </h5>
                        <p className="card-text" style={{ padding: '10px' }}>
                          <span style={{ color: 'blue' }}><RiCheckDoubleLine /></span>
                          Gone are the days when third-party lenders had to contact banks or credit institutions to access customers’
                          financial data and credit scores. By integrating the open banking APIs,
                          we’ll empower your loan lending app to access an individual's financial data in seconds.
                          Thus, taking mobile loan app development solutions to next level.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='col-md-6 mb-4'>
                  <div className="card h-100" style={{ boxShadow: '2px 2px 3px 3px' }}>
                    <div className="card-body">
                      <div style={{ border: 'solid', boxSizing: 'border-box' }}>
                        <h5 className="card-title" style={{ padding: '10px' }}><b>Blockchain</b></h5>
                        <p className="card-text" style={{ padding: '10px' }}>
                          <span style={{ color: 'blue' }}><RiCheckDoubleLine /></span>
                          Big industries on which several other industries rely face a slow pace of transformation due to strict
                          regulations. However, the end customer-facing applications can be taken to the market much faster.
                          We use Agile methodologies
                          that support lean requirements and deliver results to your banking business in less than six months.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='row'>
                <div className='col-md-6 mb-4'>
                  <div className="card h-100" style={{ boxShadow: '2px 2px 3px 3px' }}>
                    <div className="card-body">
                      <div style={{ border: 'solid', boxSizing: 'border-box' }}>
                        <h5 className="card-title" style={{ padding: '10px' }}> <b>AI & ML</b> </h5>
                        <p className="card-text" style={{ padding: '10px' }}>
                          <span style={{ color: 'blue' }}><RiCheckDoubleLine /></span>
                          By leveraging an intermediary messaging layer and abstracting away from a batch-oriented core
                          platform model, banks can speed up service delivery. We mostly recommend a microservice architecture
                          that scales and versions itself. We have extensive
                          experience in integrating into most of the common banking platforms, such as Finserv, FIS, etc.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='col-md-6 mb-4'>
                  <div className="card h-100" style={{ boxShadow: '2px 2px 3px 3px' }}>
                    <div className="card-body">
                      <div style={{ border: 'solid', boxSizing: 'border-box' }}>
                        <h5 className="card-title" style={{ padding: '10px' }}> <b>RPA</b> </h5>
                        <p className="card-text" style={{ padding: '10px' }}>
                          <span style={{ color: 'blue' }}><RiCheckDoubleLine /></span>
                          Digital banking transactions are the hotspot for cybercriminals.
                          In June 2020, the FBI warned that financial cybercrimes may rise due to the rise of digital banking.
                          To help banks overcome the security challenges, we implement end-to-end data encryption in the banking software that we develop.
                          We recommend SSL chain verification
                          to ensure there is an encrypted connection between the Upload Filer and the webserver.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <br /><br /><br />
        </div>

        {/* loan lending features */}
        <div className='fontfamily ms-5' style={{ backgroundColor: 'rgb(222, 226, 221)', width: '90%' }}>
          <div style={{ paddingTop: '20px' }}>
            <i>
              <h3 className='hh2 fontfamily col-12 text-center'>
                <marquee behavior="alternate" gap="0" truespeed="" direction="left" scrollamount="2" scrolldelay="20" loop="true">
                  Loan Lending App
                </marquee>
              </h3>
            </i>
          </div>

          <h1 className='t1 text-center tt'>Loan Lending App Features</h1>

          <div className='fontfamily  text-center mx-auto' style={{ maxWidth: '800px' }}>
            Many loan lending app development companies will overwhelm you by suggesting dozens of app features
            that can be unnecessary for a loan lending platform.<br />
            Worry not, we, at Nimble AppGenie as a leading P2P lending platform development company,
            always suggest to our clients the right and appropriate set of <br />features for your P2P lending platform development.
          </div>
          <br /><br />
          <div className='ull text-center'>
            <ul className='nav nav-pills mb-3 justify-content-center' id='pills-tab' role='tablist'>
              <li className='nav-item border border-light-rounded' role='presentation'>
                <button className='nav-ul1 btn btn-outline-light' id='pills-home-tab' data-bs-toggle='pill' data-bs-target='/pills-home' type='button' role='tab' aria-controls='pills-home' aria-selected='true' style={{ fontSize: '20px' }}>Basic Features</button>
              </li>
              <li className='nav-item border border-secondary-rounded' role='presentation'>
                <button className='nav-ul2 btn btn-outline-secondary' id='pills-profile-tab' data-bs-toggle='pill' data-bs-target='/pills-profile' type='button' role='tab' aria-controls='pills-profile' aria-selected='false' fdprocessedid='50y21' style={{ fontSize: '20px' }}>Advance Features</button>
              </li>
              <li className='nav-item border border-dark-rounded' role='presentation'>
                <button className='nav-ul3 btn btn-outline-dark' id='pills-contact-tab' data-bs-toggle='pill' data-bs-target='/pills-contact' type='button' role='tab' aria-controls='pills-contact' aria-selected='false' fdprocessedid='2r0ho8' style={{ fontSize: '20px' }}>Security Procedure</button>
              </li>
            </ul>
          </div>

          <div className='tab-content' id='pills-tabContent'>
            {/* box1 Basic Features */}
            <div className='tab-pane fade show active mt-5' id='pills-home' role='tabpanel' aria-labelledby='pills-home-tab'>
              <div className='container'>
                <div className='row'>
                  <div className='col-lg-3 col-md-6 mb-4'>
                    <div className='box1'>
                      <div className='development-box'>
                        <figure>
                          <img className='mt-2' data-src='' alt='image' width='50' height='50' src={box1_1} />
                        </figure>
                        <h3>Account Management</h3>
                        <p>The users should be able to manage their account information along with the capability to block/activate cards. It is a core feature of money lending software.</p>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-3 col-md-6 mb-4'>
                    <div className='box1 '>
                      <div className='development-box '>
                        <figure>
                          <img className='mt-2' data-src='' alt='image' width='50' height='50' src={box1_2} />
                        </figure>
                        <h3>Loan Application Form</h3>
                        <p>This is the core feature for your loan lending app development. We enhance the user experience by breaking down the loan application into several steps.</p>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-3 col-md-6 mb-4'>
                    <div className='box1'>
                      <div className='development-box'>
                        <figure>
                          <img className='mt-2' data-src='' alt='image' width='50' height='50' src={box1_3} />
                        </figure>
                        <h3>Payment Log</h3>
                        <p>Once a loan has been funded, the customer would want to know all the completed and pending payments. Knowing the total remaining debt at a glance is also better.</p>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-3 col-md-6 mb-4'>
                    <div className='box1'>
                      <div className='development-box'>
                        <figure>
                          <img className='mt-2' data-src='' alt='image' width='50' height='50' src={box1_4} />
                        </figure>
                        <h3>Personalized Alerts</h3>
                        <p>When users have dozens of applications on their mobile phones, they won’t pay attention to every notification. Hence, you should shoot the least possible notifications to make them valuable.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className='tab-content' id='pills-tabContent'>
              {/* box2 Advance Features */}
              <div className='tab-pane fade' id='pills-profile' role='tabpanel' aria-labelledby='pills-profile-tab'>
                <div className='container'>
                  <div className='row'>
                    <div className='col-lg-4 col-md-6 mb-4'>
                      <div className='box1'>
                        <div className='development-box'>
                          <figure>
                            <img className='' data-src='' alt='image' width='50' height='50' src={box2_1} />
                          </figure>
                          <h3>Seamless Customer Onboarding</h3>
                          <p>Due to a lot of financial information requirements, customers often find it hard to associate with a new lending institution, especially when the process is online. We build applications that allow users to get onboard quickly.</p>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-4 col-md-6 mb-4'>
                      <div className='box1'>
                        <div className='development-box'>
                          <figure>
                            <img className='' data-src='' alt='image' width='50' height='50' src={box2_2} />
                          </figure>
                          <h3>Secure Authentication</h3>
                          <p>Because of the strict industry norms, AML and KYC requirements have become very necessary. Although user authentication is crucial, it can result in users abandoning your app. We create promising user experiences that help avoid such issues.</p>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-4 col-md-6 mb-4'>
                      <div className='box1'>
                        <div className='development-box'>
                          <figure>
                            <img className='' data-src='' alt='image' width='50' height='50' src={box2_3} />
                          </figure>
                          <h3>Credit Score</h3>
                          <p>Considering the increasing customer expectations, your loan lending app needs to integrate credit score data using open-banking APIs. As a leading lending app software development company, we include it in our solutions.</p>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-4 col-md-6 mb-4'>
                      <div className='box1'>
                        <div className='development-box'>
                          <figure>
                            <img className='' data-src='' alt='image' width='50' height='50' src={box2_4} />
                          </figure>
                          <h3>Loan Repayment</h3>
                          <p>When the lending is performed using your app, it can be repaid too. The users should be able to pay via several payment methods such as UPI and e-wallets. Our team of loan app developers, integrates API seamlessly.</p>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-4 col-md-6 mb-4'>
                      <div className='box1'>
                        <div className='development-box'>
                          <figure>
                            <img className='' data-src='' alt='image' width='50' height='50' src={box2_5} />
                          </figure>
                          <h3>Chatbots</h3>
                          <p>AI-powered chatbots allow users to reach out to you for any query or grievances. It makes your customer service effective and cost-efficient. Also, you’ll be available to your customers 24/7 when you have chatbots in place.</p>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-4 col-md-6 mb-4'>
                      <div className='box1'>
                        <div className='development-box'>
                          <figure>
                            <img className='' data-src='' alt='image' width='50' height='50' src={box2_6} />
                          </figure>
                          <h3>Automating or Scheduling Payments</h3>
                          <p>You can go one step forward with loan repayments by enabling users to enroll in autopay. It would require users to add their favorite payment method to the app. Hence, your app should have the functionality.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* box1 Basic Features */}
            <div className='tab-pane fade' id='pills-contact' role='tabpanel' aria-labelledby='pills-contact-tab'>
              <div className='row 1.1'>

                <div className='col-lg-3 offset-1 box1' >
                  <div className='development-box'><br />
                    <figure>
                      <img className='' data-src='' alt='image' width='50' height='50'
                        src={box3_1} />
                    </figure>
                    <h3>Multi-factor Authentication</h3>
                    <p>Giving access to the loan account with a password will only compromise the data security. We
                      recommend implementing multi-factor authentication for logins.</p>
                  </div>
                </div>&ensp;&ensp;&ensp;&ensp;
                <div className='col-lg-3 box1'>
                  <div className='developmenet-box'><br />
                    <figure>
                      <img className='' data-src='' alt='image' width='50' height='50'
                        src={box3_2} />
                    </figure>
                    <h3>Real-time Alerts</h3>
                    <p>By using advanced technologies like AI &amp; ML, we enable the app to alert users about
                      suspicious activities. Thus, it’s a core feature of P2P lending software development.</p>
                  </div>
                </div>&ensp;&ensp;&ensp;&ensp;
                <div className='col-lg-3 box1'>
                  <div className='developmenet-box'><br />
                    <figure>
                      <img className='' data-src='' alt='image' width='50' height='50'
                        src={box3_3} />
                    </figure>
                    <h3>TLS, RSA SSL</h3>
                    <p>We ensure maximum digital security by implementing several encryption algorithms. TLS protocol is
                      among the best for computer network security. It’s essential for loan app development.</p>
                  </div>
                </div>
              </div><br />
              <div className='row 1.2'>
                <div className='col-lg-3 offset-4 box1'>
                  <div className='developmenet-box'><br />
                    <figure>
                      <img className='' data-src='' alt='image' width='50' height='50'
                        src={box3_4} />
                    </figure>
                    <h3>Biometrics</h3>
                    <p>To ease out the multi-factor authentication for the users, we implement biometrics into the loan
                      lending apps that we create.</p>
                  </div>
                </div>
              </div>
            </div>

          </div><br />
        </div><br />

        {/* enjoy the best loan leading app */}

        <div className='hh9 fontfamily' style={{ paddingTop: '20px' }}>
          <h1><b>Enjoy The Best Loan Lending App Development Services</b></h1><br />
          <p className='col-10 offset-1'>In this world of technology, finding a development partner isn’t hard as there are thousands of options.
            However, finding the “right” loan lending app Development Company isn’t all that easy.
            But you don’t have to go through all that trouble because Nimble AppGenie is here for you.
            <br />
            Nimble AppGenie is a loan lending app developer recognized by top tech reviewers like Clutch.co.
            Our past work proves why we are one of the best out there.
            Some more reasons to choose Nimble as your next development partner are, as mentioned below:
          </p>
          {/* box 4  */}

          <div className='row 1.1 offset-1 col-10'>
            <div className='col-lg-3  box1' >
              <div className='development-box'><br />
                <figure>
                  <img className='' data-src='' alt='image' width='50' height='50'
                    src={box4_1} />
                </figure>
                <h3>Tech stack</h3>
                <p >Tech stack refers to the technologies used in loan app development. MEAN Stack Development is a popular example.
                  Depending on which of these you choose, the cost can be different.</p>
              </div>
            </div>&ensp;&ensp;&ensp;&ensp;
            <div className='col-lg-3 box1'>
              <div className='developmenet-box'><br />
                <figure>
                  <img className='' data-src='' alt='image' width='50' height='50'
                    src={box4_2} />
                </figure>
                <h3>App Platform</h3>
                <p>Android and iOS app development services are two popular choices when it comes to the platform. Plus, you also have an option of cross-platform mobile app development.
                  The cost of each is different.</p>
              </div>
            </div>&ensp;&ensp;&ensp;&ensp;
            <div className='col-lg-3 box1'>
              <div className='developmenet-box'><br />
                <figure>
                  <img className='' data-src='' alt='image' width='50' height='50'
                    src={box4_3} />
                </figure>
                <h3>Testing Process</h3>
                <p>The testing process is just as important as the development itself. Moreover, the tools used for testing are often highly expensive.
                  This is how the testing process can affect the lending software development cost.</p>
              </div>
            </div>
          </div><br />
          <div className='row 1.2 offset-1 col-10'>
            <div className='col-lg-3  box1'>
              <div className='developmenet-box'><br />
                <figure>
                  <img className='' data-src='' alt='image' width='50' height='50'
                    src={box4_4} />
                </figure>
                <h3>App Hosting</h3>
                <p>After the app is developed, it has be to hosted somewhere. Depending on the type of hosting you choose, the cost of the same can be different.
                  This adds to the total mobile loan app development cost.</p>
              </div>
            </div>&ensp;&ensp;&ensp;&ensp;
            <div className='col-lg-3  box1'>
              <div className='developmenet-box'><br />
                <figure>
                  <img className='' data-src='' alt='image' width='50' height='50'
                    src={box4_5} />
                </figure>
                <h3>Type of App</h3>
                <p>When it comes to loan lending app development, there are a few different types.
                  Based on which one you are getting, the loan lending app development cost can be different.</p>
              </div>
            </div>&ensp;&ensp;&ensp;&ensp;
            <div className='col-lg-3  box1' >
              <div className='developmenet-box'><br />
                <figure>
                  <img className='' data-src='' alt='image' width='50' height='50'
                    src={box4_6} />
                </figure>
                <h3>Design & Features</h3>
                <p>Design and features are two points that are the selling force of the app.
                  And whether you are looking for a simple design and feature or a complex one, can affect the cost of app development.</p>
              </div>
            </div>
          </div>
          <br />
        </div><br />

        {/* our solutions */}
        <div className='hh10 fontfamily ms-5' >
          <div className='container'>
            <div className='row justify-content-center' style={{ padding: '60px' }}>
              <div className='col-lg-4 col-md-6 mb-4'>
                <div className='card card1'>
                  <div className='card-body'>
                    <h5 className='card-title cc0' style={{ color: 'white' }}>Our Solutions</h5><br />
                    <h2 className='card-subtitle mb-2 text' >Creating The Next Best</h2>
                    <p className='card-text'>Being the best mobile app development agency, Nimble AppGenie offers a range of website and app development services.</p>
                  </div>
                </div>
              </div>

              <div className='col-lg-4 col-md-6 mb-4'>
                <div className='card card2'>
                  <img src={card2_1} className='card-img-top ccimg' alt='...' />
                  <div className='card-body cca'>
                    <h5 className='card-title'>Card title</h5>
                  </div>
                </div>
              </div>

              <div className='col-lg-4 col-md-6 mb-4'>
                <div className='card card2'>
                  <img src={card2_1} className='card-img-top ccimg' alt='...' />
                  <div className='card-body cca'>
                    <h5 className='card-title'>Card title</h5>
                  </div>
                </div>
              </div>

              <div className='col-lg-4 col-md-6 mb-4'>
                <div className='card card2'>
                  <img src={card2_1} className='card-img-top ccimg' alt='...' />
                  <div className='card-body cca'>
                    <h5 className='card-title'>Card title</h5>
                  </div>
                </div>
              </div>

              <div className='col-lg-4 col-md-6 mb-4'>
                <div className='card card2'>
                  <img src={card2_1} className='card-img-top ccimg' alt='...' />
                  <div className='card-body cca'>
                    <h5 className='card-title'>Card title</h5>
                  </div>
                </div>
              </div>

              <div className='col-lg-4 col-md-6 mb-4'>
                <div className='card card2'>
                  <img src={card2_1} className='card-img-top ccimg' alt='...' />
                  <div className='card-body cca'>
                    <h5 className='card-title'>Card title</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div><br />

        {/* portfolio */}
        <div className='hh11 fontfamily ms-5' style={{ width: '90%' }}>
          <div className='portfolio '>
            <div className='protfoliocolor' style={{ paddingTop: 'px', paddingBottom: '', textAlign: 'center' }}>
              <h2 className='' style={{ fontSize: '3.125rem', fontWeight: 'bold' }}>Our Portfolio</h2>
              <h3 className='mt-5' style={{ color: 'black', fontSize: '1.5rem' }}>Nimble AppGenie doesn’t just make claims, our work speaks for itself. Check out our portfolio:</h3>
              <div className='text-center'>
                <NavLink to='/portfolio'>
                  <button className='btn btn-outline-secondary btn-lg'>DISCOVER NOW</button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>

        {/* loan leading app */}
        <div className='fontfamily hh12'>

          <div style={{ paddingTop: '20px' }}>
            <i><h3 className='hh2 fontfamily col-4 offset-4' >
              <marquee behavior="alternate" gap="0" truespeed="" direction="left" scrollamount="2" scrolldelay="20" loop="true">
                Loan Lending App
              </marquee>
            </h3></i>
          </div>

          <div className='fontfamily'>
            <h1 className='text-center'>Why choose lending app development?</h1>
            <div className='col-10 offset-1'>
              <p>
                There might be some of you who are still wondering whether or not you should develop a loan lending app. And if yes, then why? Well, the question is a rational one.
                Rest assured, there are plenty of good reasons to develop a loan lending app of your own. Some of these are, as mentioned below:
              </p>
            </div>
          </div><br /><br />

          <div className=''>
            <div className='row'>
              <div className='col-lg-6 offset-lg-3  ' style={{}}>
                <div className='card mb-3'>
                  <div className='row g-0'>
                    <div className='col-md-4 mt-3'>
                      <img src={cc1} className='img-fluid rounded-start' alt='...' />
                    </div>
                    <div className='col-md-8 '>
                      <div className='card-body'>
                        <h5 className='card-title'>Huge Market Potential</h5>
                        <p className='card-text'>
                          The loan lending market is a huge one. It is expected to cross USD 24,914 million by 2024 in valuation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-lg-6 offset-lg-3'>
                <div className='card mb-3'>
                  <div className='row g-0'>
                    <div className='col-md-4 mt-3'>
                      <img src={cc2} className='img-fluid rounded-start' alt='...' />
                    </div>
                    <div className='col-md-8'>
                      <div className='card-body'>
                        <h5 className='card-title'>Growing Customer Base</h5>
                        <p className='card-text'>
                          The loan lending market is a huge one. It is expected to cross USD 24,914 million by 2024 in valuation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-lg-6 offset-lg-3'>
                <div className='card mb-3'>
                  <div className='row g-0'>
                    <div className='col-md-4 mt-3'>
                      <img src={cc3} className='img-fluid rounded-start' alt='...' />
                    </div>
                    <div className='col-md-8'>
                      <div className='card-body'>
                        <h5 className='card-title'>Profitable Opportunity</h5>
                        <p className='card-text'>
                          The loan lending market is a huge one. It is expected to cross USD 24,914 million by 2024 in valuation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-lg-6 offset-lg-3'>
                <div className='card mb-3'>
                  <div className='row g-0'>
                    <div className='col-md-4 mt-3'>
                      <img src={cc4} className='img-fluid rounded-start' alt='...' />
                    </div>
                    <div className='col-md-8'>
                      <div className='card-body'>
                        <h5 className='card-title'>Trending Niche</h5>
                        <p className='card-text'>
                          The loan lending market is a huge one. It is expected to cross USD 24,914 million by 2024 in valuation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-lg-6 offset-lg-3'>
                <div className='card mb-3'>
                  <div className='row g-0'>
                    <div className='col-md-4 mt-3'>
                      <img src={cc5} className='img-fluid rounded-start' alt='...' />
                    </div>
                    <div className='col-md-8'>
                      <div className='card-body'>
                        <h5 className='card-title'>Future Ready</h5>
                        <p className='card-text'>
                          The loan lending market is a huge one. It is expected to cross USD 24,914 million by 2024 in valuation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div><br /><br />

        <div className='hh13 fontfamily' style={{ display: 'flex', justifyContent: 'center' }}>
          <div className='col-lg-4 col-md-6 col-sm-12 mb-4' style={{ textAlign: 'left' }}>
            <img src={logolast} height='80' width='250' alt='Logo' /><br /><br />
            <div>
              Nimble AppGenie is a leading mobile app development company with a range of renowned mobile app development services and proven successes for our clients. Dare to be great. We’ll help the process.
            </div>
          </div>

          <div className='offset-lg-1 col-lg-7 col-md-6 col-sm-12'>
            <div className='row'>
              <div className='col-lg-4 col-md-6 col-sm-6 mb-4'>
                <div>
                  <b>Company</b>
                </div>
                <div>
                  <a href='' className='atag'>About Us</a> <br />
                  <a href='' className='atag'>Our Blog</a> <br />
                  <a href='' className='atag'>Portfolio</a> <br />
                  <a href='' className='atag'>Request A Quote</a> <br />
                  <a href='' className='atag'>Contact Us</a> <br />
                  <a href='' className='atag'>Privacy Policy</a> <br />
                  <a href='' className='atag'>Terms & Conditions</a>
                </div>
              </div>

              <div className='col-lg-4 col-md-6 col-sm-6 mb-4'>
                <div>
                  <b>Services</b>
                </div>
                <div>
                  <a href='' className='atag'>Software Development</a> <br />
                  <a href='' className='atag'>Web Development</a> <br />
                  <a href='' className='atag'>Android App Development</a> <br />
                  <a href='' className='atag'>iPhone App Development</a> <br />
                  <a href='' className='atag'>Maintenance & Support</a> <br />
                  <a href='' className='atag'>SAAS & Enterprise App Development</a> <br />
                </div>
              </div>

              <div className='col-lg-4 col-md-6 col-sm-6 mb-4'>
                <div>
                  <b >Solutions</b>
                </div>
                <div>
                  <a href='' className='atag'>Logistics App</a> <br />
                  <a href='' className='atag'>Loan Lending App</a> <br />
                  <a href='' className='atag'>Banking, Finance & Insurance</a> <br />
                  <a href='' className='atag'>AI App Development</a> <br />
                  <a href='' className='atag'>Cryptocurrency App</a> <br />
                  <a href='' className='atag'>Real Estate & Property</a> <br />
                  <a href='' className='atag'>Travel & Tours</a> <br />
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </>
  )
}

export default Home
import React from 'react'
import Navbar from '../../navbar/Navbar'
import blankimg1 from '../../../accetss/solunav2/blank-box-icon01.webp'
import logolast from '../../../accetss/abstract-mortgage-home-roof-with-bars-forming-arrow-9723ld.png'
import '../../CSS MODULE/layoutcss/solcss.css'
import { ImMail4 } from "react-icons/im";
import { AiFillSkype } from "react-icons/ai";
import { NavLink } from 'react-router-dom';

const Solnav2 = () => {
    return (
        <>
            <div className='sol1 fontfamily'>
                <Navbar />
                <div className='sol2 fontfamily'>
                    <h1>Industries We Serve</h1>
                    <h4>We help global brands design and build superior digital products, enabling seamless user experiences across all modern platforms and devices.</h4>
                    <div className=' flex-wrap'>
                        <NavLink>
                            <button type='submit' className='btn btn-outline-secondary btnh ' style={{ fontSize: '20px', color: 'white' }}>Talk to Consultant</button>
                        </NavLink>
                        <NavLink>
                            <button type='submit' className='btn btn-outline-dark btnh ' style={{ fontSize: '20px', color: 'white' }}>Get a Quote</button>
                        </NavLink>
                    </div>
                </div>

                <div className='sol3 fontfamily'>
                    <h4 style={{ paddingTop: '20px' }}>Trusted By Top Companies</h4>
                    <div className='d-flex'>
                        <div className='d-flex align-items-center mr-3'>
                            <img className='img-fluid' src='https://www.nimbleappgenie.com/homeimages/home-slider-icon08.png' alt='company logo' />
                        </div>
                        <div className='d-flex align-items-center mr-3'>
                            <img className='img-fluid' src='https://www.nimbleappgenie.com/homeimages/home-slider-icon08.png' alt='company logo' />
                        </div>
                        <div className='d-flex align-items-center'>
                            <img className='img-fluid' src='https://www.nimbleappgenie.com/homeimages/home-slider-icon08.png' alt='company logo' />
                        </div>
                    </div>
                </div><br />

                <div className='sol4 fontfamily text-center'>
                    <h4 className='col-md-4 offset-md-4' style={{ backgroundColor: 'gray', color: 'black', margin: 'auto' }}>Industries</h4><br />
                    <h2><b>Innovation Across Industries</b></h2>
                    <p>As a mobile app development company with a vision, Nimble AppGenie is dedicated to delivering innovative solutions across various industries.<br /> Some of the top industries we serve are:</p>
                </div>
                <br />

                <div className='sol5 fontfamily row'>
                    <div className='col-md-6 offset-md-1 d-flex align-items-center'>
                        <img
                            className='img-fluid ms-5'
                            src='https://img.freepik.com/premium-photo/warehouse-with-blue-background-white-floor-large-warehouse-with-blue-background-word-shipping-bottom_756748-12641.jpg'
                            alt='Warehouse' width='50%'
                        />
                    </div>
                    <div className='col-md-4  d-flex flex-column justify-content-center'>
                        <h2><b>Logistics App Development</b></h2>
                        <p>Our logistics app development services are known for delivering innovation and data-driven solutions.</p>
                    </div>
                </div><br />

                <div className='sol5 fontfamily row'>
                    <div className='col-md-5 d-flex flex-column justify-content-center text-end'>
                        <h2><b>Banking, Finance & Insurance App Development</b></h2>
                        <p>Banking Mobile apps, eWallet mobile apps, etc are just a few of our leading banking, finance, and insurance apps insurance.</p>
                    </div>
                    <div className='col-md-6 offset-md-1 d-flex align-items-center'>
                        <img
                            className='img-fluid'
                            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR85PuG3HBLdpTNEJQ26HR6aTILeg2ZDagio5lT0TZjWbPSB80dtFk2BKaSz1f1OyT17h8&usqp=CAU'
                            alt='Banking' width='50%'
                        />
                    </div>
                </div><br />


                <div className='sol5 fontfamily' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div className='row'>
                        <div className='col-md-5 offset-md-1' style={{ order: '2', textAlign: 'start', paddingTop: '60px' }}>
                            <h2><b>Loan Lending App Development</b></h2>
                            <p>If you want to develop a loan lending mobile application of your own, Nimble AppGenie is here to help.</p>
                        </div>
                        <div className='col-md-5 offset-md-1 d-flex align-items-center' style={{ order: '1' }}>
                            <img className='img-fluid'
                                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2kaCFsQFNV29p0yv9Q1QB1jl8frXMpL7oDQ&usqp=CAU'
                                alt='Loan Lending App' width='80%' />
                        </div>
                    </div>
                </div>
                <br />

                <div className='sol5 fontfamily row'>
                    <div className='col-md-5 d-flex flex-column justify-content-center text-end'>
                        <h2><b>Cryptocurrency App</b></h2>
                        <p>If you want to enter the multi-billion dollar rapidly growing market of crypto, our cryptocurrency app development is for you.</p>
                    </div>
                    <div className='col-md-5 offset-md-1 d-flex align-items-center'>
                        <img
                            className='img-fluid'
                            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKAiJwNrHNowKfZo2Jwy8pS1WVFvBvljJIZg&usqp=CAU' alt='Cryptocurrency App' width='70%'
                        />
                    </div>
                </div><br />

                <div className='sol5 fontfamily row'>
                    <div className='col-md-5 offset-md-1'>
                        <img className='img-fluid' width='80%' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPUYpL7KAfxoItDL7QdLTeRSIFrmG2-Pz_Mw&usqp=CAU' alt='AI App Development' />
                    </div>
                    <div className='col-md-6' style={{ paddingTop: '60px', textAlign: 'start' }}>
                        <h2><b>AI App Development</b></h2>
                        <p>Integrating Artificial intelligence into a mobile application to deliver the best of both worlds.</p>
                    </div>
                </div><br />

                <div className='sol5 fontfamily row'>
                    <div className='col-md-6 offset-md-1' style={{ paddingTop: '60px', textAlign: 'end' }}>
                        <h2><b>Travel & Tours App Development</b></h2>
                        <p>Enable your customers to book flights, hotels, and everything else related to travel with an app.</p>
                    </div>
                    <div className='col-md-5'>
                        <img className='img-fluid' width='80%' src='https://www.tts.com/wp-content/uploads/2016/02/Corporate-travel-best-practices.jpg' alt='Travel & Tours App Development' />
                    </div>
                </div><br />



                <div className='sol5 fontfamily' style={{ display: 'flex' }}>
                    <div className='col-md-5 offset-md-1 d-flex align-items-center'>
                        <img className='img-fluid' width='100%' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqCCOwqf4PIkSgUgY4iTxsY14CqvK2j2EdokE8quwbHA8iSv1pGwPqfqISEPlxSXLiscI&usqp=CAU' alt='Real Estate & Property App Development' />
                    </div>

                    <div className='col-6 offset-1' style={{ textAlign: 'start', paddingTop: '60px' }}>
                        <h2 className='col ' ><b>Real Estate & Property App Development</b></h2>
                        <p className='col'>Buy and sell the property as you have never done before, with our real estate & property app solutions.</p>
                    </div >
                </div><br />



                <div className='sol5 fontfamily row'>
                    <div className='col-md-6 offset-md-1' style={{ paddingTop: '60px', textAlign: 'end' }}>
                        <h2><b>Media & Entertainment App Development</b></h2>
                        <p>With amazing media and entertainment app development services from Nimble AppGenie, the fun never stops.</p>
                    </div>
                    <div className='col-md-5'>
                        <img className='offset-1' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDqXaIgHDlrHz2CHtWUTbJ_kepnIXQPi9DVmmsQklbBKyGXSxYI5keAuA8ziWePY7zGM0&usqp=CAU' height='300px'
                            width='70%' />
                    </div>
                </div><br />


                <div className='sol5 fontfamily' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div className='row'>
                        <div className='col-md-4'>
                            <img
                                className='img-fluid'
                                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1-eum8Dl6UpVSHnkbl_MZNHYZAto5tQXsgA&usqp=CAU'
                                alt='Automotives App Development' width='100%'
                            />
                        </div>
                        <div className='col-md-6 offset-md-1'>
                            <h2><b>Automotives App Development</b></h2>
                            <p>Innovative automotives app development services that help you grow and win the market.</p>
                        </div>
                    </div>
                </div>
                <br />

                <div className='sol5 fontfamily' style={{ display: 'flex', flexDirection: 'column-reverse', alignItems: 'center' }}>
                    <div className='row'>
                        <div className='col-md-6 offset-md-1'>
                            <h2><b>Service Marketplace App Development</b></h2>
                            <p>Develop a service marketplace mobile app with Nimble AppGenie that will earn you millions in the market.</p>
                        </div>
                        <div className='col-md-4'>
                            <img
                                className='img-fluid'
                                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxoaceyuJdoTR88eb6bdtamTkfn736NElM9pU8h6iEpjoLuzUm_TjWmWCrEq2byENcUkA&usqp=CAU'
                                alt='Service Marketplace App Development'
                                width='80%'
                            />
                        </div>
                    </div>
                </div><br />

                <div className='sol5 fontfamily' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div className='row'>
                        <div className='col-md-4'>
                            <img
                                className='offset-md-1 img-fluid'
                                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmn4VFoAoXLaGZqBAQH4zoirTICWP9HPjmuw&usqp=CAU'
                                alt='Food & Restaurant'
                                width='100%'
                            />
                        </div>
                        <div className='col-md-6 offset-md-1'>
                            <h2><b>Food & Restaurant App Development</b></h2>
                            <p>Our Food & restaurant app development services are people’s favorite, and you should check it out.</p>
                        </div>
                    </div>
                </div><br />

                <div className='sol5 fontfamily row'>
                    <div className='col-md-6 offset-md-1' style={{ paddingTop: '60px', textAlign: 'end' }}>
                        <h2><b>Ecommerce, Retail & B2B App Development</b></h2>
                        <p>ECommerce is one of the most profitable industries today, explore our eCommerce, retail & B2B solutions.</p>
                    </div>
                    <div className='col-md-5'>
                        <img className='offset-md-1 img-fluid'
                            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7o8x1PuJB40KLIKu_uQqLPQDfEZkxoMyGcQ&s'
                            alt='Ecommerce, Retail & B2B'
                            style={{ maxWidth: '100%', height: 'auto' }} />
                    </div>
                </div><br />


                <div className='sol5 fontfamily' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div className='row'>
                        <div className='col-md-4'>
                            <img
                                className='img-fluid offset-md-1'
                                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVBlq7ObFIyg2p9eOAR_j3FESj0_NPFExo3g&s'
                                alt='Education and E-Learning'
                            />
                        </div>
                        <div className='col-md-6 offset-md-1'>
                            <h2><b>Education And E-Learning App Development</b></h2>
                            <p>The modern way of education is e-learning. Nimble AppGenie delivers innovative education development solutions.</p>
                        </div>
                    </div>
                </div><br />


                <div className='row sol5 fontfamily' style={{ display: 'flex' }}>
                        <div className='col-md-6 offset-md-1 order-md-1 order-2'>
                            <h2><b>Healthcare App Development</b></h2>
                            <p>Health is important and healthcare app development solution makes it easier to take care of yourself.</p>
                        </div>
                        <div className='col-md-5  order-md-2 order-1'>
                            <img
                                className='img-fluid'
                                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCV6CSFX1B1GEXfMishtmrQceoy0sufDQSWg&s'
                                alt='Healthcare'
                            />
                        </div>
                    </div><br/>

                <br /><br />

                <div className='sol6'>
                    <h3 className='col-3 offset-5' style={{ backgroundColor: 'black', color: 'white' }}>Nimble AppGenie’s Reviews</h3>
                    <br />
                    <h1>Deemed The Best App Developers</h1>

                    <p>Nimble AppGenie has been deemed the top mobile app development company by well-known critics and tech reviewers.</p>
                </div>

                <div className='sol7' style={{ display: 'flex', flexWrap: 'wrap' }}>
                    <div className='col-lg-2 col-md-4 col-sm-6 col-12 mb-4'>
                        <img src={blankimg1} className='blankimg img-fluid' alt='Image 1' />
                    </div>

                    <div className='col-lg-2 col-md-4 col-sm-6 col-12 mb-4'>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQvuEY5XWT21AqpDKDrNEpE3GhuZKwwQ0k9Q&usqp=CAU' className='blankimg img-fluid' alt='Image 2' />
                    </div>

                    <div className='col-lg-2 col-md-4 col-sm-6 col-12 mb-4'>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToHoRvSgfBi4E-yZTc_Uu_yrGfivYg1fgn2w&usqp=CAU' className='blankimg img-fluid' alt='Image 3' />
                    </div>

                    <div className='col-lg-2 col-md-4 col-sm-6 col-12 mb-4'>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnFwy45-YUhu8w11RH54NSLNb4kmUgJ0ZTSL4D5mkI-1h9Fzxe3hHXN_W6iN9gLUxlxMw&usqp=CAU' className='blankimg img-fluid' alt='Image 4' />
                    </div>

                    <div className='col-lg-2 col-md-4 col-sm-6 col-12 mb-4'>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtr1NwrdxZSd2vzx1qOw6pG3ge_9Oes9pn0A&usqp=CAU' className='blankimg img-fluid' alt='Image 5' />
                    </div>
                </div>

                <div className='sol7' style={{ display: 'flex', justifyContent: 'center' }}>
                    <div className='row'>
                        <div className='col-md-4 mb-4'>
                            <div className=' blankbox'>
                                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXCwsCgSHLzc7fGjiACE-7uH46iqiK6NWDEw&usqp=CAU' className='blankimg' alt='Image 1' style={{ height: '180px', width: '180px' }} />
                            </div>
                        </div>
                        <div className='col-md-4 mb-4'>
                            <div className='blankbox'>
                                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrw6s9C5ZRkk7hoTv_fK2bF3hlFi8SKKe9xw&usqp=CAU' className='blankimg' alt='Image 2' style={{ height: '180px', width: '180px' }} />
                            </div>
                        </div>
                        <div className='col-md-4 mb-4'>
                            <div className='blankbox'>
                                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjkyuqRiVAlXElhXEobcatxnI7UMhhzc_pXQ&usqp=CAU' className='blankimg' alt='Image 3' style={{ height: '180px', width: '180px' }} />
                            </div>
                        </div>
                    </div>
                </div>

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


                <div className='sol9' style={{ backgroundColor: 'black', color: 'white' }}>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <p className='pl-4 pr-4'>4.9 / 5.0 by 450+ customers for 800+ Web and Mobile App development projects.</p>
                            </div>
                            <div className='col-md-6'>
                                <div className='d-flex justify-content-end pr-4'>
                                    <p className='mr-4'>
                                        <span style={{ fontSize: '28px' }}><ImMail4 /></span> contact@appgenie.com
                                    </p>
                                    <p>
                                        <span style={{ fontSize: '28px' }}><AiFillSkype /></span> AppGenie
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




            </div>
        </>
    )
}

export default Solnav2
import React from 'react'
import Navbar from '../../navbar/Navbar'
import blankimg1 from '../../../accetss/solunav2/blank-box-icon01.webp'
import logolast from '../../../accetss/abstract-mortgage-home-roof-with-bars-forming-arrow-9723ld.png'
import '../../CSS MODULE/solcss.css'
import { ImMail4 } from "react-icons/im";
import { AiFillSkype } from "react-icons/ai";
import { NavLink } from 'react-router-dom';

const Solnav2 = () => {
  return (
    <>
        <div className='sol1 fontfamily'>
                <Navbar />
                <div className='sol2 fontfamily'>
                    <h1>  Industries We Serve</h1><br />
                    <h4>We help global brands design and build superior digital products, enabling seamless user <br />experiences across all modern platforms and devices.</h4>
                    <br /><br /><br /><br />
                    <div>
                        <NavLink>
                            <button type='submit' className='btn btn-outline-secondary btnh  col-2' style={{ fontSize: '20px', color: 'white' }}>Talk to Consultant</button>
                        </NavLink> &ensp;&ensp;&ensp;
                        <NavLink>
                            <button type='submit' className='btn btn-outline-dark btnh col-2' style={{ fontSize: '20px', color: 'white' }}>Get a Quote</button>
                        </NavLink>
                    </div>
                </div>

                <div className='sol3 fontfamily'>
                    <h4 style={{ paddingTop: '20px' }}>Trusted By Top Companies</h4><br />

                    <marquee>
                        <div className='' style={{ display: 'flex' }}>
                            <div style={{ display: 'flex' }} className=''><img className='' src='https://www.nimbleappgenie.com/homeimages/home-slider-icon08.png' /></div>
                            <br /> <div style={{ display: 'flex' }} className=''><img src='https://www.nimbleappgenie.com/homeimages/home-slider-icon08.png' /></div>
                            <br /><div className=''><img src='https://www.nimbleappgenie.com/homeimages/home-slider-icon08.png' /></div>

                        </div>
                    </marquee>
                </div><br /><br />

                <div className='sol4 fontfamily'>
                    <h4 className='col-2 offset-5' style={{ backgroundColor: 'gray', color: 'black' }}>Industries</h4><br />
                    <h2><b>Innovation Across Industries</b></h2>
                    <p>As a mobile app development company with a vision, Nimble AppGenie is dedicated to delivering innovative solutions across various industries.<br /> Some of the top industries we serve are:</p>
                </div><br />

                <div className='sol5 fontfamily' style={{ display: 'flex' }}>
                    <img className='offset-1' src='https://img.freepik.com/premium-photo/warehouse-with-blue-background-white-floor-large-warehouse-with-blue-background-word-shipping-bottom_756748-12641.jpg' height='300px' width='400px' />
                    <div className='col-6 offset-1' style={{ textAlign: 'start', paddingTop: '60px' }}>
                        <h2 className='col ' ><b>Logistics App Development</b></h2>
                        <p className='col'>Our logistics app development services are known for delivering innovation and data-driven solutions.</p>
                    </div>
                </div>

                <div className='sol5 fontfamily' style={{ display: 'flex' }}>

                    <div className='col-6 offset-1' style={{ textAlign: 'end', paddingTop: '60px' }}>
                        <h2 className='col ' ><b>Banking, Finance & Insurance App Development</b></h2>
                        <p className='col'>Banking Mobile apps, eWallet mobile apps, etc are just a few of our leading banking, finance, and insurance apps insurance.</p>
                    </div> <img className='offset-1' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR85PuG3HBLdpTNEJQ26HR6aTILeg2ZDagio5lT0TZjWbPSB80dtFk2BKaSz1f1OyT17h8&usqp=CAU' height='300px' width='400px' />
                </div>

                <div className='sol5 fontfamily' style={{ display: 'flex' }}>
                    <img className='offset-1' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2kaCFsQFNV29p0yv9Q1QB1jl8frXMpL7oDQ&usqp=CAU' height='300px' width='400px' />
                    <div className='col-6 offset-1' style={{ textAlign: 'start', paddingTop: '60px' }}>
                        <h2 className='col ' ><b>Loan Lending App Development</b></h2>
                        <p className='col'>If you want to develop a loan lending mobile application of your own, Nimble AppGenie is here to help.</p>
                    </div>
                </div>

                <div className='sol5 fontfamily' style={{ display: 'flex' }}>

                    <div className='col-6 offset-1' style={{ textAlign: 'end', paddingTop: '60px' }}>
                        <h2 className='col ' ><b>Cryptocurrency App</b></h2>
                        <p className='col'>If you want to enter the multi-billion dollar rapidly growing market of crypto, our cryptocurrency app development is for you.</p>
                    </div> <img className='offset-1' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKAiJwNrHNowKfZo2Jwy8pS1WVFvBvljJIZg&usqp=CAU' height='300px' width='400px' />
                </div>

                <div className='sol5 fontfamily' style={{ display: 'flex' }}>
                    <img className='offset-1' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPUYpL7KAfxoItDL7QdLTeRSIFrmG2-Pz_Mw&usqp=CAU' height='300px' width='400px' />
                    <div className='col-6 offset-1' style={{ textAlign: 'start', paddingTop: '60px' }}>
                        <h2 className='col ' ><b>AI App Development</b></h2>
                        <p className='col'>Integrating Artificial intelligence into a mobile application to deliver the best of both worlds.</p>
                    </div>
                </div>

                <div className='sol5 fontfamily' style={{ display: 'flex' }}>

                    <div className='col-6 offset-1' style={{ textAlign: 'end', paddingTop: '60px' }}>
                        <h2 className='col ' ><b>Travel & Tours App Development</b></h2>
                        <p className='col'>Enable your customers to book flights, hotels, and everything else related to travel with an app.</p>
                    </div> <img className='offset-1' src='https://www.tts.com/wp-content/uploads/2016/02/Corporate-travel-best-practices.jpg' height='300px' width='400px' />
                </div>

                <div className='sol5 fontfamily' style={{ display: 'flex' }}>
                    <img className='offset-1' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqCCOwqf4PIkSgUgY4iTxsY14CqvK2j2EdokE8quwbHA8iSv1pGwPqfqISEPlxSXLiscI&usqp=CAU' height='300px' width='400px' />
                    <div className='col-6 offset-1' style={{ textAlign: 'start', paddingTop: '60px' }}>
                        <h2 className='col ' ><b>Real Estate & Property App Development</b></h2>
                        <p className='col'>Buy and sell the property as you have never done before, with our real estate & property app solutions.</p>
                    </div>
                </div>



                <div className='sol5 fontfamily' style={{ display: 'flex' }}>

                    <div className='col-6 offset-1' style={{ textAlign: 'end', paddingTop: '60px' }}>
                        <h2 className='col ' ><b>Media & Entertainment App Development</b></h2>
                        <p className='col'>With amazing media and entertainment app development services from Nimble AppGenie, the fun never stops.</p>
                    </div> <img className='offset-1' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDqXaIgHDlrHz2CHtWUTbJ_kepnIXQPi9DVmmsQklbBKyGXSxYI5keAuA8ziWePY7zGM0&usqp=CAU' height='300px' width='400px' />
                </div>

                <div className='sol5 fontfamily' style={{ display: 'flex' }}>
                    <img className='offset-1' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1-eum8Dl6UpVSHnkbl_MZNHYZAto5tQXsgA&usqp=CAU' height='300px' width='400px' />
                    <div className='col-6 offset-1' style={{ textAlign: 'start', paddingTop: '60px' }}>
                        <h2 className='col ' ><b>Automotives App Development</b></h2>
                        <p className='col'>Innovation Automotives app development services that help you grow and win the market.</p>
                    </div>
                </div>


                <div className='sol5 fontfamily' style={{ display: 'flex' }}>

                    <div className='col-6 offset-1' style={{ textAlign: 'end', paddingTop: '60px' }}>
                        <h2 className='col ' ><b>Service Marketplace App Development</b></h2>
                        <p className='col'>Develop a service marketplace mobile app with Nimble AppGenie that will earn you millions in the market.</p>
                    </div> <img className='offset-1' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxoaceyuJdoTR88eb6bdtamTkfn736NElM9pU8h6iEpjoLuzUm_TjWmWCrEq2byENcUkA&usqp=CAU' height='300px' width='400px' />
                </div>

                <div className='sol5 fontfamily' style={{ display: 'flex' }}>
                    <img className='offset-1' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTETt07hK3IxOJicXowhEx2ed7yNRj_1NGcOg&usqp=CAU' height='300px' width='400px' />
                    <div className='col-6 offset-1' style={{ textAlign: 'start', paddingTop: '60px' }}>
                        <h2 className='col ' ><b>Event & Tickets App Development</b></h2>
                        <p className='col'>Our Event and Ticket App Development services are popular throughout the market, and now you can enjoy them too.</p>
                    </div>
                </div>

                <div className='sol5 fontfamily' style={{ display: 'flex' }}>

                    <div className='col-6 offset-1' style={{ textAlign: 'end', paddingTop: '60px' }}>
                        <h2 className='col ' ><b>On-Demand App development</b></h2>
                        <p className='col'>We develop on-demand apps like uber that help start-ups and businesses beat the competition.</p>
                    </div> <img className='offset-1' src='https://blog.infinitecab.com/wp-content/uploads/2020/02/New-Project-14.jpg' height='300px' width='400px' />
                </div>



                <div className='sol5 fontfamily' style={{ display: 'flex' }}>
                    <img className='offset-1' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmn4VFoAoXLaGZqBAQH4zoirTICWP9HPjmuw&usqp=CAU' height='300px' width='400px' />
                    <div className='col-6 offset-1' style={{ textAlign: 'start', paddingTop: '60px' }}>
                        <h2 className='col ' ><b>Food & Restaurant App Development</b></h2>
                        <p className='col'>Our Food & restaurant app development services are people’s favorite, and you should check it out.</p>
                    </div>
                </div>

                <div className='sol5 fontfamily' style={{ display: 'flex' }}>

                    <div className='col-6 offset-1' style={{ textAlign: 'end', paddingTop: '60px' }}>
                        <h2 className='col ' ><b>Ecommerce, Retail & B2B App Development</b></h2>
                        <p className='col'>ECommerce is one of the most profitable industries today, explore our eCommerce, retail & B2B solutions.</p>
                    </div> <img className='offset-1' src='https://img.freepik.com/premium-photo/warehouse-with-blue-background-white-floor-large-warehouse-with-blue-background-word-shipping-bottom_756748-12641.jpg' height='300px' width='400px' />
                </div>

                <div className='sol5 fontfamily' style={{ display: 'flex' }}>
                    <img className='offset-1' src='https://img.freepik.com/premium-photo/warehouse-with-blue-background-white-floor-large-warehouse-with-blue-background-word-shipping-bottom_756748-12641.jpg' height='300px' width='400px' />
                    <div className='col-6 offset-1' style={{ textAlign: 'start', paddingTop: '60px' }}>
                        <h2 className='col ' ><b>Education And ELearning App Development</b></h2>
                        <p className='col'>The modern way of education is e-learning. Nimble AppGenie delivers innovative education development solutions.</p>
                    </div>
                </div>

                <div className='sol5 fontfamily' style={{ display: 'flex' }}>

                    <div className='col-6 offset-1' style={{ textAlign: 'end', paddingTop: '60px' }}>
                        <h2 className='col ' ><b>Healthcare App Development</b></h2>
                        <p className='col'>Health is important and healthcare app development solution makes it easier to take care of yourself.</p>
                    </div> <img className='offset-1' src='https://img.freepik.com/premium-photo/warehouse-with-blue-background-white-floor-large-warehouse-with-blue-background-word-shipping-bottom_756748-12641.jpg' height='300px' width='400px' />
                </div><br /><br />

                <div className='sol6'>
                    <h3 className='col-3 offset-5' style={{ backgroundColor: 'black', color: 'white' }}>Nimble AppGenie’s Reviews</h3>
                    <br />
                    <h1>Deemed The Best App Developers</h1>

                    <p>Nimble AppGenie has been deemed the top mobile app development company by well-known critics and tech reviewers.</p>
                </div>

                <div className='sol7 ' style={{ display: 'flex' }}>
                    <div className='row blankbox' >
                        <img src={blankimg1} className='blankimg' height='180px' width='180px' style={{}} />
                    </div>

                    <div className='row blankbox'>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQvuEY5XWT21AqpDKDrNEpE3GhuZKwwQ0k9Q&usqp=CAU' className='blankimg' height='180px' width='180px' style={{}} />
                    </div>

                    <div className='row blankbox'>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToHoRvSgfBi4E-yZTc_Uu_yrGfivYg1fgn2w&usqp=CAU' className='blankimg' height='180px' width='180px' style={{}} />
                    </div>

                    <div className='row blankbox'>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnFwy45-YUhu8w11RH54NSLNb4kmUgJ0ZTSL4D5mkI-1h9Fzxe3hHXN_W6iN9gLUxlxMw&usqp=CAU' className='blankimg' height='180px' width='180px' style={{}} />
                    </div>

                    <div className='row blankbox'>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtr1NwrdxZSd2vzx1qOw6pG3ge_9Oes9pn0A&usqp=CAU' className='blankimg' height='180px' width='180px' style={{}} />
                    </div>

                </div>

                <div className='sol7  ' style={{ display: 'flex' }}>
                    <div className='row blankbox2 blankbox ' >
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXCwsCgSHLzc7fGjiACE-7uH46iqiK6NWDEw&usqp=CAU' className='blankimg' height='180px' width='180px' style={{}} />
                    </div>

                    <div className='row blankbox'>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrw6s9C5ZRkk7hoTv_fK2bF3hlFi8SKKe9xw&usqp=CAU' className='blankimg' height='180px' width='180px' style={{}} />
                    </div>

                    <div className='row blankbox'>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjkyuqRiVAlXElhXEobcatxnI7UMhhzc_pXQ&usqp=CAU' className='blankimg' height='180px' width='180px' style={{}} />
                    </div>
                </div>

                <div className='hh13 sol8 fontfamily' style={{ display: 'flex' }}>
                    <div className='col-4 ' style={{ textAlign: 'left' }} >
                        <img src={logolast} height='80' width='250' /><br /><br />
                        <div className='' >
                            Nimble AppGenie is a leading mobile app development company with a range of renowned mobile app development services and proven successes for our clients. Dare to be great. We’ll help the process.
                        </div>
                    </div>
                    <div className='offset-1' style={{ display: 'flex' }}>

                        <div>
                            <div className='col-3' style={{ textDecoration: 'none', fontSize: '22px' }}>
                                <b> Company</b>
                            </div>
                            <div className='col ' style={{ textAlign: 'left', textDecoration: 'none' }}>
                                <a href='' className='atag'>About Us</a> <br />
                                <a href='' className='atag'>Our Blog</a> <br />
                                <a href='' className='atag'>Portfolio</a> <br />
                                <a href='' className='atag'>Request A Quote</a> <br />
                                <a href='' className='atag'>Contact Us</a> <br />
                                <a href='' className='atag'>Privacy Policy</a> <br />
                                <a href='' className='atag'>Terms & Conditions</a> <br />
                            </div>
                        </div>

                        <div style={{ marginLeft: '50px' }}>
                            <div className='col-3' style={{ textDecoration: 'none', fontSize: '22px' }}>
                                <b>  Services</b><br />
                            </div>
                            <div className='col ' style={{ textAlign: 'left', textDecoration: 'none' }}>
                                <a href='' className='atag'>Software Development</a> <br />
                                <a href='' className='atag'>Web Development</a> <br />
                                <a href='' className='atag'>Android App Development</a> <br />
                                <a href='' className='atag'> iPhone App Development</a> <br />
                                <a href='' className='atag'>Maintenance & Support</a> <br />
                                <a href='' className='atag'>SAAS & Enterprise App </a> <br />
                                <a href='' className='atag'> Development</a> <br />
                            </div>
                        </div>

                        <div style={{ marginLeft: '50px' }}>
                            <div className='col-3' style={{ textDecoration: 'none', fontSize: '22px' }}>
                                <b>  Solutions</b><br />
                            </div>
                            <div className='col ' style={{ textAlign: 'left', textDecoration: 'none' }}>
                                <a href='' className='atag'>Logistics App</a> <br />
                                <a href='' className='atag'>Loan Lending App</a> <br />
                                <a href='' className='atag'>Banking, Finance & Insurance</a> <br />
                                <a href='' className='atag'>AI App Development</a> <br />
                                <a href='' className='atag'>Cryptocurrency App</a> <br />
                                <a href='' className='atag'>Real Estate & Property </a> <br />
                                <a href='' className='atag'> Travel & Tours</a> <br />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='sol9' style={{backgroundColor:'black',display:'flex' , color:'white'}}>
                    
                        <p className='offset-1'>4.9 / 5.0 by 450+ customers for 800+  Web and <br/>Mobile App development projects.</p>
                    <p className='offset-4'> <span style={{fontSize:'28px'}}><ImMail4/></span> contact@appgenie.com</p> &ensp;&ensp;&ensp;
                    <p> <span style={{fontSize:'28px'}}><AiFillSkype/></span>AppGenie</p>


                </div>




            </div>
    </>
  )
}

export default Solnav2
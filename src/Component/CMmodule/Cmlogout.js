import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import '../CSS MODULE/recss/reenquery.css'
import axios from 'axios'

const Cmlogout = () => {

    function fetchdata() {
        axios.get(`http://localhost:7001/reenquery`)
    }
    useEffect(() => {
        fetchdata()
    }, [])
    return (
        <>
            <center>
                <div className='row justify-content-center mt-5'>
                    <div class="col-lg-8 col-md-10 col-sm-12">
                        <h5 class="card-header text-center">Credit Manager</h5>
                        <div class="card-body ">
                            <div class="card-title text-center">
                                <h5>Are you want to leave this page</h5><br />
                                <div className='d-flex justify-content-center '>
                                    <NavLink to={'/login'}>
                                        <button className='btn btn-outline-secondary mx-2' type='submit'>Log Out</button>
                                    </NavLink>
                                    <NavLink to={'/cmpage'}>
                                        <button className='btn btn-outline-secondary mx-2' type='reset'>Cancel</button>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </center>
        </>
    )
}

export default Cmlogout
import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import '../CSS MODULE/recss/reenquery.css'
import axios from 'axios'

const RElogout = () => {

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
                    <div className='col-lg-8 col-md-10 col-sm-12'>
                        <h4 className='card-header text-center '> Regional Exicutive </h4>
                        <div className='card-body '>
                            <h4 className='card-title text-center'>Are you want to leave this page</h4><br />
                            <div className='d-flex justify-content-center '>
                                <NavLink to={'/login'}>
                                    <button className='btn btn-outline-secondary mx-2' type='submit'>Log Out</button>
                                </NavLink>
                                <NavLink to={'/repage'}>
                                    <button className='btn btn-outline-secondary mx-2' type='reset'>Cancel</button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </center>
        </>
    )
}

export default RElogout
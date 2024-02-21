import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import '../CSS MODULE/recss/reenquery.css'
import axios from 'axios'

const Cmlogout = () => {

    function fetchdata(){
        axios.get(`http://localhost:7001/reenquery`)
    }
    useEffect(()=>{
        fetchdata()
    },[])
    return (
        <>
            <center>
                <div className='relog'>
                    <div class="card col-8">
                        <h5 class="card-header text-center">Credit Manager</h5>
                        <div class="card-body text-center">
                            <blockquote class="blockquote mb-0">
                                <h5>A well-known quote, contained in a blockquote element.</h5><br />
                                <NavLink to={'/login'}>
                                    <button className='btn btn-outline-secondary col-3' type='submit'>Log Out</button>
                                </NavLink>
                                <NavLink to={'/cmpage'}>
                                    <button className='btn btn-outline-secondary col-3 offset-1' type='reset'>Cancel</button>
                                </NavLink>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </center>
        </>
    )
}

export default Cmlogout
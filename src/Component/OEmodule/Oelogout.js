import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import '../CSS MODULE/recss/reenquery.css'
import axios from 'axios'

const Oelogout = () => {

    function fetchdata(){
        axios.get(`http://localhost:7001/reenquery`)
        
    }
    useEffect(()=>{
        fetchdata()
    },[])
    return (
        <>
            <center>
                <div className='relog '>
                    <div class="card  col-8">
                        <h5 class="card-header text-center rel1">Oprational Exicutive</h5>
                        <div class="card-body rel2">
                            <h5 class="card-title text-center">Are you want to leave this page</h5><br/><br/>
                            <NavLink to={'/login'}>
                                <button className='btn btn-outline-secondary col-3' type='submit'>Log Out</button>
                            </NavLink>
                            <NavLink to={'/oepage'}>
                                <button className='btn btn-outline-secondary col-3 offset-1' type='reset'>Cancel</button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </center>
        </>
    )
}

export default Oelogout
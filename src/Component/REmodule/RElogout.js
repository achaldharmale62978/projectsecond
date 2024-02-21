import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import '../CSS MODULE/recss/reenquery.css'
import axios from 'axios'

const RElogout = () => {

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
                    <div className='card col-8'>
                        <h4 className='card-header text-center rel1'> Regional Exicutive </h4>
                        <div className='card-body rel2'>
                            <h4 className='card-title text-center'>Are you want to leave this page</h4><br/>

                            <NavLink to={'/login'}>
                                <button className='btn btn-outline-secondary col-3' type='submit'>Log Out</button>
                            </NavLink>
                            <NavLink to={'/repage'}>
                                <button className='btn btn-outline-secondary col-3 offset-1' type='reset'>Cancel</button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </center>
        </>
    )
}

export default RElogout
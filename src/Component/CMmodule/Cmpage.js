import React from 'react'
import '../CSS MODULE/recss/reenquery.css'
import { NavLink } from 'react-router-dom'

const Cmpage = () => {
    return (
        <>
            <div className='fontfamily col-2'>
                <div className='re1 re11'>
                    <h3 className='re2'>Credit Manager </h3>

                    <NavLink to={'/cmlist'} className='re3'>CM Enquery List</NavLink><br /><br />

                    <NavLink to={'/cmlogout'} className='re3'>CM Logout</NavLink><br /><br />

                </div>
            </div>
        </>
    )
}

export default Cmpage
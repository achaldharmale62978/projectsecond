import React from 'react'
import { NavLink } from 'react-router-dom'
import '../CSS MODULE/recss/repage.css'

const Repage = () => {
    return (
        <>
            <div className='re11 col-2 fontfamily'>
                <div className='re1 '>
                    <h4 className='re2'>Regional Exicutive</h4>

                    <NavLink to={'/reenqueryform'} className='re3'>RE Enquery Form</NavLink><br /><br />
                    <NavLink to={'/reenquerylist'} className='re3'>RE Enquery List</NavLink><br /><br />
                    <NavLink to={'/cibilstatus'} className='re3'>Cibil Status</NavLink><br /><br />
                    <NavLink to={'/relogout'} className='re3'>RE Logout</NavLink><br /><br />
                
                </div>
            </div>
        </>
    )
}

export default Repage
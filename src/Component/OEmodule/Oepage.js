import React from 'react'
import '../CSS MODULE/recss/repage.css'
import { NavLink } from 'react-router-dom'

const Oepage = () => {
    return (
        <>
            <div className='col-2 fontfamily'>
                <div className='re1 re11'>
                    <h3 className='re2'>Oprational Exicutive</h3>

                    <NavLink to={'/oelist'} className='re3'>OE Enquery List</NavLink><br /><br />
                    
                    <NavLink to={'/oelogout'} className='re3'>OE Logout</NavLink><br /><br />
                </div>
            </div>
        </>
    )
}

export default Oepage
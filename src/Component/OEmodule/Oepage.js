import React from 'react'
import '../CSS MODULE/recss/repage.css'
import { NavLink } from 'react-router-dom'

const Oepage = () => {
    return (
        <>
            <div className='col-5 fontfamily'>
                <div className='row justify-content'>
                    <div className='col-aiuto col-md-8 col-lg-6'>
                        <div className='re1 re11 text-center'>
                            <h3 className='re2'>Oprational Exicutive</h3>

                            <NavLink to={'/oelist'} className='re3 d-block my-2'>OE Enquery List</NavLink>

                            <NavLink to={'/oelogout'} className='re3 d-block my-2'>OE Logout</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Oepage
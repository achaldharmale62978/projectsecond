import React from 'react'
import '../CSS MODULE/recss/reenquery.css'
import { NavLink } from 'react-router-dom'

const Cmpage = () => {
    return (
        <>
            <div className='fontfamily col-5'>
                <div className='row justify-content'>
                    <div className='col-auto col-md-8 col-lg-6'>
                        <div className='re1 re11 text-center'>
                            <h3 className='re2'>Credit Manager </h3>

                            <NavLink to={'/cmlist'} className='re3 d-block my-2'>CM Enquery List</NavLink><br /><br />

                            <NavLink to={'/cmlogout'} className='re3 d-block my-2'>CM Logout</NavLink><br /><br />

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cmpage
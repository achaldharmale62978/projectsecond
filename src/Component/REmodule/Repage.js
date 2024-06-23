import React from 'react'
import { NavLink } from 'react-router-dom'
import '../CSS MODULE/recss/repage.css'

const Repage = () => {
    return (
        <>
            <div className="col-5 fontfamily">
                <div className="row justify-content">
                    <div className="col-auto col-md-8 col-lg-6">
                        <div className="re1 re11 text-center">
                            <h4 className="re2">Regional Executive</h4>

                            <NavLink to={'/reenqueryform'} className='re3 d-block my-2'>RE Enquiry Form</NavLink>
                            <NavLink to={'/relist'} className='re3 d-block my-2'>RE Enquiry List</NavLink>
                            <NavLink to={'/cibilstatus'} className='re3 d-block my-2'>Cibil Status</NavLink>
                            <NavLink to={'/relogout'} className='re3 d-block my-2'>RE Logout</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Repage
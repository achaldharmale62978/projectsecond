import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Oepage from './Oepage'
import '../CSS MODULE/recss/reenquery.css'
import { NavLink } from 'react-router-dom'


const OElist = () => {

    const [user, setuser] = useState([])

    async function fetchdata() {
        const result = await
            axios.get(`http://localhost:7001/reenquery`)
        console.log(result.data)
        setuser(result.data)
    }

    useEffect(() => {
        fetchdata()
    }, [])

    return (
        <>
            <div className=' ref1 fontfamily'>
                <div className='row ref2'>
                    <Oepage />
                    <div className='col-12 ref3'>
                        <h3 className='ref '>RE Enquery List</h3>
                        <div className="table-responsive">
                            <table className="table table-striped table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col" className="table-secondary">Id</th>
                                        <th scope="col">First Name</th>
                                        <th scope="col" className="table-secondary">Last Name</th>
                                        <th scope="col">Phone No.</th>
                                        <th scope="col" className="table-secondary">City</th>
                                        <th scope="col">Email</th>
                                        <th scope="col" className="table-secondary">Address</th>
                                        <th scope="col">Birth Date</th>
                                        <th scope="col" className="table-secondary">Gender</th>
                                        <th scope="col">Cibil</th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        user.map(use => {
                                            return (
                                                <tr key={use.id}>
                                                    <th className="table-secondary">{use.id}</th>
                                                    <td>{use.fname}</td>
                                                    <td className="table-secondary">{use.lname}</td>
                                                    <td>{use.phone}</td>
                                                    <td className="table-secondary">{use.city}</td>
                                                    <td>{use.email}</td>
                                                    <td className="table-secondary">{use.add}</td>
                                                    <td>{use.bday}</td>
                                                    <td className="table-secondary">{use.gender}</td>
                                                    <td>
                                                        <NavLink to={`/cibilreg`}>
                                                            <button className='btn btn-outline-danger ' type='submit' >Cibil</button>
                                                        </NavLink>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OElist


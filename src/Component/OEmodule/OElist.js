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
            <div className='ref1 fontfamily'><br/><br/>
                <div className='ref2'>
                    <Oepage /> &ensp;&ensp;&ensp;&ensp;&ensp;
                    <div className='ref3 '>
                        <h3 className='ref'>Oprational Exicutive List</h3><br/><br/>
                        <div>
                            <table class="table t1 border border-secondary">
                                <thead>
                                    <tr>
                                        <th scope="col" class="table-secondary">Id</th>
                                        <th scope="col">First Name</th>
                                        <th scope="col" class="table-secondary">Last Name</th>
                                        <th scope="col">Phone No.</th>
                                        <th scope="col" class="table-secondary">City</th>
                                        <th scope="col">Email</th>
                                        <th scope="col" class="table-secondary">Address</th>
                                        <th scope="col">Birth Date</th>
                                        <th scope="col" class="table-secondary">Gender</th>
                                        <th scope="col" >Cibil</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        user.map(use => {
                                            return (
                                                <>
                                                    <tr>
                                                        <th class="table-secondary">{use.id}</th>
                                                        <td>{use.fname}</td>
                                                        <td class="table-secondary">{use.lname}</td>
                                                        <td>{use.phone}</td>
                                                        <td class="table-secondary">{use.city}</td>
                                                        <td>{use.email}</td>
                                                        <td class="table-secondary">{use.add}</td>
                                                        <td>{use.bday}</td>
                                                        <td class="table-secondary">{use.gender}</td>
                                                        <td>
                                                            <NavLink to={`/cibilreg`}>
                                                                <button className='btn btn-outline-danger ' type='submit' >Cibil</button>
                                                            </NavLink>
                                                        </td>
                                                    </tr>
                                                </>
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
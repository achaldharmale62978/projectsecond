import React, { useEffect, useState } from 'react'
import Repage from './Repage'
import '../CSS MODULE/recss/reenquery.css'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import { GrUpdate } from "react-icons/gr";
import { MdDelete } from "react-icons/md";


const RElist = () => {

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
      <div className='ref1 fontfamily'>
        <div className='ref2'>
          <Repage />&ensp;&ensp;
          <div className='ref3 offset'>
            <h3 className='ref '>RE Enquery List</h3>
            <div >
              <table className="table t1 border border-secondary">
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
                    <th scope="col">Update</th>
                    <th scope="col" className="table-secondary">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {
                      user.map(use =>  {
                      return (
                        <>
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
                              <NavLink to={`/reupdate/${use.id}`} className='btt'><GrUpdate /></NavLink>
                            </td>
                            <td className='table-secondary'>
                              <NavLink to={`/redelete/${use.id}`} className='btt'><MdDelete  /> </NavLink>
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

export default RElist
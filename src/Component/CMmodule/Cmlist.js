import React, { useEffect, useState } from 'react'
import Cmpage from './Cmpage'
import axios from 'axios'
import '../CSS MODULE/recss/reenquery.css'
import { NavLink } from 'react-router-dom'
import { GrUpdate } from 'react-icons/gr'
import { MdDelete } from "react-icons/md";

const Cmlist = () => {

  const [user, setuser] = useState([])

  async function fetchdata() {
    const result = await
      axios.get(`http://localhost:7001/registration`)
    setuser(result.data)
  }

  useEffect(() => {
    fetchdata()
  }, [])
  return (
    <>
      <div className='ref1 fontfamily'>
        <div className='ref2'>
          <Cmpage />&ensp;&ensp;&ensp;&ensp;&ensp;
          <div className='ref3'>
            <h3 className='ref'>Credit Manager List</h3>

            <div>
              <table class="table t1 table-border">
                <thead>
                  <tr>
                    <th scope="col" class="table-secondary">Rid</th>
                    <th scope="col">First Name</th>
                    <th scope="col" class="table-secondary">Last Name</th>
                    <th scope="col">Birth  Date</th>
                    <th scope="col" class="table-secondary">Phone No.</th>
                    <th scope="col">Email</th>
                    <th scope="col" class="table-secondary">Address</th>
                    <th scope="col">Gender</th>
                    <th scope="col" class="table-secondary">Update</th>
                    <th scope="col">Delete</th>

                  </tr>
                </thead>
                <tbody>
                  {
                    user.map(use => {
                      return (
                        <>
                          <tr>
                            <th class="table-secondary">{use.rid}</th>
                            <td>{use.bfname}</td>
                            <td class="table-secondary">{use.blname}</td>
                            <td>{use.bbdate}</td>
                            <td class="table-secondary">{use.bphnum}</td>
                            <td>{use.bemail}</td>
                            <td class="table-secondary">{use.badd}</td>
                            <td>{use.bgender}</td>
                            <td class="table-secondary">
                              <NavLink to={'/regupdate'} className='btt'><GrUpdate /></NavLink>
                            </td>
                            <td>
                              <NavLink to={'/regdelete'} className='btt'><MdDelete /></NavLink>
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

export default Cmlist
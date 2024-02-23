import React, { useEffect, useState } from 'react'
import Cmpage from './Cmpage'
import axios from 'axios'
import '../CSS MODULE/recss/reenquery.css'
import { NavLink } from 'react-router-dom'
import { GrUpdate } from 'react-icons/gr'
import { MdDelete } from "react-icons/md";

const Cmlist = () => {

  const [reg, setreg] = useState([])

  async function fetchdata() {
    const result = await
      axios.get(`http://localhost:7001/registration`)
    setreg(result.data)
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
                    reg.map(usee => {
                      return (
                        <>
                          <tr key={usee.rid}>
                            <th class="table-secondary">{usee.rid}</th>
                            <td>{usee.bfname}</td>
                            <td class="table-secondary">{usee.blname}</td>
                            <td>{usee.bbdate}</td>
                            <td class="table-secondary">{usee.bphnum}</td>
                            <td>{usee.bemail}</td>
                            <td class="table-secondary">{usee.badd}</td>
                            <td>{usee.bgender}</td>
                            <td class="table-secondary">
                              <NavLink to={`/regupdate/${usee.rid}`} className='btt'><GrUpdate /></NavLink>
                            </td>
                            <td>
                              <NavLink to={`/regdelete/${usee.rid}`} className='btt'><MdDelete /></NavLink>
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
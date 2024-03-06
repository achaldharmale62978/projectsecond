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
            <h3 className='ref'>*  Credit Manager List  *</h3><hr />

            <div>
              <h6 className='ref'>Basic Information : </h6>
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
                    {/* <th scope="col" class="table-secondary">Update</th>
                    <th scope="col">Delete</th> */}

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
                            {/* <td class="table-secondary">
                              <NavLink to={`/regupdate/${usee.rid}`} className='btt'><GrUpdate /></NavLink>
                            </td>
                            <td>
                              <NavLink to={`/regdelete/${usee.rid}`} className='btt'><MdDelete /></NavLink>
                            </td> */}

                          </tr>
                        </>
                      )
                    })
                  }

                </tbody>
              </table>
            </div>
            <br />

            <div>
              <h6 className='ref'>Permanent Address : </h6>
              <table class="table t1 table-border">
                <thead>
                  <tr>
                    <th scope="col" class="table-secondary">Rid</th>
                    <th scope="col">House Number</th>
                    <th scope="col" class="table-secondary">Street Number</th>
                    <th scope="col">Area Name</th>
                    <th scope="col" class="table-secondary">District Name</th>
                    <th scope="col">Zip Code</th>
                    <th scope="col" class="table-secondary">Status</th>
                    <th scope="col">City</th>
                    {/* <th scope="col" class="table-secondary">Update</th>
                    <th scope="col">Delete</th> */}

                  </tr>
                </thead>
                <tbody>
                  {
                    reg.map(usee => {
                      return (
                        <>
                          <tr key={usee.rid}>
                            <th class="table-secondary">{usee.rid}</th>
                            <td>{usee.phnum}</td>
                            <td class="table-secondary">{usee.psnum}</td>
                            <td>{usee.paname}</td>
                            <td class="table-secondary">{usee.pdname}</td>
                            <td>{usee.pzip}</td>
                            <td class="table-secondary">{usee.pstatus}</td>
                            <td>{usee.pcity}</td>
                            {/* <td class="table-secondary">
                              <NavLink to={`/regupdate/${usee.rid}`} className='btt'><GrUpdate /></NavLink>
                            </td>
                            <td>
                              <NavLink to={`/regdelete/${usee.rid}`} className='btt'><MdDelete /></NavLink>
                            </td> */}

                          </tr>
                        </>
                      )
                    })
                  }

                </tbody>
              </table>
            </div>
            <br/>

            <div>
              <h6 className='ref'>Local Address : </h6>
              <table class="table t1 table-border">
                <thead>
                  <tr>
                    <th scope="col" class="table-secondary">Rid</th>
                    <th scope="col">House Number</th>
                    <th scope="col" class="table-secondary">Street Number</th>
                    <th scope="col">Area Name</th>
                    <th scope="col" class="table-secondary">District Name</th>
                    <th scope="col">Zip Code</th>
                    <th scope="col" class="table-secondary">Status</th>
                    <th scope="col">City</th>
                    {/* <th scope="col" class="table-secondary">Update</th>
                    <th scope="col">Delete</th> */}

                  </tr>
                </thead>
                <tbody>
                  {
                    reg.map(usee => {
                      return (
                        <>
                          <tr key={usee.rid}>
                            <th class="table-secondary">{usee.rid}</th>
                            <td>{usee.lhnum}</td>
                            <td class="table-secondary">{usee.lsnum}</td>
                            <td>{usee.laname}</td>
                            <td class="table-secondary">{usee.ldname}</td>
                            <td>{usee.lzip}</td>
                            <td class="table-secondary">{usee.lstatus}</td>
                            <td>{usee.lcity}</td>
                            {/* <td class="table-secondary">
                              <NavLink to={`/regupdate/${usee.rid}`} className='btt'><GrUpdate /></NavLink>
                            </td>
                            <td>
                              <NavLink to={`/regdelete/${usee.rid}`} className='btt'><MdDelete /></NavLink>
                            </td> */}

                          </tr>
                        </>
                      )
                    })
                  }

                </tbody>
              </table>
            </div>
            <br/>

            <div>
              <h6 className='ref'>Loan Information : </h6>
              <table class="table t1 table-border">
                <thead>
                  <tr>
                    <th scope="col" class="table-secondary">Rid</th>
                    <th scope="col">Loan Type</th>
                    <th scope="col" class="table-secondary">Loan Amount</th>
                    <th scope="col">Teanure</th>
                    <th scope="col" class="table-secondary">Paid Amount</th>
                    <th scope="col">Remaining Amount</th>
                    <th scope="col" class="table-secondary"> Status</th>
                    <th scope="col">Remark</th>
                    {/* <th scope="col" class="table-secondary">Update</th>
                    <th scope="col">Delete</th> */}

                  </tr>
                </thead>
                <tbody>
                  {
                    reg.map(usee => {
                      return (
                        <>
                          <tr key={usee.rid}>
                            <th class="table-secondary">{usee.rid}</th>
                            <td>{usee.ltype}</td>
                            <td class="table-secondary">{usee.lamount}</td>
                            <td>{usee.teanure}</td>
                            <td class="table-secondary">{usee.pamount}</td>
                            <td>{usee.reamount}</td>
                            <td class="table-secondary">{usee.lastatus}</td>
                            <td>{usee.laremark}</td>
                            {/* <td class="table-secondary">
                              <NavLink to={`/regupdate/${usee.rid}`} className='btt'><GrUpdate /></NavLink>
                            </td>
                            <td>
                              <NavLink to={`/regdelete/${usee.rid}`} className='btt'><MdDelete /></NavLink>
                            </td> */}

                          </tr>
                        </>
                      )
                    })
                  }

                </tbody>
              </table>
            </div>
            <br/>

            <div>
              <h6 className='ref'>Account Details : </h6>
              <table class="table t1 table-border">
                <thead>
                  <tr>
                    <th scope="col" class="table-secondary">Rid</th>
                    <th scope="col">Account Type</th>
                    <th scope="col" class="table-secondary">Account Balance</th>
                    <th scope="col">Account Holder Name</th>
                    <th scope="col" class="table-secondary">Account Status</th>
                    <th scope="col">Account Number</th>
                    {/* <th scope="col" class="table-secondary">Address</th>
                    <th scope="col">Gender</th>*/}
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
                            <td>{usee.atype}</td>
                            <td class="table-secondary">{usee.abalance}</td>
                            <td>{usee.ahname}</td>
                            <td class="table-secondary">{usee.astatus}</td>
                            <td>{usee.anum}</td>
                            {/* <td class="table-secondary">{usee.badd}</td>
                            <td>{usee.bgender}</td> */}
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
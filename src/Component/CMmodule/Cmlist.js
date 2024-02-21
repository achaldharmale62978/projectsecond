import React, { useEffect, useState } from 'react'
import Cmpage from './Cmpage'
import axios from 'axios'
import '../CSS MODULE/recss/reenquery.css'

const Cmlist = () => {

  const [user, setuser] = useState([])

  async function fetchdata() {
    const result = await
      axios.get(`http://localhost:7001/reenquery`)
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
                    <th scope="col" class="table-secondary">Id</th>
                    <th scope="col">First Name</th>
                    <th scope="col" class="table-secondary">Last Name</th>
                    <th scope="col">Phone No.</th>
                    <th scope="col" class="table-secondary">City</th>
                    <th scope="col">Email</th>
                    <th scope="col" class="table-secondary">Address</th>
                    <th scope="col">Birth Date</th>
                    <th scope="col" class="table-secondary">Gender</th>

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
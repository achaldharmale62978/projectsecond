import React, { useEffect, useState } from 'react'
import Repage from './Repage'
import '../CSS MODULE/recss/reenquery.css'
import axios from 'axios'


const RElist = () => {

  const [user, setuser] = useState([])

  async function fetchdata() {
    const result = await
      axios.get(``)
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
          <Repage />&ensp;&ensp;&ensp;
          <div className='ref3 offset'>
            <h3 className='ref '>RE Enquery List</h3>
            <div >
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
                    <th scope="col">Update</th>
                    <th scope="col" class="table-secondary">Delete</th>

                  </tr>
                </thead>
                <tbody>
                  {
                      user.map(obj =>  {
                      return (
                        <>
                          <tr key=''>
                            <th class="table-secondary"></th>
                            <td>{obj.fname}</td>
                            <td class="table-secondary">{obj.lname}</td>
                            <td>{obj.phone}</td>
                            <td class="table-secondary">{obj.city}</td>
                            <td>{obj.email}</td>
                            <td class="table-secondary">{obj.add}</td>
                            <td>{obj.bday}</td>
                            <td class="table-secondary">{obj.gender}</td>
                            <td>@mdo</td>
                            <td class="table-secondary">Otto</td>
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
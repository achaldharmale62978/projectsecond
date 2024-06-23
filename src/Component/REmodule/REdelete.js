import axios from 'axios'
import React, { useEffect, useState } from 'react'

import { NavLink, useNavigate, useParams } from 'react-router-dom'

const REdelete = () => {

  const [user, setuser] = useState({})

  const { userId } = useParams()

  const navigate = useNavigate()

  async function fetchdata() {
    const result = await
      axios.get(`http://localhost:7001/reenquery/get/${userId}`)
    setuser(result.data[0])
  }

  useEffect(() => {
    fetchdata()
  }, [])

  function Delete() {
    axios.delete(`http://localhost:7001/reenquery/redelete/${userId}`)
    navigate('/relist')
  }

  return (
    <>
      <center>
        <div className='row justify-content-center mt-5'>
          <div className=' col-lg-8 col-md-10 col-sm-12'>
            <form onSubmit={() => (Delete())}>
              <div className='card '>
                <h4 className='card-header text-center '> Regional Exicutive </h4>
                <div className='card-body '>
                  <h4 className='card-title text-center'>Are you want to Delete {user.id} this data</h4><br />
                  <div className='d-flex justify-content-center'>
                    <input type='submit' value='yes' className='btn btn-outline-secondary mx-2 ' />

                    <NavLink to={'/relist'}>
                      <button className='btn btn-outline-secondary mx-2' type='reset'>Cancel</button>
                    </NavLink>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </center>
    </>
  )
}

export default REdelete
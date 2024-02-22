import axios from 'axios'
import React, { useEffect, useState } from 'react'

import { NavLink, useNavigate, useParams } from 'react-router-dom'

const REdelete = () => {

  const [user,setuser]=useState({})

  const { userId } = useParams()

  const navigate = useNavigate()

  async function fetchdata() {
    const result =await
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
        <div className='relog'>
          <form onSubmit={()=>(Delete())}>
            <div className='card col-8'>
              <h4 className='card-header text-center rel1'> Regional Exicutive </h4>
              <div className='card-body rel2'>
                <h4 className='card-title text-center'>Are you want to Delete {user.id} this data</h4><br />

                <input type='submit' value='yes' className='btn btn-outline-secondary col-3 offset-1'/> 

                <NavLink to={'/relist'}>
                  <button className='btn btn-outline-secondary col-3 offset-1' type='reset'>Cancel</button>
                </NavLink>
              </div>
            </div>
          </form>
        </div>
      </center>
    </>
  )
}

export default REdelete
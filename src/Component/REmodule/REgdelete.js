import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useActionData, useNavigate, useParams } from 'react-router-dom'

const REgdelete = () => {

    const [reg, setreg] = useState({})

    const navigate = useNavigate()

    const { regId } = useParams()

    async function fetchdata() {
        const result = await
            axios.get(`http://localhost:7001/registration/get/${regId}`)
        setreg(result.data)
    }
    useEffect(() => {
        fetchdata()
    }, [])

    function Delete() {
        axios.delete(`http://localhost:7001/registration/regdelete/${regId}`)
        navigate('/cmlist')
    }
    return (
        <>
            <center className='relog fontfamily '>
                <form onSubmit={() => (Delete())}>
                    <div class="card col-8">
                        <div class="card-header">
                           <h5 className='ref text-center rel1'> Registration Data :</h5>
                        </div>
                        <div class="card-body rel2">
                            <h5 class="card-title">Are you want to delete this data </h5>
                            <br/><br/>
                            <div>
                                <input type='submit' value='Yes' className='btn btn-outline-secondary col-3 offset-1 btt' />

                                <NavLink to={'/cmlist'}>
                                    <button type='reset' className='btn btn-outline-secondary col-3 offset-1 btt'>Cancel</button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </form>
            </center>
        </>
    )
}

export default REgdelete
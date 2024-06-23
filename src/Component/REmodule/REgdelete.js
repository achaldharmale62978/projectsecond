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
            <center >
                <div className='row justify-content-center mt-5'>
                    <div className='col-lg-8 col-md-10 col-sm-12'>
                        <form onSubmit={() => (Delete())}>
                            <div class="card ">
                                <div class="card-header text-center">
                                    <div className='card-body'>
                                        <h5 className='card-title text-center '> Registration Data :</h5>
                                        <div class="card-body ">
                                            <h5 class="card-title text-center">Are you want to delete this data </h5>
                                            <br /><br />
                                            <div className='d-flex justify-content-center '>
                                                <input type='submit' value='Yes' className='btn btn-outline-secondary mx-2 btt' />

                                                <NavLink to={'/cmlist'}>
                                                    <button type='reset' className='btn btn-outline-secondary mx-2 btt'>Cancel</button>
                                                </NavLink>
                                            </div>
                                        </div>
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

export default REgdelete
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import '../CSS MODULE/recss/reenquery.css'

const CibilDelete = () => {

    const [cibil, setcibil] = useState({})

    const { cibilId } = useParams()

    const navigate = useNavigate()

    async function fetchdata() {
        const result = await
            axios.get(`http://localhost:7001/cibil/get/${cibilId}`)
        setcibil(result.data[0])
    }
    useEffect(() => {
        fetchdata()
    }, [])

    function Delete() {
        axios.delete(`http://localhost:7001/cibil/cibildelete/${cibilId}`)
        navigate('/cibilstatus')
    }
    return (
        <>
            <center>
                <div className='row justify-content-center mt-5'>
                    <div className=' col-lg-8 col-md-10 col-sm-12'>
                        <form onSubmit={() => (Delete())}>
                            <div class="card">
                                <h5 class="card-header text-center">Cibil Status </h5><br />
                                <div class="card-body">
                                    <h5 class="card-title text-center">Are you want to delete this {cibil.cid} cibil status </h5>
                                    <br /><br />
                                    <div className='d-flex justify-content-center'>
                                        <input value='Yes' type='submit' className='btn btn-outline-secondary mx-2' />

                                        <NavLink to={'/cibilstatus'}><button className='btn btn-outline-secondary mx-2' type='reset' > Cancel</button></NavLink>
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

export default CibilDelete
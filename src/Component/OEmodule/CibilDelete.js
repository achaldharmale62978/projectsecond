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
                <div className='relog col-8'>
                    <form onSubmit={() => (Delete())}>
                        <div class="card">
                            <h5 class="card-header">Cibil Status </h5><br/>
                            <div class="card-body">
                                <h5 class="card-title">Are you want to delete this {cibil.cid} cibil status </h5>
                                <br /><br />
                                <div>
                                    <input value='Yes' type='submit' className='btn btn-outline-secondary offset-1 col-3' />

                                    <NavLink to={'/cibilstatus'}><button className='btn btn-outline-secondary offset-2 col-3' type='reset' > Cancel</button></NavLink>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </center>
        </>
    )
}

export default CibilDelete
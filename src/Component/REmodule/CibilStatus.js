import React, { useEffect, useState } from 'react'
import '../CSS MODULE/recss/repage.css'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import { GrUpdate } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import Oepage from '../OEmodule/Oepage'


const CibilStatus = () => {

    const [cibil, setcibil] = useState([])

    async function fetchdata() {
        const result = await
            axios.get(`http://localhost:7001/cibil`)
        setcibil(result.data)
        console.log(result.data)
    }

    useEffect(() => {
        fetchdata()

    }, [])
    return (
        <>
            <div className='ref1 fontfamily '>
                <div className='ref2'>
                    <Oepage />&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
                    <div className='ref6'>
                        <div className=' ref3'>
                            <div className=' text-center  '>
                                <h5 className='ref '> * Update Cibil Status*</h5><hr/>
                            </div><br />
                            <div className=''>
                                <table class=" table t1 border border-secondary">
                                    <thead>
                                        <tr>
                                            <th scope="col" class="table-secondary">Cibil Id</th>
                                            <th scope="col">Cibil Score</th>
                                            <th scope="col" class="table-secondary">Cibil Date</th>
                                            <th scope="col">Status</th>
                                            <th scope="col" class="table-secondary">Remark</th>
                                            <th scope="col">Registration</th>
                                            <th scope="col" class="table-secondary">Delete</th>


                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            cibil.map(cibils => {
                                                return (
                                                    <>
                                                        <tr key={cibils.cid}>
                                                            <th scope="row" class="table-secondary">{cibils.cid}</th>
                                                            <td>{cibils.cscore}</td>
                                                            <td class="table-secondary">{cibils.cdate}</td>
                                                            <td>{cibils.status}</td>
                                                            <td class="table-secondary">{cibils.remark}</td>
                                                            <td >
                                                                <NavLink to={`/register`} className='btn btn-outline-secondary btt fontfamily'>Registration</NavLink>
                                                            </td>
                                                            <td class="table-secondary">
                                                                <NavLink to={`/cibildelete/${cibils.cid}`} className='btt'>< MdDelete /></NavLink>
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
            </div>
        </>
    )
}

export default CibilStatus
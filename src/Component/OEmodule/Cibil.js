import React from 'react'
import Oepage from './Oepage'
import '../CSS MODULE/recss/reenquery.css'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const Cibil = () => {
    const { register, handleSubmit } = useForm()

    const navigate = useNavigate()

    function savedata(data) {
        axios.post(`http://localhost:7001/cibil`, data)
        console.log(data)
        navigate('/cibilreg')
        alert('cibil data addedd...')
    }



    return (
        <>
            <div className='ref1 fontfamily '>
                <div className='ref2 ree'>
                    <Oepage />&ensp;&ensp;&ensp;&ensp;
                    <div className='fm col-6 ref5'>
                        <div className='ref3 fontfamily   ' >
                            <div className='text-center  '>
                                <h5 className='ref '> * Update Cibil *</h5><hr/>
                            </div><br />
                            <form onSubmit={handleSubmit(savedata)}>
                                <div className='form-group   cl1'>
                                    <label htmlFor='cid ' className=' cl2 col-3' >Cibil ID : </label>
                                    <input type='number' id='cid' className='form-control ' {...register('cid')}/>
                                </div><br /><br />

                                <div className='form-group   cl1'>
                                    <label htmlFor='cscore ' className=' cl2 col-3' >Cibil Score: </label>
                                    <input type='text' id='cscore' className='form-control ' {...register('cscore')}/>
                                </div><br /><br />

                                <div className='form-group   cl1'>
                                    <label htmlFor='cdate ' className=' cl2 col-3' >Cibil Date : </label>
                                    <input type='date' id='cdate' className='form-control ' {...register('cdate')}/>
                                </div><br /><br />

                                <div className='form-group   cl1'>
                                    <label htmlFor='status ' className=' cl2 col-3' >Status : </label>
                                    <input type='text' id='status' className='form-control ' {...register('status')}/>
                                </div><br /><br />

                                <div className='form-group   cl1'>
                                    <label htmlFor='remark ' className=' cl2 col-3' > Remark : </label>
                                    <input type='text' id='remark' className='form-control  ' {...register('remark')}/>
                                </div><br /><br />

                                <div className='form-group   cl1'>
                                    <button type='submit' className='btn btn-outline-success col-4 offset-1'>Submit</button>
                                    <button type='reset' className='btn btn-outline-danger col-4 offset-1 '>Reset</button>
                                </div><br /><br />


                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cibil
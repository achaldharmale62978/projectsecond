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
            <div className='ref1'>
                <div className='row justify-content-center'>
                    <div className='col-8 col-md-6 mt-5'>
                        <div className='text-center'>
                            <h5>* Update Cibil *</h5>
                            <hr />
                        </div>
                        <form onSubmit={handleSubmit(savedata)}>
                            <div className='form-group row'>
                                <label htmlFor='cid' className='col-12 col-md-3 col-form-label cl2'>Cibil ID:</label>
                                <div className='col-12 col-md-9'>
                                    <input type='number' id='cid' className='form-control' {...register('cid')} />
                                </div>
                            </div><br/>
                            <div className='form-group row'>
                                <label htmlFor='cscore' className='col-12 col-md-3 col-form-label cl2'>Cibil Score:</label>
                                <div className='col-12 col-md-9'>
                                    <input type='text' id='cscore' className='form-control' {...register('cscore')} />
                                </div>
                            </div><br/>
                            <div className='form-group row'>
                                <label htmlFor='cdate' className='col-12 col-md-3 col-form-label cl2'>Cibil Date:</label>
                                <div className='col-12 col-md-9'>
                                    <input type='date' id='cdate' className='form-control' {...register('cdate')} />
                                </div>
                            </div><br/>
                            <div className='form-group row'>
                                <label htmlFor='status' className='col-12 col-md-3 col-form-label cl2'>Status:</label>
                                <div className='col-12 col-md-9'>
                                    <input type='text' id='status' className='form-control' {...register('status')} />
                                </div>
                            </div><br/>
                            <div className='form-group row'>
                                <label htmlFor='remark' className='col-12 col-md-3 col-form-label cl2'>Remark:</label>
                                <div className='col-12 col-md-9'>
                                    <input type='text' id='remark' className='form-control' {...register('remark')} />
                                </div>
                            </div><br/><br/>
                            <div className='form-group row'>
                                <div className='col-12 col-md-6'>
                                    <button type='submit' className='btn btn-outline-success w-100'>Submit</button>
                                </div>
                                <div className='col-12 col-md-6'>
                                    <button type='reset' className='btn btn-outline-danger w-100'>Reset</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cibil
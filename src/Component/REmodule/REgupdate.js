import React, { useEffect } from 'react'
import Cmpage from '../CMmodule/Cmpage'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'

const REgupdate = () => {

    const  {register,handleSubmit,setValue}=useForm()

    const {regId} =useParams()

    const navigate=useNavigate()

    async function fetchdata(){
        const result = await
        axios.get(`http://localhost:7001/registration/get/${regId}`)

        result.data=result.data[0]

        setValue('rid',result.data.rid);
        setValue('bfname',result.data.bfname);
        setValue('blname',result.data.blname);
        setValue('bbdate',result.data.bbdate);
        setValue('bphnum',result.data.bphnum);
        setValue('bemail',result.data.bemail);
        setValue('badd',result.data.badd);
        setValue('bgender',result.data.bgender)
    }

    useEffect(()=>{
        fetchdata()
    },[])

    function savedata(data){
        axios.put(`http://localhost:7001/registration/regupdate/${regId}`,data)
        console.log(data)
        navigate('/cmlist')
        alert('/registration data updated....')
    }
    return (
        <>
            <div className='ref1 fontfamily'>
                <div className='ref2'>
                    <Cmpage />
                    <div className='ref3'>
                        <div>
                            <h5 className='ref text-center'>Registration Form</h5><hr />
                        </div><br />
                        <form onSubmit={handleSubmit(savedata)}>
                            <div className='  offset-1'>

                                <div>
                                    <h4 className='  text-center'>Basic Information : </h4>
                                </div>
                                <div className='refmain  col-12'>
                                    <div className='g-5 displays ' >
                                        <div className='form-group  textal col-3'>
                                            <label htmlFor='rid'  >Rid</label>
                                            <input type='number' id='rid' className='form-control' {...register('rid')} />
                                        </div> &ensp;&ensp;&ensp;

                                        <div className='form-group textal col-3'>
                                            <label htmlFor='bfname'  >First Name</label>
                                            <input type='text' id='bfname' className='form-control ' {...register('bfname')} />
                                        </div> &ensp;&ensp;&ensp;

                                        <div className='form-group textal col-3'>
                                            <label htmlFor='blname'  >Last Name</label>
                                            <input type='text' id='blname' className='form-control' {...register('blname')} />
                                        </div>&ensp;&ensp;&ensp;

                                        <div className='form-group  textal col-3'>
                                            <label htmlFor='bbdate'  >Birth Date</label>
                                            <input type='date' id='bbdate' className='form-control' {...register('bbdate')} />
                                        </div>&ensp;&ensp;&ensp;


                                    </div>
                                    <div className='g-5 displays ' >
                                        <div className='form-group  textal col-3'>
                                            <label htmlFor='bphnum'  >Phone No.</label>
                                            <input type='number' id='bphnum' className='form-control' {...register('bphnum')} />
                                        </div>&ensp;&ensp;&ensp;

                                        <div className='form-group textal'>
                                            <label htmlFor='bemail'  >Email</label>
                                            <input type='email' id='bemail' className='form-control' {...register('bemail')} />
                                        </div>&ensp;&ensp;&ensp;

                                        <div className='form-group  textal'>
                                            <label htmlFor='badd'  >Address</label>
                                            <textarea type='add' id='badd' className='form-control' {...register('badd')} />
                                        </div>&ensp;&ensp;&ensp;

                                        <div className='form-group textal '>
                                            <label htmlFor='bgender'>Gender : </label><br />

                                            <div className='form-check form-check-inline'>
                                                <input id='inlineRadio1' type='radio' name='inlineRadioOptions' value='female' className='form-control form-check-input ' {...register('bgender')} />
                                                <label htmlFor='inlineRadio1' className='form-check-label'> : Female </label>
                                            </div>
                                            <div className='form-check form-check-inline'>
                                                <input id='inlineRadio2' type='radio' name='inlineRadioOptions' value='male' className='form-control form-check-input' {...register('bgender')} />
                                                <label htmlFor='inlineRadio2' className='form-check-label'> : Male  </label>
                                            </div>
                                        </div>
                                    </div>
                                </div><br />

                                <div>
                                    <h4 className='  text-center'>Permanent Address : </h4>
                                </div>
                                <div className='refmain  col-12'>
                                    <div className='g-5 displays ' >
                                        <div className='form-group textal col-3'>
                                            <label htmlFor='phnum'  >House Number : </label>
                                            <input type='text' id='phnum' className='form-control ' {...register('phnum')} />
                                        </div> &ensp;&ensp;&ensp;

                                        <div className='form-group textal col-3'>
                                            <label htmlFor='psnum'  >Street Number: </label>
                                            <input type='text' id='psnum' className='form-control' {...register('psnum')} />
                                        </div>&ensp;&ensp;&ensp;

                                        <div className='form-group  textal col-3'>
                                            <label htmlFor='paname'  >Area Name</label>
                                            <input type='text' id='paname' className='form-control' {...register('paname')} />
                                        </div>&ensp;&ensp;&ensp;

                                        <div className='form-group  textal col-3'>
                                            <label htmlFor='pdname'  >District Name : </label>
                                            <input type='text' id='pdname' className='form-control' {...register('pdname')} />
                                        </div>
                                    </div>
                                    <div className='g-3 displays ' >
                                        <div className='form-group textal'>
                                            <label htmlFor='pzip'  >Zip Code : </label>
                                            <input type='text' id='pzip' className='form-control' {...register('pzip')} />
                                        </div>

                                        <div className='form-group offset-1 textal'>
                                            <label htmlFor='pstatus'  >Status</label>
                                            <input type='text' id='pstatus' className='form-control' {...register('pstatus')} />
                                        </div>

                                        <div className='form-group offset-1 textal'>
                                            <label htmlFor='pcity'  >City : </label>
                                            <input type='text' id='pcity' className='form-control' {...register('pcity')} />
                                        </div>
                                    </div>
                                </div><br />

                                <div>
                                    <h4 className='  text-center'>Local Address : </h4>
                                </div>
                                <div className='refmain  col-12'>
                                    <div className='g-5 displays ' >
                                        <div className='form-group textal col-3'>
                                            <label htmlFor='lhnum'  >House Number</label>
                                            <input type='text' id='lhnum' className='form-control ' {...register('lhnum')} />
                                        </div> &ensp;&ensp;&ensp;

                                        <div className='form-group textal col-3'>
                                            <label htmlFor='lsnum'  >Street Number</label>
                                            <input type='text' id='lsnum' className='form-control' {...register('lsnum')} />
                                        </div>&ensp;&ensp;&ensp;

                                        <div className='form-group  textal col-3'>
                                            <label htmlFor='laname'  >Area Name</label>
                                            <input type='text' id='laname' className='form-control' {...register('laname')} />
                                        </div>&ensp;&ensp;&ensp;

                                        <div className='form-group  textal col-3'>
                                            <label htmlFor='ldname'  >District Name</label>
                                            <input type='text' id='ldname' className='form-control' {...register('ldname')} />
                                        </div>
                                    </div>
                                    <div className='g-3 displays ' >
                                        <div className='form-group textal'>
                                            <label htmlFor='lzip'  >Zip Code</label>
                                            <input type='text' id='lzip' className='form-control' {...register('lzip')} />
                                        </div>

                                        <div className='form-group offset-1 textal'>
                                            <label htmlFor='lstatus'  >Status</label>
                                            <input type='text' id='lstatus' className='form-control'{...register('lstatus')} />
                                        </div>

                                        <div className='form-group offset-1 textal'>
                                            <label htmlFor='lcity'  >City</label>
                                            <input type='text' id='lcity' className='form-control' {...register('lcity')} />
                                        </div>
                                    </div>
                                </div><br />

                                <div>
                                    <h4 className='  text-center'>Loan Information : </h4>
                                </div>
                                <div className='refmain  col-12'>
                                    <div className='g-5 displays ' >
                                        <div className='form-group textal col-3'>
                                            <label htmlFor='ltype'  >Loan Type</label>
                                            <input type='text' id='ltype' className='form-control ' {...register('ltype')} />
                                        </div> &ensp;&ensp;&ensp;

                                        <div className='form-group textal col-3'>
                                            <label htmlFor='lamount'  >Loan Amount</label>
                                            <input type='text' id='lamount' className='form-control' {...register('lamount')} />
                                        </div>&ensp;&ensp;&ensp;

                                        <div className='form-group  textal col-3'>
                                            <label htmlFor='teanure'  >Teanure</label>
                                            <input type='text' id='teanure' className='form-control' {...register('teanure')} />
                                        </div>&ensp;&ensp;&ensp;

                                        <div className='form-group  textal col-3'>
                                            <label htmlFor='pamount'  >Paid Amount</label>
                                            <input type='text' id='pamount' className='form-control' {...register('pamount')} />
                                        </div>
                                    </div>
                                    <div className='g-3 displays ' >
                                        <div className='form-group textal'>
                                            <label htmlFor='reamount'  >Remaining Amount</label>
                                            <input type='text' id='reamount' className='form-control' {...register('reamount')} />
                                        </div>

                                        <div className='form-group offset-1 textal'>
                                            <label htmlFor='lastatus'  >Status</label>
                                            <input type='text' id='lastatus' className='form-control' {...register('lastatus')} />
                                        </div>

                                        <div className='form-group offset-1 textal'>
                                            <label htmlFor='lareamrk'  >City</label>
                                            <input type='text' id='laremark' className='form-control' {...register('laremark')} />
                                        </div>
                                    </div>
                                </div> <br />

                                <div>
                                    <h4 className='  text-center'>Account Details : </h4>
                                </div>
                                <div className='refmain  col-12'>
                                    <div className='g-5 displays ' >
                                        <div className='form-group textal col-3'>
                                            <label htmlFor='atype'  >Account Type</label>
                                            <input type='text' id='atype' className='form-control ' {...register('atype')} />
                                        </div> &ensp;&ensp;&ensp;

                                        <div className='form-group textal col-3'>
                                            <label htmlFor='abalance'  >Account Balance</label>
                                            <input type='text' id='abalance' className='form-control' {...register('abalance')} />
                                        </div>&ensp;&ensp;&ensp;

                                        <div className='form-group  textal col-3'>
                                            <label htmlFor='ahname'  >Account Holder Name</label>
                                            <input type='text' id='ahname' className='form-control' {...register('ahname')} />
                                        </div>&ensp;&ensp;&ensp;

                                        <div className='form-group  textal col-3'>
                                            <label htmlFor='astatus'  >Account Status</label>
                                            <input type='text' id='astatus' className='form-control'{...register('astatus')} />
                                        </div>
                                    </div>
                                    <div className='g-3 displays ' >
                                        <div className='form-group textal'>
                                            <label htmlFor='anum'  >Account Number</label>
                                            <input type='text' id='anum' className='form-control' {...register('anum')} />
                                        </div>

                                        {/* <div className='form-group offset-1 textal'>
                                            <label htmlFor='lstatus'  >Status</label>
                                            <input type='text' id='lstatus' className='form-control' />
                                        </div>

                                        <div className='form-group offset-1 textal'>
                                            <label htmlFor='lcity'  >City</label>
                                            <input type='text' id='lcity' className='form-control' />
                                        </div> */}
                                    </div>
                                </div><br />

                                <div className=''>
                                    <button type='submit' className='btn btn-outline-success bt col-3 offset-'>Submit</button>
                                    <button type='reset' className='btn btn-outline-danger bt col-3 offset-1'>Reset</button>
                                </div>




                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default REgupdate
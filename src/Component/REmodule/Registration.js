import React from 'react'
import Oepage from '../OEmodule/Oepage'
import '../CSS MODULE/recss/reenquery.css'

const Registration = () => {
    return (
        <>
            <div className='ref1 fontfamily'>
                <div className='ref2'>
                    <Oepage />
                    <div className='ref3'>
                        <div>
                            <h5 className='ref text-center'>Registration Form</h5><hr />
                        </div><br />
                        <form>
                            <div className='  offset-1'>

                                <div>
                                    <h4 className='  text-center'>Basic Information : </h4>
                                </div>
                                <div className='refmain  col-12'>
                                    <div className='g-5 displays ' >
                                        <div className='form-group textal col-3'>
                                            <label htmlFor='bfname'  >First Name</label>
                                            <input type='text' id='bfname' className='form-control ' />
                                        </div> &ensp;&ensp;&ensp;

                                        <div className='form-group textal col-3'>
                                            <label htmlFor='bfname'  >First Name</label>
                                            <input type='text' id='bfname' className='form-control' />
                                        </div>&ensp;&ensp;&ensp;

                                        <div className='form-group  textal col-3'>
                                            <label htmlFor='bfname'  >First Name</label>
                                            <input type='text' id='bfname' className='form-control' />
                                        </div>&ensp;&ensp;&ensp;

                                        <div className='form-group  textal col-3'>
                                            <label htmlFor='bfname'  >First Name</label>
                                            <input type='text' id='bfname' className='form-control' />
                                        </div>
                                    </div>
                                    <div className='g-3 displays ' >
                                        <div className='form-group textal'>
                                            <label htmlFor='bfname'  >First Name</label>
                                            <input type='text' id='bfname' className='form-control' />
                                        </div>

                                        <div className='form-group offset-1 textal'>
                                            <label htmlFor='bfname'  >First Name</label>
                                            <input type='text' id='bfname' className='form-control' />
                                        </div>

                                        <div className='form-group offset-1 textal'>
                                            <label htmlFor='bfname'  >First Name</label>
                                            <input type='text' id='bfname' className='form-control' />
                                        </div>
                                    </div>
                                </div><br />

                                <div>
                                    <h4 className='  text-center'>Permanent Address : </h4>
                                </div>
                                <div className='refmain  col-12'>
                                    <div className='g-5 displays ' >
                                        <div className='form-group textal col-3'>
                                            <label htmlFor='panum'  >Area Number : </label>
                                            <input type='text' id='panum' className='form-control ' />
                                        </div> &ensp;&ensp;&ensp;

                                        <div className='form-group textal col-3'>
                                            <label htmlFor='psnum'  >Street Number: </label>
                                            <input type='text' id='psnum' className='form-control' />
                                        </div>&ensp;&ensp;&ensp;

                                        <div className='form-group  textal col-3'>
                                            <label htmlFor='pcity'  >City : </label>
                                            <input type='text' id='pcity' className='form-control' />
                                        </div>&ensp;&ensp;&ensp;

                                        <div className='form-group  textal col-3'>
                                            <label htmlFor='pdname'  >District Name : </label>
                                            <input type='text' id='pdname' className='form-control' />
                                        </div>
                                    </div>
                                    <div className='g-3 displays ' >
                                        <div className='form-group textal'>
                                            <label htmlFor='bfname'  >Zip Code : </label>
                                            <input type='text' id='bfname' className='form-control' />
                                        </div>

                                        <div className='form-group offset-1 textal'>
                                            <label htmlFor='bfname'  >First Name</label>
                                            <input type='text' id='bfname' className='form-control' />
                                        </div>

                                        <div className='form-group offset-1 textal'>
                                            <label htmlFor='bfname'  >First Name</label>
                                            <input type='text' id='bfname' className='form-control' />
                                        </div>
                                    </div>
                                </div><br />

                                <div>
                                    <h4 className='  text-center'>Local Address : </h4>
                                </div>
                                <div className='refmain  col-12'>
                                    <div className='g-5 displays ' >
                                        <div className='form-group textal col-3'>
                                            <label htmlFor='bfname'  >First Name</label>
                                            <input type='text' id='bfname' className='form-control ' />
                                        </div> &ensp;&ensp;&ensp;

                                        <div className='form-group textal col-3'>
                                            <label htmlFor='bfname'  >First Name</label>
                                            <input type='text' id='bfname' className='form-control' />
                                        </div>&ensp;&ensp;&ensp;

                                        <div className='form-group  textal col-3'>
                                            <label htmlFor='bfname'  >First Name</label>
                                            <input type='text' id='bfname' className='form-control' />
                                        </div>&ensp;&ensp;&ensp;

                                        <div className='form-group  textal col-3'>
                                            <label htmlFor='bfname'  >First Name</label>
                                            <input type='text' id='bfname' className='form-control' />
                                        </div>
                                    </div>
                                    <div className='g-3 displays ' >
                                        <div className='form-group textal'>
                                            <label htmlFor='bfname'  >First Name</label>
                                            <input type='text' id='bfname' className='form-control' />
                                        </div>

                                        <div className='form-group offset-1 textal'>
                                            <label htmlFor='bfname'  >First Name</label>
                                            <input type='text' id='bfname' className='form-control' />
                                        </div>

                                        <div className='form-group offset-1 textal'>
                                            <label htmlFor='bfname'  >First Name</label>
                                            <input type='text' id='bfname' className='form-control' />
                                        </div>
                                    </div>
                                </div>




                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Registration
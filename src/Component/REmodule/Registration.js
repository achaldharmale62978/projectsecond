import React from 'react'
import '../CSS MODULE/recss/reenquery.css'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Repage from './Repage'

const Registration = () => {

    const { register, handleSubmit } = useForm()

    const navigate = useNavigate()

    function savedata(data) {
        axios.post(`http://localhost:7001/registration`, data)
        console.log(data)
        alert('registraton data added.... ')
        navigate('/register')
    }
    return (
        <>
            <div className="ref1 fontfamily">
                <div className="row">
                    <Repage />
                    <div className="col-7">
                        <div>
                            <h5 className="text-center">Registration Form</h5>
                            <hr />
                        </div>
                        <br />
                        <form onSubmit={handleSubmit(savedata)}>
                            <div className="">
                                <div>
                                    <h4 className="text-center">Basic Information:</h4>
                                </div>
                                <div className="row mb-3">
                                    <div className="form-group col-12 col-md-6 col-lg-3">
                                        <label htmlFor="rid">Rid</label>
                                        <input type="number" id="rid" className="form-control" {...register('rid')} />
                                    </div>

                                    <div className="form-group col-12 col-md-6 col-lg-3">
                                        <label htmlFor="bfname">First Name</label>
                                        <input type="text" id="bfname" className="form-control" {...register('bfname')} />
                                    </div>

                                    <div className="form-group col-12 col-md-6 col-lg-3">
                                        <label htmlFor="blname">Last Name</label>
                                        <input type="text" id="blname" className="form-control" {...register('blname')} />
                                    </div>

                                    <div className="form-group col-12 col-md-6 col-lg-3">
                                        <label htmlFor="bbdate">Birth Date</label>
                                        <input type="date" id="bbdate" className="form-control" {...register('bbdate')} />
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <div className="form-group col-12 col-md-6 col-lg-3">
                                        <label htmlFor="bphnum">Phone No.</label>
                                        <input type="number" id="bphnum" className="form-control" {...register('bphnum')} />
                                    </div>

                                    <div className="form-group col-12 col-md-6 col-lg-3">
                                        <label htmlFor="bemail">Email</label>
                                        <input type="email" id="bemail" className="form-control" {...register('bemail')} />
                                    </div>

                                    <div className="form-group col-12 col-md-6 col-lg-3">
                                        <label htmlFor="badd">Address</label>
                                        <textarea id="badd" className="form-control" {...register('badd')} />
                                    </div>

                                    <div className="form-group col-12 col-md-6 col-lg-3">
                                        <label htmlFor="bgender">Gender:</label>
                                        <br />
                                        <div className="form-check form-check-inline">
                                            <input id="inlineRadio1" type="radio" name="inlineRadioOptions" value="female" className="form-check-input" {...register('bgender')} />
                                            <label htmlFor="inlineRadio1" className="form-check-label">Female</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input id="inlineRadio2" type="radio" name="inlineRadioOptions" value="male" className="form-check-input" {...register('bgender')} />
                                            <label htmlFor="inlineRadio2" className="form-check-label">Male</label>
                                        </div>
                                    </div>
                                </div><hr/><hr/>

                                <div>
                                    <h4 className="text-center">Permanent Address:</h4>
                                </div>
                                <div className="row mb-3">
                                    <div className="form-group col-12 col-md-6 col-lg-3">
                                        <label htmlFor="phnum">House Number:</label>
                                        <input type="text" id="phnum" className="form-control" {...register('phnum')} />
                                    </div>

                                    <div className="form-group col-12 col-md-6 col-lg-3">
                                        <label htmlFor="psnum">Street Number:</label>
                                        <input type="text" id="psnum" className="form-control" {...register('psnum')} />
                                    </div>

                                    <div className="form-group col-12 col-md-6 col-lg-3">
                                        <label htmlFor="paname">Area Name</label>
                                        <input type="text" id="paname" className="form-control" {...register('paname')} />
                                    </div>

                                    <div className="form-group col-12 col-md-6 col-lg-3">
                                        <label htmlFor="pdname">District Name:</label>
                                        <input type="text" id="pdname" className="form-control" {...register('pdname')} />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="form-group col-12 col-md-4">
                                        <label htmlFor="pzip">Zip Code:</label>
                                        <input type="text" id="pzip" className="form-control" {...register('pzip')} />
                                    </div>

                                    <div className="form-group col-12 col-md-4">
                                        <label htmlFor="pstatus">Status</label>
                                        <input type="text" id="pstatus" className="form-control" {...register('pstatus')} />
                                    </div>

                                    <div className="form-group col-12 col-md-4">
                                        <label htmlFor="pcity">City:</label>
                                        <input type="text" id="pcity" className="form-control" {...register('pcity')} />
                                    </div>
                                </div><hr/><hr/>

                                <div>
                                    <h4 className="text-center">Local Address:</h4>
                                </div>
                                <div className="row mb-3">
                                    <div className="form-group col-12 col-md-6 col-lg-3">
                                        <label htmlFor="lhnum">House Number</label>
                                        <input type="text" id="lhnum" className="form-control" {...register('lhnum')} />
                                    </div>

                                    <div className="form-group col-12 col-md-6 col-lg-3">
                                        <label htmlFor="lsnum">Street Number</label>
                                        <input type="text" id="lsnum" className="form-control" {...register('lsnum')} />
                                    </div>

                                    <div className="form-group col-12 col-md-6 col-lg-3">
                                        <label htmlFor="laname">Area Name</label>
                                        <input type="text" id="laname" className="form-control" {...register('laname')} />
                                    </div>

                                    <div className="form-group col-12 col-md-6 col-lg-3">
                                        <label htmlFor="ldname">District Name</label>
                                        <input type="text" id="ldname" className="form-control" {...register('ldname')} />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="form-group col-12 col-md-4">
                                        <label htmlFor="lzip">Zip Code</label>
                                        <input type="text" id="lzip" className="form-control" {...register('lzip')} />
                                    </div>

                                    <div className="form-group col-12 col-md-4">
                                        <label htmlFor="lstatus">Status</label>
                                        <input type="text" id="lstatus" className="form-control" {...register('lstatus')} />
                                    </div>

                                    <div className="form-group col-12 col-md-4">
                                        <label htmlFor="lcity">City</label>
                                        <input type="text" id="lcity" className="form-control" {...register('lcity')} />
                                    </div>
                                </div><hr/><hr/>

                                <div>
                                    <h4 className="text-center">Loan Information:</h4>
                                </div>
                                <div className="row mb-3">
                                    <div className="form-group col-12 col-md-6 col-lg-3">
                                        <label htmlFor="ltype">Loan Type</label>
                                        <input type="text" id="ltype" className="form-control" {...register('ltype')} />
                                    </div>

                                    <div className="form-group col-12 col-md-6 col-lg-3">
                                        <label htmlFor="lamount">Loan Amount</label>
                                        <input type="text" id="lamount" className="form-control" {...register('lamount')} />
                                    </div>

                                    <div className="form-group col-12 col-md-6 col-lg-3">
                                        <label htmlFor="teanure">Tenure</label>
                                        <input type="text" id="teanure" className="form-control" {...register('teanure')} />
                                    </div>

                                    <div className="form-group col-12 col-md-6 col-lg-3">
                                        <label htmlFor="pamount">Paid Amount</label>
                                        <input type="text" id="pamount" className="form-control" {...register('pamount')} />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="form-group col-12 col-md-4">
                                        <label htmlFor="reamount">Remaining Amount</label>
                                        <input type="text" id="reamount" className="form-control" {...register('reamount')} />
                                    </div>

                                    <div className="form-group col-12 col-md-4">
                                        <label htmlFor="lastatus">Status</label>
                                        <input type="text" id="lastatus" className="form-control" {...register('lastatus')} />
                                    </div>

                                    <div className="form-group col-12 col-md-4">
                                        <label htmlFor="laremark">Remark</label>
                                        <input type="text" id="laremark" className="form-control" {...register('laremark')} />
                                    </div>
                                </div><hr/><hr/>

                                <div>
                                    <h4 className="text-center">Account Details:</h4>
                                </div>
                                <div className="row mb-3">
                                    <div className="form-group col-12 col-md-6 col-lg-3">
                                        <label htmlFor="atype">Account Type</label>
                                        <input type="text" id="atype" className="form-control" {...register('atype')} />
                                    </div>

                                    <div className="form-group col-12 col-md-6 col-lg-3">
                                        <label htmlFor="abalance">Account Balance</label>
                                        <input type="text" id="abalance" className="form-control" {...register('abalance')} />
                                    </div>

                                    <div className="form-group col-12 col-md-6 col-lg-3">
                                        <label htmlFor="ahname">Account Holder Name</label>
                                        <input type="text" id="ahname" className="form-control" {...register('ahname')} />
                                    </div>

                                    <div className="form-group col-12 col-md-6 col-lg-3">
                                        <label htmlFor="astatus">Account Status</label>
                                        <input type="text" id="astatus" className="form-control" {...register('astatus')} />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="form-group col-12 col-md-6 col-lg-3">
                                        <label htmlFor="anum">Account Number</label>
                                        <input type="text" id="anum" className="form-control" {...register('anum')} />
                                    </div>
                                </div><hr/>

                                <div className="text-center">
                                    <button type="submit" className="btn btn-outline-success mx-2">Submit</button>
                                    <button type="reset" className="btn btn-outline-danger mx-2">Reset</button>
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
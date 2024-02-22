import React, { useEffect } from 'react'
import '../CSS MODULE/recss/reenquery.css'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import Repage from './Repage'
import { useNavigate, useParams } from 'react-router-dom'


const REupdate = () => {

  const { userId } = useParams()

  const navigate = useNavigate()

  const { register, handleSubmit, setValue } = useForm()

  async function fetchdata() {
    const result = await
      axios.get(`http://localhost:7001/reenquery/get/${userId}`)

    result.data = result.data[0]
    
    setValue('fname', result.data.fname);
    setValue('lname', result.data.lname);
    setValue('phone', result.data.phone);
    setValue('city', result.data.city);
    setValue('email', result.data.email);
    setValue('add', result.data.add);
    setValue('bday', result.data.bday);
    setValue('gender', result.data.gender);

  }
  useEffect(() => {
    fetchdata()
  },[])

  function savedata(data) {
    axios.put(`http://localhost:7001/reenquery/reupdate/${userId}`, data)
    console.log(data)
    alert('re updatet......')
    navigate('/relist')
  }
  return (
    <>
      <div className='ref1 fontfamily '>
        <div className='ref2 '>
          <Repage />
          <div className='ref3  col-6'>
            <h4 className='ref offset-2'>RE Enquery Form : </h4><br />
            <form className='' onSubmit={handleSubmit(savedata)}>
              <div className='fm offset-2'><br />

                <div className='inp '>
                  <div className='form-group textal col-5 offset-1 '>
                    <label htmlFor='fname '>First Name :</label>
                    <input id='fname' type='text' className='form-control' {...register('fname')} />
                  </div>&ensp;&ensp;&ensp;
                  <div className='form-group textal col-5'>
                    <label htmlFor='lname'>Last Name :</label>
                    <input id='lname' type='text' className='form-control' {...register('lname')} />
                  </div>
                </div><br />

                <div className='inp '>
                  <div className='form-group textal col-5 offset-1 '>
                    <label htmlFor='phone '>Phone No. :</label>
                    <input id='phone' type='number' className='form-control' {...register('phone')} />
                  </div>&ensp;&ensp;&ensp;
                  <div className='form-group textal col-5'>
                    <label htmlFor='city'>City :</label>
                    <input id='city' type='text' className='form-control'  {...register('city')} />
                  </div>
                </div><br />

                <div className='inp '>
                  <div className='form-group textal col-5 offset-1'>
                    <label htmlFor='email'>Email :</label>
                    <input id='email' type='text' className='form-control'  {...register('email')} />
                  </div>&ensp;&ensp;&ensp;
                  <div className='form-group textal col-5'>
                    <label htmlFor='add'>Address : </label>
                    <textarea className='form-control' id='add' {...register('add')} />
                  </div>
                </div><br />

                <div className='inp '>
                  <div className='form-group textal col-5 offset-1'>
                    <label htmlFor='bday'>Birth Date : </label>
                    <input id='bday' type='date' className='form-control'  {...register('bday')} />
                  </div>&ensp;&ensp;&ensp;
                  <div className='form-group textal col-5'>
                    <label htmlFor='gender'>Gender : </label><br />

                    <div className='form-check form-check-inline'>
                      <input id='inlineRadio1' type='radio' name='inlineRadioOptions' value='female' className='form-control form-check-input '  {...register('gender')} />
                      <label htmlFor='inlineRadio1' className='form-check-label'> : Female </label>
                    </div>
                    <div className='form-check form-check-inline'>
                      <input id='inlineRadio2' type='radio' name='inlineRadioOptions' value='male' className='form-control form-check-input'  {...register('gender')} />
                      <label htmlFor='inlineRadio2' className='form-check-label'> : Male  </label>
                    </div>
                  </div>
                </div><br /><br />

                <div className='inpb '>
                  <button type='submit' className='btn btn-outline-secondary bt col-5 offset-1'>Submit</button>
                  &ensp;&ensp;&ensp;
                  <button type='reset' className='btn btn-outline-danger bt col-5'>Reset</button>
                </div><br />

              </div>
              <br />
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default REupdate
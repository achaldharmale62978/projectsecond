import React from 'react'
import Repage from './Repage'
import '../CSS MODULE/recss/reenquery.css'
import { useForm } from 'react-hook-form'
import axios from 'axios'

const REenqueryform = () => {

  const { register, handleSubmit } = useForm()

  function savedata(data) {
    axios.post('http://localhost:7001/reenquery', data)
    console.log(data)
    alert('data addedd successfully...')

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
                    <label htmlFor='fname ' className='form-label'>First Name :</label>
                    <input id='fname' type='text' className='form-control' {...register('fname')} />
                  </div>&ensp;&ensp;&ensp;
                  <div className='form-group textal col-5'>
                    <label htmlFor='lname' className='form-label'>Last Name :</label>
                    <input id='lname' type='text' className='form-control' {...register('lname')} />
                  </div>
                </div><br />

                <div className='inp '>
                  <div className='form-group textal col-5 offset-1 '>
                    <label htmlFor='phone ' className='form-label'>Phone No. :</label>
                    <input id='phone' type='number' className='form-control' {...register('phone')} />
                  </div>&ensp;&ensp;&ensp;
                  <div className='form-group textal col-5'>
                    <label htmlFor='city' className='form-label'>City :</label>
                    <input id='city' type='text' className='form-control'  {...register('city')} />
                  </div>
                </div><br />

                <div className='inp '>
                  <div className='form-group textal col-5 offset-1'>
                    <label htmlFor='email' className='form-label'>Email :</label>
                    <input id='email' type='text' className='form-control'  {...register('email')} />
                  </div>&ensp;&ensp;&ensp;
                  <div className='form-group textal col-5'>
                    <label htmlFor='add' className='form-label'>Address : </label>
                    <textarea className='form-control' id='add' {...register('add')} />
                  </div>
                </div><br />

                <div className='inp '>
                  <div className='form-group textal col-5 offset-1'>
                    <label htmlFor='bday' className='form-label'>Birth Date : </label>
                    <input id='bday' type='date' className='form-control'  {...register('bday')} />
                  </div>&ensp;&ensp;&ensp;
                  <div className='form-group textal col-5'>
                    <label htmlFor='gender' className='form-label'>Gender : </label><br />

                    <div className='form-check form-check-inline'>
                      <input id='inlineRadio1' type='radio' name='inlineRadioOptions' value='female' className='form-control form-check-input '  {...register('gender')} />
                      <label htmlFor='inlineRadio1' className='form-check-label form-label'> : Female </label>
                    </div>
                    <div className='form-check form-check-inline'>
                      <input id='inlineRadio2' type='radio' name='inlineRadioOptions' value='male' className='form-control form-check-input'  {...register('gender')} />
                      <label htmlFor='inlineRadio2' className='form-check-label form-label'> : Male  </label>
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

export default REenqueryform
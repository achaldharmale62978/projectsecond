import React from 'react'
import Repage from './Repage'
import '../CSS MODULE/recss/reenquery.css'

const REenqueryform = () => {
  return (
    <>
      <div className='ref1 '>
        <div className='ref2 '>
          <Repage />
          <div className='ref3 col-9'>
            <form>
              <div>
                <div className='form-group'>
                  <label htmlFor='fname'>FIRST NAME</label>
                  <input id='fname' type='text' className='form-control' />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default REenqueryform
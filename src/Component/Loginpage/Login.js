import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaHome } from "react-icons/fa";
import '../CSS MODULE/logincss/login.css'

const Login = () => {

  const [name, setname] = useState("")
  const [pwd, setpwd] = useState("")
  const navigate = useNavigate()

  const islogin = () => {
    if (name === "re" && pwd === "re") {
      
      navigate("/repage")
    } else if (name === "oe" && pwd === "oe") {
      
      navigate("/oepage")
    } else if (name === "cm" && pwd === "cm") {
   
      navigate('/cmpage')
    } else {
      alert("not connecting to any site....")
    }
  }

  return (
    <>
      <div className='backim fontfamily'>
        <div>
          <form>
            <div className='log1 icone col-1'>
              <ul className='nav flex-column'>
                <li className='nav-item'>
                  <a className='nav-link icone' aria-current='page' href='/home'><FaHome /></a>
                </li>
              </ul>
            </div>
            <div className='formcontent'>
              <div className='col-6 offset-3 formbox'>
                <div className='form-group forms'>
                  <label htmlFor='inputEmail4 forms'>USER NAME : </label>
                  <input id='re' type='email' className='form-control' value={name} onChange={e => setname(e.target.value)} />
                </div><br /><br />

                <div className='form-group forms'>
                  <label htmlFor='inputEmail4 forms'>PASSWORD : </label>
                  <input id='pwd' type='password' className='form-control' value={pwd} onChange={e => setpwd(e.target.value)} />
                </div><br /><br />

                <div className='fomr-group forms'>
                  <input type='signup' value='SIGNUP' onClick={islogin} className='btn btn-dark forms button col-5' />
                </div>

              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login
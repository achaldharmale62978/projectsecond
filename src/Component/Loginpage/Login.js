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
        <div className=''>
          <form>
            <div className='row'>
              <div className='col-12 col-md-1'>
                <ul className='nav flex-column'>
                  <li className='nav-item'>
                    <a className='nav-link icone' aria-current='page' href='/home'><FaHome /></a>
                  </li>
                </ul>
              </div>
              <div className='col-12 col-md-11'>
                <div className='formcontent'>
                  <div className='row justify-content-center'>
                    <div className='col-12 col-md-6 formbox'>
                      <div className='form-group forms'>
                        <label htmlFor='inputEmail4' className='forms'>USER NAME : </label>
                        <input
                          id='re'
                          type='email'
                          className='form-control'
                          value={name}
                          onChange={e => setname(e.target.value)}
                        />
                      </div>
                      <br /><br />
                      <div className='form-group forms'>
                        <label htmlFor='inputPassword4' className='forms'>PASSWORD : </label>
                        <input
                          id='pwd'
                          type='password'
                          className='form-control'
                          value={pwd}
                          onChange={e => setpwd(e.target.value)}
                        />
                      </div>
                      <br /><br />
                      <div className='form-group forms'>
                        <input
                          type='button'
                          value='SIGNUP'
                          onClick={islogin}
                          className='btn btn-dark mx-1'
                        />
                      </div>
                    </div>
                  </div>
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
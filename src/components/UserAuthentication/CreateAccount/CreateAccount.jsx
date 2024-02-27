import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setUserName, setUserGmail, setUserPassword, createAccount, setMessage } from '../../../features/authenticationSlice'
import style from './CreateAccount.module.css'
import { Button } from '../../../styles/Button.js'
import { useNavigate } from 'react-router-dom'


const CreateAccount = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { userName, userGmail, userPassword} = useSelector(state=>state.authentication)

  const handleLogin = () => {
    navigate('/login',{state:{fromSingup: true}})
    dispatch(setUserGmail(""))
    dispatch(setUserPassword(""))
    dispatch(setUserName(""))
  }


  return (
    <div className={style.login_container}>
      <form
       onSubmit={(e)=>e.preventDefault()}
       className={style.login_form}
       >    
            
            <h3>Creat Account Here</h3>
            <input type="text" 
            id="name" 
            value={userName}
            onChange={(e)=>dispatch(setUserName(e.target.value))}
            placeholder='Enter your name...'
            />
        
            <input type="text" 
            id="email" 
            value={userGmail}
            onChange={(e)=>dispatch(setUserGmail(e.target.value))}
            placeholder='Enter your email...'
            />
        
            <input type="text" 
            id='password' 
            value={userPassword}
            onChange={(e)=>dispatch(setUserPassword(e.target.value))} 
            placeholder='Enter your password...'
            />

            <div className={style.loginbtn}>
              <Button
                onClick={(e)=>dispatch(createAccount())}
                type='button'
              >Singup</Button>

              <Button
              onClick={()=>handleLogin()}
              type='button'
              >Login</Button>
            </div>
      </form>
    </div>
  )
}

export default CreateAccount

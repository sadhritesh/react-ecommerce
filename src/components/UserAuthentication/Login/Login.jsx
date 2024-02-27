import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {  setUserGmail, setUserPassword, userLogin } from '../../../features/authenticationSlice'
import { useNavigate, NavLink, useLocation } from 'react-router-dom'
import style from './Login.module.css'
import { Button } from '../../../styles/Button.js'



const Login = () => {

  const location = useLocation()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {  users,userGmail, userPassword, isLoggedIn, message } = useSelector(state=>state.authentication)

  useEffect(() => {
    if (isLoggedIn && location.state && location.state.fromSingup ){
      navigate('/')
    }else if(isLoggedIn){
      navigate(-1)
    }
  }, [isLoggedIn]);

  // useEffect(() => {
  //   if(message){
  //     toast.success(message,{autoClose:flase})
  //   }
  // },[])
  

  const handleClick = () => {
    dispatch(userLogin({users,userGmail, userPassword}))
  }

  const handleClearFeilds = () => {
    dispatch(setUserGmail(""))
    dispatch(setUserPassword(""))
  }

  return (
    <div className={style.login_container}>
      {/* <Message /> */}
      <form
       onSubmit={(e)=>e.preventDefault()}
       className={style.login_form}
       >    
            
            <h3>Login Here</h3>
            <input type="email" 
            id="email" 
            value={userGmail}
            onChange={(e)=>dispatch(setUserGmail(e.target.value))}
            placeholder='Enter your email...'
            />
        
            <input type="password" 
            id='password' 
            value={userPassword}
            onChange={(e)=>dispatch(setUserPassword(e.target.value))} 
            placeholder='Enter your password...'
            />

            <div className={style.loginbtn}>
              <Button
                onClick={(e)=>handleClick()}
              >Login</Button>
              <NavLink
              to='/createaccount'
              onClick={()=>handleClearFeilds()}
              ><Button>Singup</Button></NavLink>
            </div>
      </form>
      
    </div>
  )
}

export default Login

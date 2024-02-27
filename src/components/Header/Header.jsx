import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { HiOutlineShoppingCart } from "react-icons/hi";
import style from './Header.module.css'
import { IoMenuSharp, IoCloseSharp } from "react-icons/io5";
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '../../styles/Button';
import { userLogout, setMessage } from '../../features/authenticationSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Message from '../Message'


function Header() {

   const [ mobileMenuActive, setmobileMenuActive] = useState(false) 
   const totalItems = useSelector(state => state.cart.totalItems)
   const dispatch = useDispatch()
   const { isLoggedIn, activeUser } = useSelector(state=>state.authentication)
   const message = useSelector(state => state.authentication.message);
 
//    const toastOptions = {
//      position: "top-center",
//      pauseOnHover: true,
//      pauseOnFocusLoss: false,
//      autoClose: 2000
//    };
 
//    useEffect(() => {
//      if (message) {
//        if (message.type === "success") {
//          toast.success(message.text, toastOptions);
//          console.log(message);
//        } else {
//          toast.error(message.text, toastOptions);
//        }
//          dispatch(setMessage());
//      }
//    }, [message, dispatch]);
//    console.log("header re-renderd");

  return (
    <>
    {/* <ToastContainer {...toastOptions}
    style={{zIndex:"10000"}}
    />; */}
    <Message />
    <div 
    className={`${style.navbar}`}
    >
      <div className={style.logo}>
        <NavLink to={'/'} className={style.logoNavlink}>
            SKY STORE
        </NavLink>
      </div>
      <ul className={mobileMenuActive?`${style.navbarList}  ${style.mobileNavbar}`:`${style.navbarList}`}>
        <li className={style.navlinkLi}>
            <NavLink to={'/'} className={style.navlink}>
                Home
            </NavLink>
        </li>
        <li className={style.navlinkLi}>
            <NavLink to={'/about'} className={style.navlink}>
                About
            </NavLink>
        </li>
        <li className={style.navlinkLi}>
            <NavLink to={'/contactus'} className={style.navlink}>
                Contact Us
            </NavLink>
        </li>
        <li className={style.navlinkLi}>
            <NavLink to={'/products'} className={style.navlink}>
                Products
            </NavLink>
        </li>
        <li className={`${style.navlinkLi} ${style.cart_div} `}>
            <NavLink to={'/cart'} className={`${style.navlink} ${style.cart}`}>
                <HiOutlineShoppingCart />
                <div className={style.circle}><p>{totalItems}</p></div>
            </NavLink>
        </li>
        <li className={` ${style.mobile_login}`}>
            {
                isLoggedIn?
                <NavLink>
                    <Button
                         onClick={(e)=>dispatch(userLogout(activeUser.gmail))}
                    >Logout</Button>
                </NavLink>
                :<NavLink to={'/login'} className={style.navlink}>
                    <Button >Login</Button>
                </NavLink>
            }

            <IoCloseSharp 
            className={style.closeicon}
            onClick={()=>setmobileMenuActive(false)}/>

        </li>
      </ul>
        <div>
            <NavLink to={'/cart'} className={`${style.navlink} ${style.cart} ${style.mobilecart}`}>
                        <HiOutlineShoppingCart />
                        <div className={style.circle}><p>{totalItems}</p></div>
            </NavLink>
            <IoMenuSharp className={style.menu}  onClick={()=>setmobileMenuActive(prev=>!prev)}/>
        </div>
    </div>
    </>
  )
}

export default Header

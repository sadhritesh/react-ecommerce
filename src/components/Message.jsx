import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMessage } from '../features/authenticationSlice';
import { setCartMessage } from '../features/cartSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Message = () => {
  const dispatch = useDispatch();
  const message = useSelector(state => state.authentication.message);
  const cartMessage = useSelector(state => state.cart.cartMessage)

  const toastOptions = {
    position: "top-center",
    pauseOnHover: true,
    pauseOnFocusLoss: false,
    autoClose: 2000
  };

  useEffect(() => {
    if (message) {
      if (message.type === "success") {
        toast.success(message.text, toastOptions);
        console.log(message);
      } else {
        toast.error(message.text, toastOptions);
      }
        dispatch(setMessage());
    }
  }, [message, dispatch]);

  useEffect(()=> {
    if (cartMessage) {
      toast.info(cartMessage)
      dispatch(setCartMessage())
    }
  }, [cartMessage, dispatch])

  console.log("rendered");
  return <ToastContainer {...toastOptions}
          style={{zIndex:"10000"}}
          />;
};

export default Message;

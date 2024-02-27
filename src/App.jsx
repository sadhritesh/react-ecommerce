import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { About, Cart, Contact, Error, Home, Products, SingleProduct, Header, Footer, Login, CreateAccount} from './components'
import styled, { ThemeProvider } from 'styled-components' 
import { GlobalStyle } from './styles/GlobalStyle.js'
import { useEffect } from 'react'
import { setUsersData } from './features/authenticationSlice.js'
import { useDispatch, useSelector } from 'react-redux'
import { setUserCartData } from './features/cartSlice.js'
import getLocalStorageData from './LocalStorage/getLocalStorageData.js'

function App() {

  const dispatch = useDispatch()
  const { isLoggedIn, activeUser} = useSelector(state=>state.authentication)

  useEffect(()=>{
    dispatch(setUsersData())
  },[])

  useEffect(() => {
    if (isLoggedIn) {
      let cartData = getLocalStorageData(activeUser.gmail) || []
      dispatch(setUserCartData(cartData));
    }else{
      dispatch(setUserCartData([]))
    }
  }, [isLoggedIn, activeUser, dispatch]);

  const theme = {
    colors: {
      heading: "rgb(24, 24, 29)",
      text: "rgba(29, 29, 29, .8)",
      white: "#fff",
      black: "#212529",
      helper: "#8490ff",

      bg: "#ebf4fc",
      footer_bg: "0a1435",
      btn: "rgb(98, 84, 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#fffff",
      gradient: "linear-gradient(0deg, rgb(132, 144, 255) 0%, rgb(98, 189, 252) 100%)",
      shadow:  "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: {
      mobile: "700px", 
      tab: "998px",
    }
  }



  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
          <MainConatiner>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/createaccount' element={<CreateAccount />} />
              <Route path='/login' element={<Login />} />
              <Route path='/about' element={<About />} />
              <Route path='/contactus' element={<Contact/>} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/products' element={<Products />} />
              <Route path='/singleproduct/:id' element={<SingleProduct />} />
              <Route path='/*' element={<Error />} />
            </Routes>
          </MainConatiner>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  )
}

const MainConatiner = styled.div`
  
& {
  padding: 5.5rem 0;
}

@media (max-width: 700px){
  & {
    padding: 8.2rem 0;
  }
}

`

export default App

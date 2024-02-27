import React from 'react'
import styled from 'styled-components'

const TrustedSection = () => {
  return (
    <Wrapper>
    <div className='container'>
      <h3>Trusted By 1000+ Companies</h3>
      <div className='logo_container'>
            <div >
                <img 
                src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image2.png" 
                alt="trusted-brands" />
            </div>
            <div>
                <img 
                src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image3.png" 
                alt="trusted-brands" />
            </div>
            <div >
                <img 
                src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image4.png" 
                alt="trusted-brands" />
            </div>
            <div>
                <img 
                src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image6.png" 
                alt="trusted-brands" />
            </div>
            <div >
                <img 
                src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image8.png" 
                alt="trusted-brands" />
            </div>
      </div>
    </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
.logo_container{
  padding: 3rem; 
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  background-color: ${({theme})=>theme.colors.bg};
  border-radius: 1rem;
}
h3 {
  text-align: center;
  text-transform: capitalize;
  color: rgba(29, 29, 29, .8);
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
}

img{
  width: 100%;
}

@media (max-width: 600px) {
  .logo_container{
      display: grid;
      grid-template-columns: repeat(2, 1fr);
  }
}

`



export default TrustedSection

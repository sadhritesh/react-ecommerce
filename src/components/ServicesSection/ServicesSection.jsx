import styled from "styled-components";
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";
import style from './ServicesSection.module.css'

const ServicesSection = () => {
  return (

    <div className='container'>
      <div className={style.services}>
          <div className={style.service_1}>
            <div className={style.icon}>
              <TbTruckDelivery  />
            </div>
            <h3>Super Fast and Free Delivery</h3>
          </div>

          <div className={style.service_2}>
              <div className={style.icon}>
                <MdSecurity  />
              </div>
              <h3>Non-contact Shipping</h3>
          </div>

          <div className={style.service_3}>
                <div className={style.icon}>
                  <GiReceiveMoney/>
                </div>
                <h3>Money-back Guaranteed</h3>
          </div>

          <div className={style.service_4}>
                <div className={style.icon}>
                  <RiSecurePaymentLine className="icon" />
                </div>
              <h3>Super Secure Payment System</h3>
          </div>
      </div>
    </div>

  )
}


export default ServicesSection

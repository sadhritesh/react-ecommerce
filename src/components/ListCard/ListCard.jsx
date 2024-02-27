import React from 'react'
import style from './ListCard.module.css'
import {FormatPrice} from '../index'
import { NavLink } from 'react-router-dom'

const ListCard = (props) => {

  const {id, name, image, price, description }  = props

  return (
    <div className={style.listcard}>
      <figure className={style.listcard_img}>
        <img 
        src={image} 
        alt={name} 
        />
      </figure>
      <div className={style.ListCard_desc}>
          <h3 className={style.text}>{name}</h3>
          <p className={style.text}><FormatPrice price={price} /></p>
          <p className={style.text}>{`${description.slice(0,109)} ...`}</p>
          <NavLink to={`/singleproduct/${id}`}>
            <button className={style.readmore}>
              Read more
            </button>
          </NavLink>
      </div>
    </div>
  )
}

export default ListCard

import React from 'react'
import style from './GridCard.module.css'
import { NavLink } from 'react-router-dom';
import { FormatPrice } from '../index';

const GridCard = (props) => {
    const { id, name, image, price, category } = props;
  return (
    <NavLink to={`/singleproduct/${id}`} className={style.navlink}>
        <div className={style.card}>
            <figure>
                <img src={image} alt={name} />
                <figcaption className={style.caption}>{category}</figcaption>
            </figure>

            <div className={style.card_data}>
                <h3>{name}</h3>
                <p >
                    <FormatPrice price={ price } />
                </p>
            </div>
        </div>
    </NavLink>
  )
}

export default GridCard

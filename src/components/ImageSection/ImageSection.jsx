import React, { useState } from 'react'
import style from  './ImageSection.module.css'

const ImageSection = ({ imageData }) => {
 
  const [ index, setIndex ] = useState(0)

  return (
    <div className={style.img_container}>
      <div className={style.images_cont_left}>
        {
            imageData?.map((currImg,i)=>{
                return (
                    <img 
                    src={currImg.url} 
                    className={style.product_imgs}
                    alt={currImg.filename} 
                    key={currImg.id}
                    onClick={()=>setIndex(i)}
                    />
                )
            })
        }
      </div>
      <div className={style.images_cont_right} >
        <img src={imageData && imageData[index].url} className={style.main_img} alt="" />
      </div>
    </div>
  )
}

export default ImageSection

import React, { useState } from 'react'

const Tour = ({id,image,info,name,price,removetour}) => {
    const[readmore,setReadmore]=useState(false);
    return (
    <article className='single-tour'>
        <img src={image} alt={name}></img>
        <footer>
            <div className='tour-info'>
                <h4>{name}</h4>
                <h4 className='tour-price'>${price}</h4>
            </div>
            <div>
                <p>{readmore?info:`${info.substring(0,250)}`}
                <button onClick={()=>setReadmore(!readmore)}>
                    {readmore?'Read Less':'Read More'}
                </button>
                </p>
                <button className='delete-btn' onClick={()=>removetour(id)}>not interested</button>
            </div>
        </footer>
    </article>
  )
}

export default Tour

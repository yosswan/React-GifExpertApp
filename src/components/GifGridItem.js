import React from 'react'

const GifGridItem = ({id,title,image}) => {
    console.log(id, title);
    return (
        <div className='card animate__animated animate__fadeIn animate__slow'>
            <img src={image} alt={title} />
            <p>{ title }</p>
        </div>
    )
}

export default GifGridItem
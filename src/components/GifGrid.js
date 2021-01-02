// import React, { useState,useEffect } from 'react'
//import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItems } from './GifGridItems';

export const GifGrid = ({ category }) => {

    
    // const [images, setImages] = useState([]);

    const {data:images,loading}= useFetchGifs(category);

  

    // useEffect(()=>{
       
    //     getGifs(category)
    //            .then(setImages);

    // },[category]);

   


    return (

        <>
        <h3 className='animate__animated animate__fadeInRight'> { category } </h3>
        {loading&&<p className='animate__animated animate__flash'>Cargando...</p>}

        
        <div >

        
       <ol className="card-grid">

      { images.map((img)=>(

              
       <GifGridItems 
       
       key={img.id}
       img={img}
       {...img}
       />



      ))}

       </ol>

        </div>

        </>
    )
}
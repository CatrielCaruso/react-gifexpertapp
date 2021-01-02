import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => {

    // const categories=['One punch','Samurai x','Dragon ball'];

    const [categories, setCategories] = useState(['Samurai X']);

    // const handle=()=>{

    //     //setcategories([...categories,'Stein Gate']);
    //    // Otra forma:

    //    setcategories(cats=>[...cats,'Stein Gate']);
    // }


    return (
        <>
            <h2 > GifExpertApp </h2>
            <AddCategory setCategories={setCategories}/> 
            <hr/>

           

            <ol>

                {
                  
                  categories.map(category=> (

                  <GifGrid 
                  key={category}
                  category={category}/>
                  
                  ))


                }
            </ol>
            
        </>
    )
}



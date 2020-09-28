import React, { useState } from 'react'
import AddCategory from '../AddCategory/AddCategory';
import GifGrid from '../GifGrid/GifGrid';


const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Samurai X'])



    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory
                setCategories={setCategories}
            />
            <hr />

            {
                categories.map(category => {
                    return (<GifGrid key={category} category={category} />);
                })
            }

        </>
    )
}



export default GifExpertApp;
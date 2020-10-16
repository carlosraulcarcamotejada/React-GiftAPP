import React, { useState } from 'react'
import { AddCategory } from './AddCategory'
import { GifGrid } from './GifGrid'




export const GifExpertApp = ({ categoriesDefault = [] }) => {

    const [categories, setCategories] = useState(categoriesDefault)



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


import React from 'react';
import useFetchGifs from '../../CustomHooks/useFetchGifs';
import GifItem from '../GifItem/GifItem';

const GifGrid = ({ category }) => {

    const { data: images, loading } = useFetchGifs(category);

    return (
        <>
            <h3> {category} </h3>

            {
                images.map(image =>
                    <GifItem
                        key={image.id}
                        {...image}
                    />)
            }

        </>
    )
}


export default GifGrid;
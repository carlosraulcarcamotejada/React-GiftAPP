import React from 'react';
import useFetchGifs from '../CustomHooks/useFetchGifs';
import { GifItem } from './GifItem';
import PropTypes from 'prop-types'


export const GifGrid = ({ category }) => {

    const { data: images, loading } = useFetchGifs(category);
    

    return (
        <>
            <h3> {category}  </h3>
            { loading && <p >Loading...</p>}
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


GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}
import { useState, useEffect } from 'react';
import getGifs from '../utilities/getGifs';

const useFetchGifs = (category) => {

    const [data, setData] = useState(
        {
            data: [],
            loading: true
        }
    )

    useEffect(() => {
        getGifs(category)
            .then(
                (imgs) => {
                    setData({
                        data: imgs,
                        loading: true
                    });
                   
                }
            );

    }, [category]);


    return data;
}


export default useFetchGifs;
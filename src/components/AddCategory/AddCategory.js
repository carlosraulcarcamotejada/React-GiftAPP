import React, { useState } from 'react'
import PropTypes from 'prop-types'



const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const handleChangeOnInput = (e) => {
        setInputValue(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 0) {
            setInputValue('');
            setCategories(categories => [inputValue,...categories]);
        }
    }

    return (
        <form onSubmit={onSubmit} >
            <input
                type="text"
                value={inputValue}
                onChange={handleChangeOnInput}
            />
        </form>
    )
}


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
};

export default AddCategory;


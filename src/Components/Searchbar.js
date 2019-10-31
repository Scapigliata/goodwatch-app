import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ value, onChange }) => {

    const handleTextChange = (e) => {
        onChange(e.target.value);
    };

    return (
        <div className="searchbar">
            <input  className="searchbar__input" placeholder=" Find review ..." value={value} onChange={handleTextChange} />
        </div>
    )
}

SearchBar.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export default SearchBar;

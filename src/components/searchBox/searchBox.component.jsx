import React from "react";
import './searchBox.styles.css'

export const SearchBox = ({ placeholder, handleChange, handleSubmit })=> {
    
    return(
        <div className="searchBox">
            <input 
                className='search' 
                type='search' name="search"
                placeholder={placeholder} 
            onChange={handleChange}/>
            
            <button className="submit-btn" onClick={handleSubmit}>Search</button>
        </div>
    );
}
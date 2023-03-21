import React from 'react';
import {BsFilterLeft} from "react-icons/bs";
import HeaderSearchItem from "./HeaderSearchItem/HeaderSearchItem";

const HeadFilter = () => {
    return (
        <div className="header__search-filter">
            <BsFilterLeft fill='white' size='30px'/>
            <div className="header__search-popup">
                <HeaderSearchItem/>
            </div>
        </div>
    );
};

export default HeadFilter;
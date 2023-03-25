import React from 'react';
import {BsFilterLeft} from "react-icons/bs";
import {useNavigate, useParams} from "react-router-dom"
import {gameData} from "../../../utils/gameData"

const HeadFilter = () => {

    const navigate = useNavigate()

    const {category} = useParams()

    return (
        <div className="header__search-filter">
            <BsFilterLeft fill='white' size='30px'/>
            <div className="header__search-popup">
                <ul className="header__search-list">
                    {
                        gameData.map(item => (
                            <li key={item.en} className={item.en === category ? 'header__search-list-item-active' : 'header__search-list-item'} onClick={() => navigate(`/catalog/${item.en}`)}>
                                {item.ru}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};

export default HeadFilter;
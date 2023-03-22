import React from 'react';
import {BsFilterLeft} from "react-icons/bs";
import {useNavigate} from "react-router-dom"

const gamesData = [
    'Все игры',
    {
        ru : 'Экшен',
        en : 'action'
    },
    {
        ru : 'Инди',
        en : 'indie'
    },
    {
        ru : 'Приключения',
        en : 'adventures'
    },
    {
        ru : 'Стратегии',
        en : 'strategies'
    },
    {
        ru : 'Симуляторы',
        en : 'simulators'
    },
    {
        ru : 'Гонки',
        en : 'races'
    },
    {
        ru : 'Песочницы',
        en : 'sandboxes'
    },
    {
        ru : 'Онлайн игры',
        en : 'online'
    }
]

const HeadFilter = () => {

    const navigate = useNavigate()

    return (
        <div className="header__search-filter">
            <BsFilterLeft fill='white' size='30px'/>
            <div className="header__search-popup">
                <ul className="header__search-list">
                    {
                        gamesData.map(item => (
                            <li key={item.en} className="header__search-list-item" onClick={() => navigate(`/catalog/${item.en}`)}>
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
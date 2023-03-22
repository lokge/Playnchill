import React from 'react';
import {CiSearch} from 'react-icons/ci'
import {RiShoppingCartLine} from 'react-icons/ri'
import {AiOutlineHeart} from 'react-icons/ai'
import logo from '../../assets/logo.png'
import {useTranslation} from "react-i18next";
import SwitchLang from "./SwitchLang/SwitchLang";
import {Avatar} from "@chakra-ui/react";
import HeadFilter from "./HeadFilter/HeadFilter";
import {useNavigate} from "react-router-dom"

const Header = () => {

    const {t} = useTranslation()

    const navigate = useNavigate()

    return (
        <header className="header">
            <div className="container">
                <nav className="header__nav">
                    <div className="header__top">
                        <span className="header__lang">
                            <SwitchLang/>
                        </span>
                        <ul className="header__list">
                            <li className="header__list-item">{t('header.list1')}</li>
                            <li className="header__list-item">{t('header.list2')}</li>
                            <li className="header__list-item">{t('header.list3')}</li>
                            <li className="header__list-item">{t('header.list4')}</li>
                            <li className="header__list-item">{t('header.list5')}</li>
                        </ul>
                        <div className="header__user">
                            <p className="header__username">Name Rules</p>
                            <Avatar className="header__userPhoto" style={{ width:"35px", height:"35px"}} name='Erkin Dzhamanbaev' src="https://bipbap.ru/wp-content/uploads/2022/11/1652235714_41-kartinkin-net-p-prikolnie-kartinki-dlya-stima-44.jpg"/>
                        </div>
                    </div>
                    <div className="header__bottom">
                        <button onClick={() => {
                            navigate('/')
                        }} className="header__left">
                            <img src={logo} alt="Playnchill Logo" className="header__logo"/>
                            <h1 className="header__title">Playnchill</h1>
                        </button>
                        <div className="header__filters">
                            <span className="header__filter">
                                <HeadFilter/>
                            </span>
                            <label className="header__label">
                                <input type="search" className="header__search" placeholder={t('header.field')}/>
                                <span className="header__search-logo">
                                    <CiSearch fill='#323232' size='30px'/>
                                </span>
                            </label>
                        </div>
                        <div className="header__right">
                            <button onClick={() => {
                                navigate('/favorite')
                            }} className="header__icon">
                                <AiOutlineHeart fill='white' size='25px'/>
                            </button>
                            <button onClick={() => {
                                navigate('/basket')
                            }} className="header__icon">
                                <RiShoppingCartLine fill='#77BE1D' size='25px'/>
                            </button>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
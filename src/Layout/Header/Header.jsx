import React, {useContext, useState, useEffect, useRef} from 'react';
import {CiSearch} from 'react-icons/ci'
import {RiShoppingCartLine} from 'react-icons/ri'
import {AiOutlineHeart} from 'react-icons/ai'
import {FiUser} from 'react-icons/fi'
import logo from '../../assets/logo.png'
import {useTranslation} from "react-i18next";
import SwitchLang from "./SwitchLang/SwitchLang";
import {Avatar} from "@chakra-ui/react";
import HeadFilter from "./HeadFilter/HeadFilter";
import {Link, useNavigate, useSearchParams} from "react-router-dom"
import {CustomContext} from "../../utils/Context";
import axios from "../../utils/axios";
import debounce from "@material-ui/core/utils/debounce";


const Header = () => {

    // const handleChange = (e) => {
    //     setTitle(e.target.value)
    // }
    //
    // const [games, setGames] = useState([])
    // const [title, setTitle] = useState('')
    //
    // const {products, getAllProducts} = useContext(CustomContext)
    //
    // useEffect(() => {
    //
    //     let titleFilter = `${title.length !== 0 ? 'title_like=' + title + '&' : ''}`
    //
    //     axios(`/products?${titleFilter}`)
    //         .then(({data}) => setGames(data))
    //         .catch((err) => console.log('Данные не получены'))
    // },[title])

    //user
    const {user, setUser} = useContext(CustomContext)
    const logOutUser = () => {
        setUser({
            email: '',
        })
        localStorage.removeItem('user')
    }

    const {t} = useTranslation()

    const navigate = useNavigate()

    const inputRef = useRef();
    const [searchParams, setSearchParams] = useSearchParams();

    const searchGames = () => {
        const value = inputRef.current?.value.trim() || '';

        const newParams = new URLSearchParams(searchParams);

        if (value == '') {
            newParams.delete('title');
        } else {
            newParams.set('title', value);
            newParams.set('page', 1);
        }

        setSearchParams(newParams);
        navigate(`/catalog/all?${newParams.toString()}`);
    };

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
                            {
                                user.email.length ? <div onClick={logOutUser} className='header__userContent'><p className="header__username">{user.email}</p>
                                    <Avatar className="header__userPhoto" style={{ width:"35px", height:"35px"}} name='Erkin Dzhamanbaev' src="https://bipbap.ru/wp-content/uploads/2022/11/1652235714_41-kartinkin-net-p-prikolnie-kartinki-dlya-stima-44.jpg"/></div> : <Link to='/login'><p className="header__username">Войти<span className="header__username-icon"><FiUser/></span></p>
                                </Link>
                            }
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
                                <input ref={inputRef} onKeyUp={(e) => e.key == "Enter" && searchGames()} type="text" className="header__search" placeholder={t('header.field')}/>
                                <span onClick={() => searchGames()} className="header__search-icon">
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
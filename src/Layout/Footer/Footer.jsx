import React from 'react';
import SwitchLang from "../Header/SwitchLang/SwitchLang";
import {BsInstagram} from "react-icons/bs"
import {SlSocialVkontakte} from "react-icons/sl"
import {BsDiscord} from "react-icons/bs"
import {Link, useNavigate} from "react-router-dom";


const Footer = () => {

    const navigate = useNavigate()

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__row">
                    <ul className="footer__list">
                        <h2 className="footer__list-title">О компании</h2>
                        <li className="footer__list-item">О нас</li>
                        <li className="footer__list-item">Вакансии</li>
                        <li className="footer__list-item">Реквизиты</li>
                    </ul>
                    <ul className="footer__list">
                        <h2 className="footer__list-title">Договор оферты</h2>
                        <li className="footer__list-item">Каталог</li>
                        <li className="footer__list-item">Акции</li>
                        <li className="footer__list-item">Личный кабинет</li>
                    </ul>
                    <ul className="footer__list">
                        <h2 className="footer__list-title">Договор оферты</h2>
                        <li className="footer__list-item"><Link to='/catalog/all'>Каталог</Link></li>
                        <li className="footer__list-item">Акции</li>
                        <li className="footer__list-item">Личный кабинет</li>
                    </ul>
                </div>
                <p className="footer__text">
                    Все продаваемые ключи закупаются у официальных дистрибьюторовых издателей. В том числе у 1С-СофтКлаб, Бука, Новый Диск и Enaza
                </p>
            </div>
            <div className="footer__bottom">
                <div className="container">
                    <div className="footer__row">
                        <a href="https://www.instagram.com/_lokge_/" className="footer__bottom-info">Правовая информация</a>
                        <p className="footer__bottom-text">Интернет-магазин игр «Playnchill» © 2022 </p>
                        <div className="footer__bottom-box">
                            <SwitchLang/>
                            <div className="footer__bottom-links">
                                <a href="https://vk.com/erkiiin" className="footer__bottom-link"><SlSocialVkontakte className="footer__bottom-icon" fill="#FFFFFF26" size="20px"/></a>
                                <a href="https://discord.gg/SH6hGyCK" className="footer__bottom-link"><BsDiscord className="footer__bottom-icon" fill="#FFFFFF26" size="20px"/></a>
                                <a href="https://www.instagram.com/_lokge_/" className="footer__bottom-link"><BsInstagram className="footer__bottom-icon" fill="#FFFFFF26" size="20px"/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
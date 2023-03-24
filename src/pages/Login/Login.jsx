import React from 'react';
import {Link} from "react-router-dom";

const Login = () => {
    return (
        <div className='content'>
            <form className="form">
                <h2 className="form__title">Вход на сайт</h2>
                <input required placeholder='Адрес электронной почты' type="text" className="form__input"/>
                <input required placeholder='Пароль' type="password" className="form__input"/>
                <button className="form__btn basket__aside-btn">Войти</button>
                <p className="form__help">
                    У вас нет учетной записи Playnchill? <span className="form__link"><Link to='/register'>Зарегистрироваться</Link></span>
                </p>
            </form>
        </div>
    );
};

export default Login;
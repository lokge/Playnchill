import React, {useContext, useState} from 'react';
import Countries from "./Countries/Countries";
import {AiOutlineExclamationCircle} from 'react-icons/ai'
import {AiOutlineEyeInvisible} from 'react-icons/ai'
import {AiOutlineEye} from 'react-icons/ai'
import {Link, useNavigate} from 'react-router-dom'
import axios from "../../utils/axios";
import {CustomContext} from "../../utils/Context";

const Form = () => {

    const [eye, setEye] = useState(false)

    const navigate = useNavigate()

    const {user, setUser} = useContext(CustomContext)

    const registerUser = (e) => {
        e.preventDefault()

        let newUser = {
            email: e.target[4].value,
            login: e.target[3].value,
            password: e.target[5].value
        }
        axios.post('http://localhost:6969/register' , newUser)
            .then(({data}) => {
                setUser({
                    token: data.accessToken,
                    ...data.user
                })

                localStorage.setItem('user', JSON.stringify({
                    token: data.accessToken,
                    ...data.user
                }))
                navigate('/')
            })
            .catch((err) => console.log(err.message) )
    }

    return (
        <div className="content">
            <div className="container">
                <form className="form" onSubmit={registerUser}>
                    <h2 className="form__title">Регистрация</h2>
                    <Countries/>
                    <div className="form__names">
                        <input required className="form__input" placeholder='Имя' type="text"/>
                        <input required className="form__input" placeholder='Фамилия' type="text"/>
                    </div>
                    <div className="form__message">
                        <input placeholder='Отображаемое имя' required type="text" className="form__input"/>
                        <span className="form__message-point">
                            <AiOutlineExclamationCircle fill="white" size='20px'/>
                            <div className="form__popup">
                            <p className="form__popup-text">Ваше отображаемое имя должно состоять из 3−16 символов и может содержать буквы, цифры и непоследовательные дефисы, точки, знаки подчёркивания и пробелы.</p>
                        </div>
                        </span>
                    </div>
                    <input placeholder='Адрес электронной почты' required type="email" className="form__input"/>
                    <div className="form__message">
                        <label className="form__label">
                            <input required placeholder='Пароль' type={!eye ? 'password' : 'text'} className="form__input"/>
                            <span onClick={() => setEye(prev => !prev)} className='form__label-eye'>
                                {
                                    eye ? <AiOutlineEye fill="white" size="20px"/> : <AiOutlineEyeInvisible fill="white" size="20px"/>
                                }
                            </span>

                        </label>
                        <span className="form__message-point">
                            <AiOutlineExclamationCircle fill="white" size='20px'/>
                            <div className="form__popup">
                            <p className="form__popup-text">Пароли должны содержать не менее 7 символов, не менее 1 цифры, не менее 1 буквы и не должны содержать пробелы.</p>
                        </div>
                        </span>
                    </div>
                    <button type='submit' className="basket__aside-btn form__btn">
                        Зарегистрироваться
                    </button>
                    <p className="form__help">
                        Уже есть аккаунт? <span className="form__link"><Link to='/login'>Войти</Link></span>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Form;
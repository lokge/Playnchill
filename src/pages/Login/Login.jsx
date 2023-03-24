import React, {useContext, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import axios from "../../utils/axios";
import {CustomContext} from "../../utils/Context";

const Login = () => {

    const {setUser} = useContext(CustomContext)
    const navigate = useNavigate()

    const [eye, setEye] = useState(false)

    const loginUser = (e) => {
        e.preventDefault()

        let newUser = {
            email: e.target[0].value,
            password: e.target[1].value
        }
        axios.post('/login' , newUser)
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
        console.log(newUser)
    }

    return (
        <div className='content'>
            <form className="form" onSubmit={loginUser}>
                <h2 className="form__title">Вход на сайт</h2>
                <input required placeholder='Адрес электронной почты' type="text" className="form__input"/>
                <label className="form__label">
                    <input required placeholder='Пароль' type={!eye ? 'password' : 'text'} className="form__input"/>
                    <span onClick={() => setEye(prev => !prev)} className='form__label-eye form__label-eye-log'>
                                {
                                    eye ? <AiOutlineEye fill="white" size="20px"/> : <AiOutlineEyeInvisible fill="white" size="20px"/>
                                }
                            </span>
                </label>
                <button className="form__btn basket__aside-btn">Войти</button>
                <p className="form__help">
                    У вас нет учетной записи Playnchill? <span className="form__link"><Link to='/register'>Зарегистрироваться</Link></span>
                </p>
            </form>
        </div>
    );
};

export default Login;
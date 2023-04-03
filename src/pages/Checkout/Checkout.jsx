import React, {useContext} from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
} from '@chakra-ui/react'
import {CustomContext} from "../../utils/Context";


const Checkout = () => {


    return (
        <section className="checkout">
            <div className="container">
                <h2 className="basket__title">Оформление <span className="basket__title-count">заказа</span></h2>
                <div className="checkout__row">
                    <div className="checkout__content">
                        <form className="checkout__form">
                            <p className="checkout__form-title">Способ оплаты</p>
                            <Accordion>
                                <div className="checkout__form-block">
                                    <AccordionItem>
                                        <h2>
                                            <AccordionButton>
                                                <Box as="span" flex='1' textAlign='left'>
                                                    <h5 className="checkout__form-title">Кредитная карта</h5>
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>
                                            <div className="checkout__form-box">
                                                <div className="checkout__form-box-head">
                                                    <p className="checkout__form-title checkout__form-box-title">Информация о карте</p>
                                                </div>
                                                <input required placeholder="Номер карты" type="number" className="checkout__form-input"/>
                                                <div className="checkout__input-box">
                                                    <input required placeholder="Срок действия" type="number" className="checkout__form-input"/>
                                                    <input required maxLength="4" placeholder="CVV" type="password" className="checkout__form-input"/>
                                                </div>
                                                <p className="checkout__form-notif">
                                                    Обязательно: сохранить данный метод для будущих покупок?
                                                </p>
                                                <div className="checkout__labels">
                                                    <label className="checkout__labels-label" htmlFor="firstCheck">
                                                        Да
                                                        <input className="checkout__labels-radio" id="firstCheck" type="radio"/>
                                                    </label>
                                                    <label className="checkout__labels-label" htmlFor="check">
                                                        Нет
                                                        <input className="checkout__labels-radio" id="check" type="radio"/>
                                                    </label>
                                                    <p className="checkout__form-notif">
                                                        При сохранении платёжной информации данный метод платежа будет использоваться по умолчанию для всех покупок в Playnchill, включая покупки в Fortnite, Rocket League, Fall Guys и Playnchill Store. Платёжную информацию можно удалить на данном экране, либо войдя в учётную запись Playnchill и выбрав пункт «Управление платежами» в настройках.
                                                    </p>
                                                </div>
                                            </div>
                                        </AccordionPanel>
                                    </AccordionItem>
                                </div>

                                <div className="checkout__form-block">
                                    <AccordionItem>
                                        <h2>
                                            <AccordionButton>
                                                <Box as="span" flex='1' textAlign='left'>
                                                    <h5 className="checkout__form-title">PayPal</h5>
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>
                                            <div className="checkout__form-box">
                                                <p className="checkout__form-notif">
                                                    Обязательно: сохранить данный метод для будущих покупок?
                                                </p>
                                                <div className="checkout__labels">
                                                    <label className="checkout__labels-label" htmlFor="firstCheck">
                                                        Да
                                                        <input className="checkout__labels-radio" id="firstCheck" type="radio"/>
                                                    </label>
                                                    <label className="checkout__labels-label" htmlFor="check">
                                                        Нет
                                                        <input className="checkout__labels-radio" id="check" type="radio"/>
                                                    </label>
                                                    <p className="checkout__form-notif">
                                                        При сохранении платёжной информации данный метод платежа будет использоваться по умолчанию для всех покупок в Playnchill, включая покупки в Fortnite, Rocket League, Fall Guys и Playnchill. Платёжную информацию можно удалить на данном экране, либо войдя в учётную запись Playnchill и выбрав пункт «Управление платежами» в настройках.
                                                    </p>
                                                </div>
                                                <p className="checkout__form-link">
                                                    Для подтверждения платежа вы будете перенаправлены на сайт PayPal, а затем — снова на сайт Playnchill для завершения покупки.
                                                </p>
                                            </div>
                                        </AccordionPanel>
                                    </AccordionItem>
                                </div>
                            </Accordion>
                        </form>
                    </div>
                    <aside className="checkout__aside">
                        <p className="checkout__aside-title">ОПИСАНИЕ ЗАКАЗА</p>
                        <img src="" alt="" className="checkout__aside-img"/>
                        <h3 className="checkout__aside-gameTitle">Gta</h3>
                        <div className="checkout__aside-prices">
                            <p className="checkout__aside-price">Цена</p>
                            <p className="checkout__aside-price">50$</p>
                        </div>
                        <div className="checkout__aside-prices">
                            <p className="checkout__aside-final">Итого</p>
                            <p className="checkout__aside-finalPrice">50$</p>
                        </div>
                        <div className="checkout__aside-email">
                            <input className="checkout__aside-input" type="checkbox"/>
                            <p className="checkout__aside-sendEmail">
                                Щёлкните здесь, чтобы предоставить ваш адрес электронной почты Rockstar Games. Rockstar Games будет использовать этот адрес в соответствии с политикой конфиденциальности, пожалуйста, ознакомьтесь с ней.
                            </p>
                        </div>
                        <div className="checkout__aside-btns">
                            <p className="checkout__aside-btn-text">
                                Нажимая «Оформить заказ» ниже, я подтверждаю, что мне исполнилось 18 лет, а также то, что я являюсь авторизованным пользователем данного метода оплаты и принимаю условия Лицензионного соглашения.
                            </p>
                            <button className="checkout__aside-btn">ОФОРМИТЬ ЗАКАЗ</button>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    );
};

export default Checkout;
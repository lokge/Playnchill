import React, {useState} from 'react';
import Qiwi from "../../../assets/basket/qiwi.png";
import WebMoney from "../../../assets/basket/webMoney.png";


const BasketPayment = () => {

    const [active, setActive] = useState(false)

    return (
        <li name='checked' onClick={() => setActive(!active)} className={active === true ? "basket__payment-active" : "basket__payment" }>
            <div className="basket__payment-card">
                <label className="basket__payment-label">
                    <span className={`basket__payment-input ${active ? 'active' : ''}`} />

                    <h2 className="basket__payment-title">Электронные кошельки</h2>
                </label>
                <div className="basket__payment-method">
                    <img src={WebMoney} alt="payment method" className="basket__payment-img"/>
                    <img src={Qiwi} alt="payment method" className="basket__payment-img"/>
                </div>
            </div>
        </li>
    );
};

export default BasketPayment;
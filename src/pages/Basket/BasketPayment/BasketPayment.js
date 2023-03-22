// import React, {useState} from 'react';
// import Qiwi from "../../../assets/basket/qiwi.png";
// import WebMoney from "../../../assets/basket/webMoney.png";
//
//
// const BasketPayment = () => {
//
//     const [active, setActive] = useState(false)
//
//     const [checked, setChecked] = useState(false)
//
//     const addPayment = (e) => {
//         e.preventDefault()
//         e.target[1]
//     }
//
//     return (
//         <ul className={active === true ? "basket__payment-active" : "basket__payment" }>
//             <div className="basket__payment-card">
//                 <label htmlFor='checked' className="basket__payment-label">
//                     <input name='checked' onClick={() => setActive(true)} className="basket__payment-input" type="radio"/>
//
//                     <h2 className="basket__payment-title">Электронные кошельки</h2>
//                 </label>
//                 <div className="basket__payment-method">
//                     <img src={WebMoney} alt="payment method" className="basket__payment-img"/>
//                     <img src={Qiwi} alt="payment method" className="basket__payment-img"/>
//                 </div>
//             </div>
//         </ul>
//     );
// };
//
// export default BasketPayment;
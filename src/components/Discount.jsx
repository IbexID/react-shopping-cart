import React from 'react';
import cl from './Discount.module.scss'
const Discount = () => {
    return (
        <form className={cl.discount}>
            <label className={cl.discount__label}> Скидка
                <input className={cl.discount__input} type="num" placeholder='от 0 до 100' />
            </label>
            <div className={cl.discount__buttons}>
            <button className={cl.discount__button}>Установить скидку</button>
            <button className={cl.discount__button}>Убрать скидки</button>
            </div>
        </form>
    );
};

export default Discount;
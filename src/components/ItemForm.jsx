import React from 'react';
import cl from './ItemForm.module.scss'

const ItemForm = (props) => {
    const setGoodsNum = props.setGoodsNum
    const setGoodsName = props.setGoodsName
    const setGoodsPrice = props.setGoodsPrice
    const setMessage = props.setMessage
    return (
        <form className={cl.itemForm}>
            <h4 className={cl.itemForm__title}>Добавить товар</h4>
            <div className={cl.itemForm__inputs}>
                <label className={cl.itemForm__label}> Числовой идентификатор товара
                    <input 
                    type="text" 
                    value={props.goodsNum} 
                    onChange={(e => {
                        console.log(e.target.value)
                        if (e.target.value == Number(e.target.value)){
                            setGoodsNum(e.target.value) 
                        } else {
                            setMessage('Необходимо ввести число')
                        }
                    })}
                    className={cl.itemForm__input} />
                </label>
                <label className={cl.itemForm__label}> Название товара
                    <input 
                    value={props.goodsName} 
                    onChange={(e => setGoodsName(e.target.value) )}
                    type="text" 
                    className={cl.itemForm__input} />
                </label>
                <label className={cl.itemForm__label}> Цена товара
                    <input 
                    value={props.goodsPrice} 
                    onChange={(e => setGoodsPrice(e.target.value) )}
                    type="num" 
                    className={cl.itemForm__input} />
                </label></div>
            <button className={cl.itemForm__button} onClick={(e) => props.createCartItem(e)}>Добавить</button>
            {props.message
            ? <p className={cl.itemForm__message}>{props.message}</p>
            : ''}
        </form>
    );
};

export default ItemForm;
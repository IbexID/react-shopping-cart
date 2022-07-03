import React from 'react';
import cl from './CartList.module.scss'
import CartItem from './CartItem';

const CartList = (props) => {
    let isCartListEmpty = !Object.entries(props.cartItems).length
    
   
    return (
        <div className={cl.cartList}>
            <h4 className={cl.cartList__title}>Список товаров</h4>
            {isCartListEmpty
            ? <p>Список пуст!</p>
            : <CartItem goodsNum={''} goodsName={''} goodsPrice={''} title={true}/>
            /*  */
            }
            {isCartListEmpty
            ? ''
            :
                props.cartItems.map( (item, i) =>{
                
                    return (
                        <CartItem 
                        key={i} 
                        number={i+1} 
                        goodsNum={item.goodsNum} 
                        goodsName={item.goodsName} 
                        goodsPrice={item.goodsPrice} 
                        removeCartItem={props.removeCartItem}
                        discount={props.discount} 
                        setDiscount={props.setDiscount}
                        isDiscountActive={props.isDiscountActive}
                        setIsDiscountActive={props.setIsDiscountActive}/>
                    )
                })
            }
            
        </div>
    );
};

export default CartList;
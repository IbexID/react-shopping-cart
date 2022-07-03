import ItemForm from "./components/ItemForm";
import CartList from "./components/CartList";
import ItemInfo from "./components/ItemInfo";
import {  useEffect, useState } from "react";

function Cart() {
  const [goodsNum, setGoodsNum] = useState('')
  const [goodsName, setGoodsName] = useState('')
  const [goodsPrice, setGoodsPrice] = useState('')
  const [discount, setDiscount] = useState('')
  const [isDiscountActive, setIsDiscountActive] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [message, setMessage] = useState('')

  const createCartItem = (e) =>{
    e.preventDefault();
    const newItem = {
        goodsNum,
        goodsName,
        goodsPrice,
    }
    if (!goodsName.length || !goodsNum.length || !goodsPrice.length){
      setMessage('Заполните все поля')
      setTimeout(() =>{
        setMessage('')
      }, 2000)
      return
    } else {
      setMessage('')
    }
    setCartItems([...cartItems, newItem])
    setGoodsName('');
    setGoodsNum('');
    setGoodsPrice('');
  }

  const removeCartItem = (cartItemGoodsNum, cartItemGoodsName, cartItemGoodsPrice) =>{
    
    setCartItems(cartItems.filter( item => item.goodsNum !== cartItemGoodsNum || item.goodsName !== cartItemGoodsName || item.goodsPrice !== cartItemGoodsPrice))
  }

  useEffect( () =>{
    if(cartItems.length===0){
      setIsDiscountActive(false)
    }
  },[cartItems])

  return (
    <div className="cart">
      <ItemForm 
      goodsNum={goodsNum}
      setGoodsNum={setGoodsNum}
      goodsName={goodsName}
      setGoodsName={setGoodsName}
      goodsPrice={goodsPrice}
      setGoodsPrice={setGoodsPrice}
      createCartItem={createCartItem}
      setMessage={setMessage}
      message={message}
      />
      <div className="cart__info">
      
      <ItemInfo 
      cartItems={cartItems} 
      discount={discount} 
      setDiscount={setDiscount}
      isDiscountActive={isDiscountActive}
      setIsDiscountActive={setIsDiscountActive}
      />
      </div>
    
      <CartList 
      discount={discount} 
      setDiscount={setDiscount}
      isDiscountActive={isDiscountActive}
      setIsDiscountActive={setIsDiscountActive}
      cartItems={cartItems} 
      removeCartItem={removeCartItem}
      />
    </div>
  );
}

export default Cart;

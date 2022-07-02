import ItemForm from "./components/ItemForm";
import CartList from "./components/CartList";
import ItemInfo from "./components/ItemInfo";
import {  useState } from "react";

function Cart() {
  const [goodsNum, setGoodsNum] = useState('')
  const [goodsName, setGoodsName] = useState('')
  const [goodsPrice, setGoodsPrice] = useState('')
  const [cartItems, setCartItems] = useState([])
  const [message, setMessage] = useState('')

  const createCartItem = (e) =>{
    e.preventDefault();
    const newItem = {
        goodsNum,
        goodsName,
        goodsPrice
    }
    if (!goodsName.length || !goodsNum.length || !goodsPrice.length){
      setMessage('Заполните все поля')
      return
    } else {
      setMessage('')
    }
    setCartItems([...cartItems, newItem])
    setGoodsName('');
    setGoodsNum('');
    setGoodsPrice('');
  }

  const removeCartItem = (cartItemGoodsNum) =>{
    
    setCartItems(cartItems.filter( item => item.goodsNum !== cartItemGoodsNum))
  }

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
      
      <ItemInfo cartItems={cartItems}/>
      </div>
    
      <CartList 
      cartItems={cartItems} 
      removeCartItem={removeCartItem}
      />
    </div>
  );
}

export default Cart;

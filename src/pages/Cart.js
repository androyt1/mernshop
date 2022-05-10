import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {removeFromCart,incrementQuantity ,decrementQuantity,clearCart } from '../redux/actions/cart'
import {AiFillDelete} from 'react-icons/ai'
import {GrAdd} from 'react-icons/gr'
import {FiMinusCircle} from 'react-icons/fi'

const Cart = ({ operCart }) => {

  const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const addition=(acc,currentValue)=>{
      return acc + currentValue.count * currentValue.price
  }
  const total=cart.reduce(addition,0)
 

  return (
    <div
      className={`fixed top-[60px] left-0 h-[calc(100vh-60px)] bg-[#fafbfc] w-[70%] md:w-[30%] transition-all duration-500 ease-linear flex flex-col justify-start py-10 items-center overflow-y-auto  ${
        operCart ? "translate-x-0" : "translate-x-[-800px]"
      }`}
    >
      <h4 className="text-xl md:text-2xl font-nunito font-semibold text-slate-900">
        Cart
      </h4>
      <h4 className="text-sm md:text-md mt-2 md:mt-4 font-nunito font-semibold text-slate-900 underline-offset-2">
        {cart.length < 1 && "Cart is Empty"} </h4>
        
        {total > 0 && <h3 className="text-slate-700">Total : <span className="text-xl font-bold">{total} $</span></h3>}

      {cart.length > 0 &&
        cart.map((item) => {
          return (
            <div key={item._id} className="w-full px-3 my-3 border-b-2 border-slate-700 flex justify-between items-center">
              <div className="w-[40%] flex flex-col justify-center items-center ">
              <img src={item.product_image} className="w-32" alt={item.name} />
              <span className="text-xs text-black"> {item.name}</span>
              </div>
             <div className="w-[60%] flex flex-col justify-between items-center ">
            
              <div  className='w-full flex-col flex justify-between items-center py-3 text-slate-600 text-sm '>
                    <div className="w-full flex justify-start items-center px-3">Price: <span className="text-md font-bold">{item.price}</span></div>
                    <div className="w-full flex justify-start items-center px-3">Quantity: <span className="font-bold text-md">{item.count}</span> </div>
                    <div className="w-full flex justify-start items-center px-3">Amount: <span className="font-bold text-md"> {item.price * item.count}</span></div>
              </div>
              <div className='w-full flex justify-between items-center py-1 ' >
               <GrAdd className="text-xl md:text-2xl text-slate-700 cursor-pointer" onClick={()=>{dispatch(incrementQuantity(item._id))}}/>
                <AiFillDelete className="text-xl md:text-2xl text-red-700 cursor-pointer" onClick={()=>{dispatch(removeFromCart(item._id))}}/>
               <FiMinusCircle className="text-xl md:text-2xl text-slate-700 cursor-pointer"  onClick={()=>{
                  if(item.count > 1){
                    dispatch(decrementQuantity(item._id))
                  }else{
                    dispatch(removeFromCart(item._id))
                  }
                }}/>
              </div>
             </div>
            </div>
          );
        })}
    </div>  
  );
};

export default Cart;

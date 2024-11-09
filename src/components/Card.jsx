import React, {useState, useEffect, useRef} from "react";
import pizza from "../assets/pizza.jpg"
import {useCart, useDispatchCart} from './ContextReducer'

const Card = (props) => {

  let dispatch = useDispatchCart();
  let data = useCart();
  const priceRef = useRef();
  let options = props.options;
  let priceOptions = Object.keys(options);
  let foodItem = props.foodItems

  const [quantity,setQuantity] = useState(1);
  const [size, setSize] = useState("")
  let finalPrice = quantity * parseInt(options[size])

  const handleAddToCart = async () => {
    console.log("q")
    let food = []
    for (const item of data) {
      if (item.id === foodItem._id) {
        food = item;

        break;
      }
    }
    if (food != []) {
      if (food.size === size) {
        await dispatch({ type: "UPDATE", id: foodItem._id, price: finalPrice, quantity: quantity })
        return
      }
      else if (food.size !== size) {
        await dispatch({ type: "ADD", id: foodItem._id, name: foodItem.name, price: finalPrice, quantity: quantity, size: size,img: foodItem.img })
        console.log("Size different so simply ADD one more to the list")
        return
      }
      return
    }


    await dispatch({type:"ADD", id:foodItem._id, img:foodItem.img, name:foodItem.name, price:finalPrice, quantity: quantity, size: size})

  }

  useEffect(() => {
    setSize(priceRef.current.value)
  }, [])


  
  return (
    <div className="card mt-3" style={{ width: "16rem", maxHeight:"360px" }}>
      <img src={foodItem.img} className="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }}/>
      <div className="card-body">
        <h5 className="card-title">{foodItem.name}</h5>
        
        {/* <p className="card-text">
          {foodItem.description}
        </p> */}
        <div className="container w-100">
          <select className="rounded m-2" onChange={(e)=>setQuantity(e.target.value)}>
            {Array.from({ length: 6 }, (e, i) => (
              <option key={i} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
          <select className="rounded m-2" ref={priceRef} onChange={(e)=>setSize(e.target.value)}>
            {priceOptions.map((data)=>{
              return(
                <option key={data} value={data}>{data}</option>
              )
            })}
          </select>

          <div className="d-inline fw-bold">₹{finalPrice}</div>
        </div>
        <hr/>
          <button className={`btn btn-success justify-center ms-2 `} onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Card;

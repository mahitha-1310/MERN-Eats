import React from 'react'
import {useCart, useDispatchCart} from '../components/ContextReducer'
import DeleteIcon from '@mui/icons-material/Delete';


const Cart = () => {
    let data = useCart();
    let dispatch = useDispatchCart();
    console.log(data)
    if (data.length === 0) {
        return (
          <div>
            <div className='m-5 w-100 text-center fs-3'>The Cart is Empty!</div>
          </div>
        )
      }

    const handleCheckOut = () => {
        
    }

    let totalPrice = data.reduce((total, food) => total + food.price, 0)
  return (
    <div>
    <div className='container m-auto mt-5 table-responsive  table-responsive-sm table-responsive-md' >
      <table className='table table-hover '>
        <thead className='text-success fs-4'>
          <tr>
            <th scope='col' className="text-success" >#</th>
            <th scope='col' className="text-success">Name</th>
            <th scope='col' className="text-success">Quantity</th>
            <th scope='col' className="text-success">Option</th>
            <th scope='col' className="text-success">Amount</th>
            <th scope='col' className="text-success"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((food, index) => (
            <tr key={index}>
              <th scope='row' >{index + 1}</th>
              <td >{food.name}</td>
              <td>{food.quantity}</td>
              <td>{food.size}</td>
              <td>{food.price}</td>
              <td ><button type="button" className="btn p-0"><DeleteIcon onClick={() => { dispatch({ type: "REMOVE", index: index }) }} /></button> </td></tr>
          ))}
        </tbody>
      </table>
      <div><h1 className='fs-2'>Total Price: {totalPrice}/-</h1></div>
      <div>
        <button className='btn bg-success mt-5 ' onClick={handleCheckOut} > Check Out </button>
      </div>
    </div>



  </div>
  )
}

export default Cart
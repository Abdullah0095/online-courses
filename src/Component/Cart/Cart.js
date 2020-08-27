import React from 'react';

const Cart = (props) => {
    const cart = props.cart;

const total = cart.reduce((total, last) => total + last.price, 0);
const totalPrice = (total).toFixed(2)

    return (
        <div>
                <h1>Course Enrollment</h1>
                <h3>Enrolled Courses: {cart.length}</h3>
                <p>total price: ${totalPrice}</p>
                
        </div>
    );
};

export default Cart;
import React from 'react'

const Cart = (props) => {
    if (props.cartdata.length !== 0) {
        return (
            <div>
                {
                    props.cartdata.map((value, index) =>
                        <div className="cardstyle childelement">
                            <div classname="childelement">
                                <p className="childelementname">{value.name}</p>
                                <p className="childelementprice">₹{value.price}</p>
                                <p className="childelementdiscription">{value.description}</p>
                                <button className="childelementbutton" onClick={() => props.deleteItem(value)}>Remove</button>
                            </div>
                            <div className="childelementimage">
                                <img alt="" src={value.image} />
                            </div>
                        </div>
                    )
                }
                <div className="cartfooter">
                <button className="childelementbutton" onClick={props.clearCart}>Place Order</button>
                </div>
            </div>
        )
    } else {
        return (
            <div className="carthead">Cart is empty</div>
        )
    }
}

export default Cart

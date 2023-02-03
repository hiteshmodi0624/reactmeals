import React, { useContext } from "react";
import cartContext from "../../store/Cart-context";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./Cart.module.css"
import CartItem from "./CartItem/CartItem";

const Cart=(props)=>{
    const ctx=useContext(cartContext);
    return (
        <Card className={classes.Card}>
            <div className={classes.Items}>
                {ctx.items.map((item)=>{
                    return(<CartItem id={item.id} name={item.name} price={item.price} amount={item.amount} key={item.id}/>)
                })}
            </div>
            <div className={classes.total}>
                <h2>Total Amount</h2>
                <h2>₹{ctx.totalAmount.toFixed(2)}</h2>
            </div>
            <div className={classes.CartButtons}>
                <Button className={classes.Button}  onClick={()=>{console.log("ordering...")}}>Order</Button>
                <Button className={`${classes.Button} ${classes.close}`} onClick={()=>props.CartState()}>Close</Button>
            </div>
        </Card>
    )
}
export default Cart
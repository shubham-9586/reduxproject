import React from 'react'

import {useDispatch} from 'react-redux';
 
import {actionCreators} from './state/index'

import {bindActionCreators}  from 'redux';

function Shop() {
     const dispatch = useDispatch()
     const {withdrawMoney,depositMoney}=bindActionCreators(actionCreators,dispatch);
    return (
        <div className="container">
            <button className="btn-primary mx-1" onClick={()=>{withdrawMoney(100)}}>-</button>
           update Money
            <button className="btn-primary mx-1" onClick={()=>{depositMoney(100)}}>+</button>
        </div>
    )
}

export default Shop

import React from 'react'
import { Link } from 'react-router-dom'


const ProductBox = (props) => {

    
    var a = Number(props.price)
    var b = Number(props.discountPercentage)
    var discount = a - ((a * b)/ 100)

    return (
        <div className='post-box'>
            <Link to={`/products/${props.id}`}><h2>{props.title}</h2></Link>
            <p>Brand: {props.brand}</p>
            <p>Price: {props.price} $</p>
            <p>In stock: {props.stock}</p>
            <p>discountPercentage: {props.discountPercentage} %</p>
            <p>New Price: {discount}  $</p>
            <Link to={`/${props.id}/edit`}><h2><button>Edit</button></h2></Link>
            <img src={props.thumbnail} alt="" />
            
        </div>
    )
    }

export default ProductBox;

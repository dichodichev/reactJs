import React from 'react'
import { Link } from 'react-router-dom'


const ProductBox = (props) => {

    
    let discount = () =>{
        let a = Number(props.price)
        let b = Number(props.discountPercentage)
        return a - ((a * b)/ 100)
    }

    let discountPrice = discount();

    return (
        <div className='post-box'>
            <Link to={`/products/${props.id}`}><h2>{props.title}</h2></Link>
            <p>Brand: {props.brand}</p>
            <p>Price: {props.price} $</p>
            <p>In stock: {props.stock}</p>
            <p>discountPercentage: {props.discountPercentage} %</p>
            <p>New Price: {discountPrice}  $</p>
            <Link to={`/${props.id}/edit`}><h2><button>Edit</button></h2></Link>
            <img src={props.thumbnail} alt="" />
            
        </div>
    )
    }

export default ProductBox;

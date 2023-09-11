import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router';
import { routes } from '../utils/constants';
import DeleteModal from './DeleteModal';

const ProductPage = () => {

    const params = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState([]);
    const [ isActive, setIsActive ] = useState(false);



    useEffect(() => {
        fetchData();
        // eslint-disable-next-line
    }, [])


    const fetchData = async () => {
        try {
            const response = await fetch(`https://dummyjson.com/products/${params.productId}`)
            if(!response.ok) {
                throw new Error('Response issue!')
            }
            const data = await response.json();
            setProduct(data);
        } catch (error) {
            console.log(error)
        }
    }   
    let a = Number(product.price)
    let b = Number(product.discountPercentage)
    let discount = a - ((a * b)/ 100)


    const onDelete = () => {
        fetch(`https://dummyjson.com/products/${params.productId}`, {
    method: 'DELETE',
    });
            setIsActive(!isActive)
            navigate(routes.HOME.path);
        }

        const isVisibleModal = () => {
            setIsActive(!isActive)
        }
        
    return (
            <>
            <div className='main-box' key={product.id} >
                    <h3>Name: {product.title}</h3>
                    <p> Category: {product.category}</p>
                    <p>In Stock: {product.stock}</p>
                    <p>Brand: {product.brand}</p>
                    <p>Rating: {product.rating}</p>
                    <p>Decription: {product.description}</p>
                    <img src={product.thumbnail} alt=''></img>
                    <p>Price {product.price} $</p>                                
                    <p> Discount: {product.discountPercentage} %</p>
                    <p>Final PRICE: {discount} $</p>
                    <hr/>
                </div>
                
                <div>
                    <button onClick={isVisibleModal}>Delete</button>
                </div>
                
                {isActive && ( <DeleteModal
                userId={product.productId}
                isVisible={isVisibleModal}
                onDelete={onDelete}
                />)}
                </>
    )
}

export default ProductPage;

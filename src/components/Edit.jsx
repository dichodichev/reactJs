import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router';
import { routes } from '../utils/constants';
import DeleteModal from './DeleteModal';

const Edit = () => {

    const params = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState([]);
    const [ isActive, setIsActive ] = useState(false);
    const [isEdit, setIsEdit] = useState(
        params.productId  ? true : false );



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
        const editProduct = () => {
            try {
                // eslint-disable-next-line
                const response = fetch(`https://dummyjson.com/products/${params.productId}`, {
                    method: 'PUT',
                    body: JSON.stringify({
                    title: product.title,
                    price: product.price
                    }),
                    headers: { 'Content-Type': 'application/json' }
                })

            } catch (error) {
                console.log(error)
                
            }
            finally {
                setIsEdit(!isEdit)
            }
        }

        const onChangeInput = (e) => {
            const { name, value } = e.target;
            setProduct((prevState) => ({...prevState, [name]: value}));
        }


    return (
            <>
                {isEdit  
            ?    <div>
                    <input type="text" value={product.title} name='title' onChange={onChangeInput}/>
                    <input type="number" value={product.price} name='price' onChange={onChangeInput}/>
                </div>
            :   <div key={product.id} >
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
                </div> }
                {isEdit
                ?
                <div>
                    <button onClick={editProduct}>Complete Edit</button>
                    <button onClick={isVisibleModal}>Delete</button>
                </div>
                :
                <button onClick={isVisibleModal}>Delete</button>
                }
                {isActive && ( <DeleteModal
                userId={product.productId}
                isVisible={isVisibleModal}
                onDelete={onDelete}
                />)}
            </>
    )
}

export default Edit;

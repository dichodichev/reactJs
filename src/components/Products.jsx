import React, { useEffect, useState } from 'react'
import ProductBox from './ProductBox';

const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchData();
    }, [])


    const fetchData = async () => {
        try {
            const response = await fetch('https://dummyjson.com/products')
            if(!response.ok) {
                throw new Error('Response issue!')
            }
            const data = await response.json();
            setProducts(data.products);
        } catch (error) {
            console.log(error)
        }
    }   
    
    
    //console.log(products)

    return (
        <div className='posts-container'>
                {products.map((product) => {
                    return(
                        <ProductBox
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            brand={product.brand}
                            price={product.price}
                            thumbnail={product.thumbnail}
                            stock={product.stock}
                            discountPercentage={product.discountPercentage}
                        />
                    )
                })}
        </div>
    )
}

export default Products;

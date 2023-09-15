import React, { useState } from 'react'

const CreatePage = () => {

    const [newProduct, setNewProduct] = useState({
        title: '',
    });

    const addNewPost = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://dummyjson.com/products/add', {
                method: 'POST',
                body: JSON.stringify({
                title: newProduct.title,
                }),
                headers: { 'Content-Type': 'application/json' }
            })
            const data = await response.json();
            console.log(`new post ${data}`)
            window.alert(`New product has been created: ${JSON.stringify(data)}`)
        } catch (error) {
            console.log(error)
        }
    }
    const onChangeInput = (e) => {
        const { name, value } = e.target;
        setNewProduct((prevState) => ({...prevState, [name]: value}));
    }


    return (
        <form className='create-page' onSubmit={addNewPost}>
            
            <input type="text" placeholder='create new title' name='title' value={newProduct.title} onChange={onChangeInput}/>
            <button className='btn-add'>Add</button>
        </form>
    )
}

export default CreatePage;

import React from 'react'

const Home = () => {
    return (
        <div className='home-container'>
            <header>
                <h1>Welcome to my Shop!</h1>
            </header>
            <footer>
                <h3>My project from { new Date().getFullYear()}</h3>
            </footer>
        </div>
    )
    }

export default Home;

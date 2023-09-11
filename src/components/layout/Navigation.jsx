import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../../utils/constants'

const Navigation = () => {
    return (
        <nav className='nav'>
            <ul>
                {Object.values(routes)
                .filter((el) => el.isVisibleNavigation)
                .map((route) => 
                    <li key={route.name}>
                        <Link to={route.path} >{route.name}</Link>
                    </li>
                    )}
            </ul>
        </nav>
    )
}

export default Navigation

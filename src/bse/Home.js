import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
    return (
        <div className='home'>
            <h1>BSE-STOCKS</h1>
            <ul className='nav nav-pills nav-fill'>
                <li className='nav-item'>
                    <NavLink className='nav-link bg-primary text-white' to='/trending'><span className='mainHeadings'>Trending Stocks</span></NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink className='nav-link bg-success text-white' to='/gainers'><span className='mainHeadings'>Top Gainers</span></NavLink>
                </li>

                <li className='nav-item'>
                    <NavLink className='nav-link bg-danger text-white' to='/losers'><span className='mainHeadings'>Top Losers</span></NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Home

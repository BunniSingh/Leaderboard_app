import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <header className="header-container">
            <h1 className="header-heading">Dynamic Leaderboard</h1>
            <p className="text-gray-600">Claim points for users and watch the rankings change in real-time!</p>
        </header>
    )
}

export default Header
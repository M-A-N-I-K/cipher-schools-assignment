import React from 'react'
import "../Styles/Utils/FollowCard.scss"
const FollowCard = () => {
    return (
        <div className='follow-card'>
            <div className='user-info'>
                <img src='https://d3gmywgj71m21w.cloudfront.net/afbe5cca6cc698f5e677a961ce7ae47f' className='logo' alt='Logo' />
                <div className='username'>
                    <p>@Username</p>
                    <p>Name</p>
                </div>
            </div>
            <button className='follow-btn'>
                <span>+</span>
                <p>Follow</p>
            </button>
        </div>
    )
}

export default FollowCard

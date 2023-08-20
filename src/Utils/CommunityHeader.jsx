import React from 'react'
import "../Styles/Utils/CommunityHeader.scss"

const CommunityHeader = ({ showSvg, communityName, communityMembers }) => {
    return (
        <div className='feed-header'>
            <div className='community'>
                <div className="icon"></div>
                <div className='community-name'>
                    <h1>{communityName}</h1>
                    <p>{communityMembers} Members</p>
                </div>
            </div>
            <div className='btn'>
                <button className='follow-btn'>
                    <span>+</span>
                    <p>Join</p>
                </button>
                {showSvg &&
                    <svg viewBox="0 0 24 24" height="24px" width="24px" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 12H12.01M12 6H12.01M12 18H12.01M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12ZM13 18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17C12.5523 17 13 17.4477 13 18ZM13 6C13 6.55228 12.5523 7 12 7C11.4477 7 11 6.55228 11 6C11 5.44772 11.4477 5 12 5C12.5523 5 13 5.44772 13 6Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                }
            </div>
        </div>
    )
}

export default CommunityHeader

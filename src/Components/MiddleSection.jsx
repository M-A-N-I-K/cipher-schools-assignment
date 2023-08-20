import React from 'react'
import CommunityHeader from '../Utils/CommunityHeader'
import "../Styles/Components/MiddleSection.scss"
import PostCard from '../Utils/PostCard'
const MiddleSection = () => {
    return (
        <section className='feed'>
            <CommunityHeader communityName={"DSA Community"} communityMembers={90} showSvg={true} />
            <div className='posts-announcements'>
                <div>Posts</div>
                <div>Announcements</div>
            </div>
            <div className='posts'>
                <PostCard />
                <PostCard />
                <PostCard />
            </div>
        </section>
    )
}

export default MiddleSection

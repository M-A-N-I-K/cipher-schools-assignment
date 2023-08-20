import React from 'react'
import CommunityHeader from "../Utils/CommunityHeader"
import "../Styles/Components/RightSection.scss"

const RightSection = () => {
    return (
        <section className='search-communities'>
            <input type="text" placeholder='Search' />
            <h3>Popular Communities</h3>
            <CommunityHeader communityName={"DSA Community"} communityMembers={90} showSvg={false} />
            <CommunityHeader communityName={"DSA Wizards"} communityMembers={11} showSvg={false} />
            <CommunityHeader communityName={"Meme"} communityMembers={9} showSvg={false} />
            <CommunityHeader communityName={"Tech Bird"} communityMembers={3} showSvg={false} />
        </section>
    )
}

export default RightSection

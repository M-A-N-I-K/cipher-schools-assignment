import React from 'react'
import ProfileCard from '../Utils/ProfileCard'
import Navbar from '../Utils/Navbar'
import SuggestionList from '../Utils/SuggestionList'
import "../Styles/Components/LeftSection.scss"

const LeftSection = () => {
    return (
        <section className='left-section'>
            <ProfileCard />
            <Navbar />
            <SuggestionList />
        </section>
    )
}

export default LeftSection

import React from 'react'
import Header from '../Components/Header'
import LeftSection from '../Components/LeftSection'
import MiddleSection from '../Components/MiddleSection'
import RightSection from '../Components/RightSection'
import "../Styles/Pages/Home.scss"

const Home = () => {
    return (
        <>
            <Header />
            <div className='body'>
                <LeftSection />
                <MiddleSection />
                <RightSection />
            </div>
        </>
    )
}

export default Home

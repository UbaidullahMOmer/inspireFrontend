import React from 'react'
import HeroSection from '../../components/homeComponents/HeroSection'
import Achivements from '../../components/homeComponents/Achivements'
import OurInspiration from '../../components/homeComponents/OurInspiration'
import ProductImgSection from '../../components/homeComponents/ProductImgSection'
import MainProductSection from '../../components/homeComponents/MainProductSection'
import FaqSection from '../../components/homeComponents/FaqSection'

import './Home.css'
import ReviewSection from '../../components/homeComponents/ReviewSection'

const Home = () => {
    return (
        <>
            <HeroSection />
            <Achivements />
            <OurInspiration />
            <ProductImgSection />
            <MainProductSection />
            <ReviewSection />
            <FaqSection />
        </>
    )
}

export default Home;
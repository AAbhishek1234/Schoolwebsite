import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import WhyChoose from '../components/WhyChoose'
import SchoolExcellence from '../components/SchoolExcellence'
import OurPrograms from '../components/OurPrograms'
import LearningOutcomes from '../components/LearningOutcomes'
import StudentClub from '../components/StudentClub'
import AboutUs from '../components/AboutUs'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'
function Home() {
  return (
    <>
    
<Navbar></Navbar>
    <Banner></Banner>
    <WhyChoose></WhyChoose>
    <SchoolExcellence></SchoolExcellence>
    <OurPrograms></OurPrograms>
    <LearningOutcomes></LearningOutcomes>
    <StudentClub></StudentClub>
    <AboutUs></AboutUs>
    <Testimonials></Testimonials>
    <Footer></Footer>
    </>
  )
}

export default Home
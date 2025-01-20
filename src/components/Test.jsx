import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
function Test() {
  return (
    <>
    <div className='along' >
    <h1>hlw this is test series </h1>
    <h2>this is topic of lazy loading </h2>
    <p>now checking this </p>
    <LazyLoadImage alt='student'  src="/Images/young-student.jpg" effect='blur' className='cd' style={{height:"30rem",width:"40rem"}}/>
    </div>
    
    </>
  )
}

export default Test
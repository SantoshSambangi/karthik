import React from 'react'
import AboutDummyData from '../../components/dummyData/AboutDummyData'
import AboutIndex from '../../components/Gallery/AboutIndex'

const About = () => {
  return (
    <div>
        {AboutDummyData && AboutDummyData.map((item,index)=>
            <AboutIndex key={index}

            Imgsk={item.imageOne}

            />
        )}
    </div>
  )
}

export default About
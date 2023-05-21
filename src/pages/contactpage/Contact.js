import React from 'react'
import AboutDummyData from '../../components/dummyData/AboutDummyData'
import AboutIndex from '../../components/Gallery/AboutIndex'

const Contact = () => {
  return (
    <div>
        <div>
            {AboutDummyData && AboutDummyData.map((item,index)=>
                <AboutIndex key={index}
                MyImage={item.imageOne}
                />
            )}
        </div>

    </div>
  )
}

export default Contact
import React from 'react';

import DummyData from '../components/dummyData/dummyData';
import PhotoCard from '../components/Gallery';


const Photo = () => {
  return (<div>

        {DummyData && DummyData.map((item,index)=>
            <div key={index}>
                <PhotoCard
                image1={item.GalleryImg}/>
            </div>
        )}

  </div>)
}

export default Photo
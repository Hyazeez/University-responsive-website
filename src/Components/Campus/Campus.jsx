import './Campus.css';
import React from 'react'
import pic1 from '../../assets/images/uni-5.jpg';
import pic2 from '../../assets/images/uni-6.jpg';
import pic3 from '../../assets/images/uni-7.jpg';
import pic4 from '../../assets/images/uni-8.jpg';
import forwardarrow from '../../assets/next.png';

const Campus = () => {
  return (
    <div className='university'>
        <div className='gallery'>
            <img src={pic1} alt='uni-pic1'/>
            <img src={pic2} alt='uni-pic2'/>
            <img src={pic3} alt='uni-pic3'/>
            <img src={pic4} alt='uni-pic4'/>
        </div>
        <button className='setbtn'>See More Here<img src={forwardarrow} alt='forward-arrow'/></button>
    </div>
  )
}

export default Campus
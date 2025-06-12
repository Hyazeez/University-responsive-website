import React from 'react'
import './Programs.css';
import img1 from '../../assets/images/uni-2.jpg';
import img2 from '../../assets/images/uni-3.jpg';
import img3 from '../../assets/images/uni-4.jpg';
import education from '../../assets/images/education.png';

const Programs = () => {
  return (
    <div className='programs'>
      <div className="programs-info">
        <img src={img1} alt='image1'/>
        <div className="caption">
          <img src={education} alt='degree'/>
          <p>Graduation Degree</p>
        </div>
      </div>
      <div className="programs-info">
        <img src={img2} alt='image2'/>
        <div className="caption">
          <img src={education} alt='degree'/>
          <p>Masters Degree</p>
        </div>
      </div>
      <div className="programs-info">
        <img src={img3} alt='image3'/>
        <div className="caption">
          <img src={education} alt='degree'/>
          <p>Post Graduation Degree</p>
        </div>
      </div>
    </div>
  )
}

export default Programs
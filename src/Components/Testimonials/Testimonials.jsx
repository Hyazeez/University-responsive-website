import React, { useState, useEffect, useRef } from 'react';
import './Testimonials.css';
import backIcon from '../../assets/back_icon.png';
import nextIcon from '../../assets/next_icon.png';

const testimonialsData = [
  {
    img: 'https://randomuser.me/api/portraits/men/32.jpg',
    name: 'William Jackson',
    institute: 'FutureEdge University, USA',
    text: 'Studying at FutureEdge University has been a transformative experience. The faculty is supportive, the curriculum is up-to-date, and the campus environment encourages growth. I feel well-prepared for my future career thanks to the resources and opportunities provided here.'
  },
  {
    img: 'https://randomuser.me/api/portraits/women/44.jpg',
    name: 'Sophia Lee',
    institute: 'FutureEdge University, USA',
    text: 'Learning at FutureEdge University has exceeded my expectations. The professors are knowledgeable and approachable, and the diverse student body made my learning experience richer and more enjoyable. I truly appreciate the innovative teaching methods and the focus on real-world skills.'
  },
  {
    img: 'https://randomuser.me/api/portraits/men/65.jpg',
    name: 'Carlos Martinez',
    institute: 'FutureEdge University, USA',
    text: "At FutureEdge University, I was able to work on real-world projects and internships that prepared me for the tech industry. The support from the career center was invaluable in landing my first job. The university's commitment to student success is truly impressive."
  },
  {
    img: 'https://randomuser.me/api/portraits/women/68.jpg',
    name: 'Aisha Khan',
    institute: 'FutureEdge University, USA',
    text: 'FutureEdge University provided a multicultural environment where I learned from peers around the world. The campus facilities are top-notch and the extracurricular activities helped me grow as a leader. I am grateful for the opportunities and support I received here.'
  },
  {
    img: 'https://randomuser.me/api/portraits/men/21.jpg',
    name: 'Liam O’Connor',
    institute: 'FutureEdge University, USA',
    text: 'FutureEdge University’s focus on research and innovation inspired me to pursue my passion for science. The mentorship I received from faculty members was instrumental in my academic journey. I highly recommend FutureEdge to anyone seeking a world-class education.'
  }
];

export const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const total = testimonialsData.length;
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);

  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % total);
  };

  const prevTestimonial = () => {
    setCurrent((prev) => (prev - 1 + total) % total);
  };

  useEffect(() => {
    startAutoSlide();
    return stopAutoSlide;
  }, []);

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 5000);
  };

  const stopAutoSlide = () => {
    clearInterval(intervalRef.current);
  };

  const handleMouseEnter = () => stopAutoSlide();
  const handleMouseLeave = () => startAutoSlide();

  const { img, name, institute, text } = testimonialsData[current];

  return (
    <div
      className='testimonials'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={sliderRef}
    >
      <img src={backIcon} alt='Back' className='back-btn' onClick={prevTestimonial} />
      <div className="slider fade">
        <div className="slide">
          <div className="user-info">
            <img src={img} alt={name} />
            <div>
              <h3>{name}</h3>
              <span>{institute}</span>
            </div>
          </div>
          <p>"{text}"</p>
        </div>
      </div>
      <img src={nextIcon} alt='Next' className='next-btn' onClick={nextTestimonial} />

      <div className="dots">
        {testimonialsData.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === current ? 'active' : ''}`}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
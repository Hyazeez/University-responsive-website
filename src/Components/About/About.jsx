import './About.css';
import Playbutton from '../../assets/images/play-button.png';
import Aboutimg from '../../assets/images/graduation.jpg';
import Videoplayer from '../Videoplayer/Videoplayer';

const About = ({setPlayState}) => {

  return (
    <div className="about">
      <div className="about-left">
        <img src={Aboutimg} alt="graduation" />
        <img
          src={Playbutton}
          alt="play-button"
          className="play-icon"
          role="button"
          onClick={()=>{setPlayState(true)}}
          tabIndex={0}
        />
      </div>

      <div className="about-right">
        <h2>ABOUT UNIVERSITY</h2>
        <p>
          Our university stands as a beacon of academic excellence, innovation, and community engagement. Established with the mission to empower students through quality education, we offer a diverse range of programs designed to foster intellectual growth and professional development. Our faculty comprises experienced educators and industry experts who are dedicated to nurturing curiosity and critical thinking. The campus is equipped with state-of-the-art facilities, modern laboratories, and extensive libraries to support both learning and research. We believe in holistic development, encouraging students to participate in extracurricular activities, sports, and community service. Our vibrant student community represents a rich tapestry of cultures and backgrounds, creating an inclusive environment where everyone can thrive. Through partnerships with leading organizations and a strong alumni network, we provide students with valuable opportunities for internships, research, and career advancement. At our university, we are committed to shaping future leaders who are not only knowledgeable but also socially responsible and globally aware. Join us to embark on a transformative educational journey that will prepare you to make a meaningful impact in the world.
        </p>
      </div>
    </div>
  );
};

export default About;

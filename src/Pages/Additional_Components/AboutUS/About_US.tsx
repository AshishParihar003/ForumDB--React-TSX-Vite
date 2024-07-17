import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import profileimage from "../../../assets/pr01.png"; 
import about_us from "../../../assets/about_us.jpg";
import "./Aboutus.css"

export default function AboutUs() {
  useEffect(() => {
    AOS.init({
      duration: 650, // Global duration for all animations
      once: true, // Whether animation needs to be executed only once
    });

    // Add scroll event listener
    const handleScroll = () => {
      const animatedText = document.querySelectorAll('.animated-text');
      animatedText.forEach(text => {
        const textTop = text.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (textTop < windowHeight * 0.8) {
          text.classList.add('fade-in-up');
        } else {
          text.classList.remove('fade-in-up');
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="container mx-auto py-8">
      <div className="grid md:grid-cols-3 gap-4">
        {/* Profile image on the left side */}
        <div className="md:col-span-1">
          <img src={profileimage} alt="Profile" className="w-full h-auto" />
        </div>

        {/* About us image and text on the right side */}
        <div className="md:col-span-2">
          <img src={about_us} alt="About Us" className="w-full h-auto mb-4" data-aos="fade-left" />
          <div data-aos="fade-left">
            <p className="text-xl font-cursive leading-relaxed animated-text">
              <strong>Dear Students,</strong>
            </p>
            <p className="font-bold animated-text">
            It is with great pleasure that I extend a warm welcome to each and every one of you to ForumDE - your gateway to a world of opportunities in the realm of Information Technology.
            In an age where technology is evolving at an unprecedented pace, the demand for skilled IT professionals has never been higher. We are into providing industry level IT training to the students in the most latest technologies now-a-days like Cloud(Azure,AWS,GCP),Data Engineering,Data Science,Docker and Kubernetes,Data Visualization,Business Analyst,Project Management. At ForumDE, we understand the importance of staying ahead of the curve, constantly adapting, and honing our skills to meet the dynamic needs of the industry.
            </p>
            <p className="font-bold animated-text">
            As you embark on your journey towards a fulfilling career in IT, I encourage you to make the most of the resources and opportunities available here at ForumDE. Whether you are a professional looking to take your career to the next level or a fresh graduate eager to make your mark in the industry, our platform offers a wealth of resources, networking opportunities, and expert guidance to support you every step of the way.
            On behalf of the entire ForumDE team, I wish you the very best in your pursuit of a rewarding and fulfilling career in Information Technology. Together, let us shape the future of technology and create a brighter tomorrow for generations to come.
            </p>
            <p className="text-lg animated-text">
              Best Regards, <br />
              Arun Kumar
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

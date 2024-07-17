import { useEffect } from 'react';
import certificateimg from "../../assets/certificate.jpeg";
import certiheader from "../../assets/certificateheader.jpg";

export default function MyCertificate() {
  useEffect(() => {
    const handleScroll = () => {
      const animatedText = document.querySelectorAll('.animated-text');
      const windowHeight = window.innerHeight;
      animatedText.forEach(text => {
        const textTop = text.getBoundingClientRect().top;
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
    <div data-aos="fade-up" data-aos-delay="500" className="container mx-auto my-5 p-4">
        <img src={certiheader} alt="Certificate Header" className="w-full h-auto my-4" />
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left px-4">
          <p className="animated-text text-3xl md:text-4xl italic font-extrabold mt-4">
            Certificate of Achievement
          </p>
          <br />
          <p className="animated-text font-bold mt-2">
            Congratulations on completing the Azure Data Constellation: Engineering the Future course! A course completion certificate will be given to student on completion of 60% of course. This certificate will enhance your LinkedIn Profile and help you in grabbing a good job. Best wishes for your future endeavors.
          </p>
          <br />
          <p className="animated-text text-2xl md:text-3xl mt-4">
            Best Regards, <br />
            Arun Kumar
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center px-4">
          <img src={certificateimg} className="w-full max-w-xs md:max-w-lg" alt="Certificate" />
        </div>
      </div>
    </div>
  );
}

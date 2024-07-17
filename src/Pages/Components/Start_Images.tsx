import { useState, useEffect } from 'react';
import 'aos/dist/aos.css';
import pic1 from "../../assets/Top_ImageSlider/Start_01.png";


export default function ImageCarousel() {
    
    const images = [pic1]; 

    // State to keep track of current image index
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
           
            setCurrentImage(prev => (prev + 1) % images.length);
        }, 10000); // Change image every 10 seconds

        return () => clearInterval(interval); // Cleanup the interval on component unmount
    }, [images.length]);

    return (
        <div className="relative pt-5 overflow-hidden max-h-fit w-full" data-aos="fade-left" data-aos-duration="650">
            <img src={images[currentImage]} className="h-auto w-full object-cover" alt="Sliding Image" />
        </div>
    );
}

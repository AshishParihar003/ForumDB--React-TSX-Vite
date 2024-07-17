import React, { useRef, RefObject } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Azure from "../../assets/courses/Azure.jpg";
import Python from "../../assets/courses/Python.jpg";
import SQL from "../../assets/courses/SQL.jpg";
import DataScience from "../../assets/courses/Data Science.jpg";
import 'aos/dist/aos.css';
import AOS from 'aos';
import '@fortawesome/fontawesome-free/css/all.min.css';
import CourseImage from "../../assets/courses.png"

AOS.init();

interface Course {
  id: number;
  image: string;
  title: string;
  description: string;
  duration: string;
  fee: string;
  startDate: string;
  registration: string;
  paymentLink: string;
}

const courses: Course[] = [
  {
    id: 1,
    image: Azure,
    title: "Azure Data Engineering",
    description: "Job Assistance || Real-Time Projects || Assignments || Live classes || Recordings",
    duration: "3 Months",
    fee: "Rs 19,999/-",
    startDate: "Starts from 1st June 2024",
    registration: "Registrations Open",
    paymentLink: "https://rzp.io/l/RwigF3Ds9"
  },
  {
    id: 2,
    image: Python,
    title: "Python Programming",
    description: "Python from zero to hero course || Hands-On Training || Assignments || Recordings",
    duration: "2 Months",
    fee: "Rs 4,999/-",
    startDate: "New Batch starting soon",
    registration: "Registration Open",
    paymentLink: "https://rzp.io/l/yOT3UZjG"
  },
  {
    id: 3,
    image: SQL,
    title: "Master In SQL",
    description: "Explore the Power of SQL || Ticket to fast-track growth in data science || Recordings",
    duration: "2 Months",
    fee: "Rs 4,999/-",
    startDate: "New Batch starting soon",
    registration: "Registration Open",
    paymentLink: "https://rzp.io/l/o0ATyl4"
  },
  {
    id: 4,
    image: DataScience,
    title: "Data Science Program",
    description: "Job Assistance || Ticket to fast-track growth in data science || Recordings",
    duration: "3 Months",
    fee: "Rs 19,999/-",
    startDate: "New Batch starting soon",
    registration: "Registration Open",
    paymentLink: "https://rzp.io/l/f4iP34VN"
  }
];

interface CustomButtonGroupProps {
  next: () => void;
  previous: () => void;
}

const CustomButtonGroup: React.FC<CustomButtonGroupProps> = ({ next, previous }) => {
  return (
    <div className="flex justify-center items-center py-5 space-x-4">
      <button onClick={previous} className="bg-orange-400 hover:bg-orange-200 text-black font-bold py-3 px-3 shadow-md rounded-full">
        <i className="fas fa-chevron-left"></i> Previous
      </button>
      <button onClick={next} className="bg-orange-400 hover:bg-orange-200 text-black font-bold py-3 px-6 shadow-md rounded-full">
         Next <i className="fas fa-chevron-right"></i>
      </button>
    </div>
  );
};

export default function CourseContainer() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const carouselRef: RefObject<any> = useRef(null);

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.previous();
    }
  };

  return (
    <div className="container mx-auto py-6">
      <img src={CourseImage} alt="Courses" className='px-7 pb-4 mx-auto' />
      
      <Carousel
        responsive={{
          superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
          desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
          tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
          mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
        }}
        transitionDuration={2000}
        containerClass="carousel-container relative"
        autoPlaySpeed={50000}
        draggable={true}
        centerMode={false}
        autoPlay={true}
        infinite={true}
        swipeable={true}
        ref={carouselRef}
        arrows={false}
        renderButtonGroupOutside={true}
        customButtonGroup={<CustomButtonGroup next={handleNext} previous={handlePrev} />}
        itemClass="px-4"
      >
        {courses.map((course) => (
          <div key={course.id} className="bg-white text-black rounded-lg border border-gray-300 shadow-xl px-4 pb-4 pt-2 relative">
            <div className='text-white bg-gradient-to-r from-blue-600 to-blue-300 px-5 py-1 mb-1 inline-block rounded-lg'> Best Selling </div>
            <img className="rounded-lg w-full h-40 object-cover mb-2" src={course.image} alt={course.title} />
            <div className="p-4">
              <h6 className="text-lg font-bold">{course.title}</h6>
              <p className="text-sm">{course.description}</p>
              <p className="text-sm"><strong>Duration:</strong> {course.duration}</p>
              <p className="text-sm"><strong>Fees:</strong> {course.fee}</p>
              <p className="text-sm">{course.startDate}</p>
              <p className="text-sm">{course.registration}</p>
              <div className="flex justify-between items-center mt-4">
                <button className="bg-blue-600 hover:bg-blue-400 text-white rounded px-5 py-2 text-sm">Explore</button>
                <a href={course.paymentLink}>
                  <button className="bg-green-600 hover:bg-green-400 text-white rounded px-5 py-2 text-sm">Pay Now</button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

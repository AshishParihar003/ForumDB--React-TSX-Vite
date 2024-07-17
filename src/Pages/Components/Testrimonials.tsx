// import React, { useState } from 'react';
// import pic3 from "../../assets/student.jpg";
// import pic4 from "../../assets/student2.jpg";
// import pic5 from "../../assets/student1.jpg";
// import youtube from "../../assets/youtube.jpg";

// interface StudentReviewProps {
//   name: string;
//   image: string;
//   review: string;
//   rating: number;
//   isExTCS: boolean; 
// }

// const StudentReview: React.FC<StudentReviewProps> = ({ name, image, review, rating, isExTCS }) => {
//   const [showFullReview, setShowFullReview] = useState(false);

//   const toggleShowFullReview = () => {
//     setShowFullReview(!showFullReview);
//   };

//   return (
//     <div className="student-review flex mb-4 p-4 border-4 border-gray-300 shadow-lg">
//       <div className="flex h-full">
//         <div className="flex-shrink-0">
//           <img src={image} alt={name} className="student-image w-auto h-44 rounded-full object-cover mr-4" />
//         </div>
//         <div className="flex-grow">
//           <h3 className="text-xl font-semibold">{name}</h3>
//           {isExTCS && <span className="badge bg-blue-200 text-blue-700 px-2 py-1 rounded-full mb-2 inline-block">Ex TCS</span>}
//           <p className={`review-text ${showFullReview ? '' : 'truncate'}`}>
//             {review}
//           </p>
//           <div className="rating mb-2">
//             {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
//           </div>
//           <button className="text-blue-500 underline" onClick={toggleShowFullReview}>
//             {showFullReview ? 'Show Less' : 'Read More'}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// const StudentReviews: React.FC = () => {
//   const reviews = [
//     {
//       name: 'Raj Singh',
//       image: pic3,
//       review: "Exceptional mentorship and support during my Azure Data Engineering course journey. Your guidance and expertise helped me navigate the complexities of the course and secure a new job with a remarkable 50% hike.",
//       rating: 5,
//       isExTCS: false
//     },
//     {
//       name: 'Sagar Kumar Singh',
//       image: pic4,
//       review: 'Exceptional mentorship and guidance during my journey into Azure data engineering. With his invaluable support, I gained a deeper understanding of Azure technologies and secured a new job with an incredible 150% hike.',
//       rating: 5,
//       isExTCS: false
//     },{
//       name: 'Krishan Pal',
//       image: pic5,
//       review: 'Guidance and mentorship provided by Mr. Arun Kumar throughout my journey in data engineering. Under his expert tutelage, I acquired invaluable skills and achieved an astounding 180% hike in my career trajectory.',
//       rating: 5,
//       isExTCS: false
//     },
//   ];

//   return (
//     <div className="container  flex mx-auto my-5">
//       <div className="flex flex-col items-center">
//         {reviews.map((review, index) => (
//           <div key={index} className="w-full md:w-2/3 lg:w-1/2 flex justify-center mb-4">
//             <StudentReview {...review} />
//           </div>
//         ))}
//       </div>
//       <div className="mt-5">
//         <img src={youtube} className="w-full" alt="Responsive" />
//       </div>
//     </div>
//   );
// }

// export default StudentReviews;

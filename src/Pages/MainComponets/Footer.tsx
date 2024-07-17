import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from 'react-router-dom';

const legalLinks = [
  { to: "/PrivacyPolicy", text: "Privacy Policy" },
  { to: "/Terms", text: "Terms and Condition" },
  { to: "\\src\\pages\\cancellation_and_refund_policy.html", text: "Refund & Cancellation Policy" },
  { to: "\\src\\pages\\shipping_and_delivery.html", text: "Shipping and Delivery" }
];

const usefulLinks = [
  { to: "/our-courses", text: "Our Courses" },
  { to: "/our-selection", text: "Our Selection" },
  { to: "/help", text: "Help" }
];

const contactInfo = [
  { iconClass: "fa-home", text: "B.No 958, Pocket C Gurugram, Haryana India" },
  { iconClass: "fa-envelope", text: "forumde127@gmail.com" },
  { iconClass: "fa-phone", text: "+91 7870970617" },
  { iconClass: "fa-print", text: "+91 9801830173" }
];

export function Footer() {
  return (
    <>
      <footer className="text-center text-lg-start bg-gray-100 text-gray-600 w-fit">
        <section className="bg-gray-200 py-8">
          <div className="container mx-auto text-center md:text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <h1 className="text-2xl font-bold mb-4 text-black">ForumDE</h1>
                <h5 className="text-xl font-semibold">Simplifying Technology For You.</h5>
                <h6 className="mt-2">
                  ForumDE has redefined, revolutionized, and simplified the way students learn technology whether they are a college student or working professional. Today, it’s one of the top websites and institutions when it comes to imparting quality content, guidance, and teaching with regards to technology.
                </h6>
              </div>

              <div>
                <h5 className="text-lg font-bold mb-3 mt-3 text-black">LEGAL</h5>
                {legalLinks.map((link, index) => (
                  <p key={index}>
                    <Link to={link.to} className="text-gray-600 hover:text-gray-800 font-semibold">{link.text}</Link>
                  </p>
                ))}
              </div>

              <div>
                <h5 className="text-lg font-bold mb-4 text-black">Useful links</h5>
                {usefulLinks.map((link, index) => (
                  <p key={index}>
                    <Link to={link.to} className="text-gray-600 hover:text-gray-800 font-semibold">{link.text}</Link>
                  </p>
                ))}
              </div>

              <div className="text-black">
                <h5 className="text-lg font-bold mb-4">Contact</h5>
                {contactInfo.map((info, index) => (
                  <p key={index}>
                    <i className={`fas ${info.iconClass} mr-2 font-bold`}></i>{info.text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gray-200 py-4">
          <div className="container mx-auto text-center">
            <h5 className="text-lg font-bold mb-4">Follow Us</h5>
            <div className="flex justify-center space-x-4">
              <a href="https://www.youtube.com/@forum_de" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-youtube text-red-600 text-2xl"></i>
              </a>
              <a href="https://www.linkedin.com/company/forumde/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin text-blue-700 text-2xl"></i>
              </a>
              <a href="https://www.instagram.com/forum_de_team?igsh=MXBldW5uOGwxbTlkeA==" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram text-pink-500 text-2xl"></i>
              </a>
              <a href="https://www.facebook.com/Forum.DE.Team" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook text-blue-600 text-2xl"></i>
              </a>
              <a href="https://discord.gg/s2CjQAJVnZ" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-discord text-blue-900 text-2xl"></i>
              </a>
            </div>
          </div>
        </section>
        <div className="bg-gray-200">
          <div className="text-center py-4 text-lg" style={{ color: "black" }}>
            © 2024 Copyright :
            <a className="text-gray-600 hover:text-gray-800 font-bold ml-2" href="https://forumde.in/">ForumDE</a>
          </div>
        </div>
      </footer>
    </>
  );
}

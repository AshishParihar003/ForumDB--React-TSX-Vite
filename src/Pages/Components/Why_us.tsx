import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingDollar, faRankingStar, faTruckFast } from '@fortawesome/free-solid-svg-icons';

const skillData = [
  {
    name: "Best Price",
    icon: (<FontAwesomeIcon icon={faHandHoldingDollar} className="text-5xl text-black group-hover:text-white/50 duration-300"/>),
    link: "#",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet accumsan arcu.",
    aosDelay: "0"
  },
  {
    name: "Fast and Safe",
    icon: (<FontAwesomeIcon icon={faTruckFast} className="text-5xl text-black group-hover:text-white/50 duration-300"/>),
    link: "#",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet accumsan arcu.",
    aosDelay: "500"
  },
  {
    name: "Quality Service",
    icon: (<FontAwesomeIcon icon={faRankingStar} className="text-5xl text-black group-hover:text-white/50 duration-300"/>),
    link: "#",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet accumsan arcu. Donec non est at libero vulputate rutrum.",
    aosDelay: "1000"
  },
];

export const WhyUs = () => {
  return (
    <div className="py-14  sm:min-h-[600px] sm:grid sm:place-items-center text-black">
      <div className="pb-12" >
        <h1 className="text-6xl font-extrabold text-center font-serif sm:text-6xl">Why Choose Us</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 px-4">
        {skillData.map((skill) => (
          <div 
            key={skill.name} 
            data-aos="fade-up" 
            data-aos-delay={skill.aosDelay} 
            className="card text-center space-y-3 p-4 sm:py-16 bg-orange-400 hover:bg-white/80 duration-300 rounded-lg"
          >
            <div className="grid place-items-center">
              {skill.icon}
            </div>
            <h1 className="text-lg font-semibold">{skill.name}</h1>
            <p className="max-w-xs mx-auto">{skill.description}</p>
            <a href={skill.link} className="text-orange-600 hover:underline hover:text-black">Learn More</a>
          </div>
        ))}
      </div>
    </div>
  )
}

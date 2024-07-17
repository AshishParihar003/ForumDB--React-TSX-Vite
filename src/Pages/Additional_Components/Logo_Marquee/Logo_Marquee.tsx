import Marquee from 'react-fast-marquee'
import Excel from "../../../assets/Logo/excel.jpg"
import Google from "../../../assets/Logo/google.jpg"
import SQL from "../../../assets/Logo/SQL.png"

const Logo_Marquee = () => {
  return (
    <div>
        <div>
            <h1 className=' text-center font-bold p-3 ' style={{fontSize: 50}}>Our Technology </h1>
        </div>
        <Marquee speed={100} style={{padding: 20, gap: 10}}>
            <div>
                <img src={Excel} alt="" className=' p-2 ' />
            </div>
            <div>
                <img src={Google} alt=""className=' p-2' />
            </div>
            <div>
                <img src={SQL} alt="" className=' p-2'/>
            </div>
            </Marquee>r
    </div>
  )
}

export default Logo_Marquee

import { Image } from "react-bootstrap"
import logo from "../assets/nba-logo.png"
const Header = () => {
  return (
    <div className="headerDiv">
      <Image className="m-3" src={logo}></Image>
      <h1>NBA LEGENDS</h1>    
      <div className="w-100 my-4 text-center">
    <input type="text" className="w-25 " onChange={} />
    </div>  
    </div>
  )
}

export default Header
